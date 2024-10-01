// import React, { useState, useRef, useEffect } from "react";

// const AnswerRecorder = ({ onAnswerSubmit, questionId }) => {
//   const [isRecording, setIsRecording] = useState(false);
//   const [showConfirmation, setShowConfirmation] = useState(false);
//   const mediaRecorderRef = useRef(null);
//   const audioChunksRef = useRef([]);

//   useEffect(() => {
//     let silenceTimeout;

//     const startRecording = async () => {
//       try {
//         const stream = await navigator.mediaDevices.getUserMedia({
//           audio: true,
//           video: true,
//         });
//         mediaRecorderRef.current = new MediaRecorder(stream);

//         mediaRecorderRef.current.ondataavailable = (event) => {
//           if (event.data.size > 0) {
//             audioChunksRef.current.push(event.data);
//           }
//         };

//         mediaRecorderRef.current.onstop = () => {
//           const audioBlob = new Blob(audioChunksRef.current, {
//             type: "video/webm",
//           });
//           audioChunksRef.current = [];
//           onAnswerSubmit(audioBlob);
//         };

//         mediaRecorderRef.current.start();
//         setIsRecording(true);

//         //we need to detect the silence and show the popup for verification
//         const audioContext = new AudioContext();
//         const analyser = audioContext.createAnalyser();
//         const microphone = audioContext.createMediaStreamSource(stream);
//         microphone.connect(analyser);
//         analyser.fftSize = 256;
//         const bufferLength = analyser.frequencyBinCount;
//         const dataArray = new Uint8Array(bufferLength);

//         function checkSilence() {
//           analyser.getByteFrequencyData(dataArray);
//           const silence = dataArray.every((value) => value < 10);

//           if (silence) {
//             silenceTimeout = setTimeout(() => {
//               setShowConfirmation(true);
//             }, 2000); // Wait 2 seconds of silence before showing confirmation
//           } else {
//             clearTimeout(silenceTimeout);
//           }

//           if (isRecording) {
//             requestAnimationFrame(checkSilence);
//           }
//         }

//         checkSilence();
//       } catch (error) {
//         console.error("Error starting recording:", error);
//       }
//     };

//     startRecording();

//     return () => {
//       if (
//         mediaRecorderRef.current &&
//         mediaRecorderRef.current.state === "recording"
//       ) {
//         mediaRecorderRef.current.stop();
//       }
//       clearTimeout(silenceTimeout);
//     };
//   }, [onAnswerSubmit]);

//   const handleConfirmation = (confirmed) => {
//     if (confirmed) {
//       mediaRecorderRef.current.stop();
//       setIsRecording(false);
//     } else {
//       setShowConfirmation(false);
//     }
//   };

//   return (
//     <div>
//       {isRecording && <div>Recording in progress...</div>}
//       {showConfirmation && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="p-4 bg-white rounded-lg">
//             <p>Have you finished your answer?</p>
//             <button
//               onClick={() => handleConfirmation(true)}
//               className="px-4 py-2 mr-2 text-white bg-green-500 rounded"
//             >
//               Yes
//             </button>
//             <button
//               onClick={() => handleConfirmation(false)}
//               className="px-4 py-2 text-white bg-red-500 rounded"
//             >
//               No
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AnswerRecorder;

import React, { useState, useRef, useEffect } from "react";

const AnswerRecorder = ({ onAnswerSubmit, questionId }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const analyserRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    let silenceTimeout;

    const startRecording = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: true,
        });
        mediaRecorderRef.current = new MediaRecorder(stream);

        mediaRecorderRef.current.ondataavailable = (event) => {
          if (event.data.size > 0) {
            audioChunksRef.current.push(event.data);
          }
        };

        mediaRecorderRef.current.onstop = () => {
          const audioBlob = new Blob(audioChunksRef.current, {
            type: "video/webm",
          });
          audioChunksRef.current = [];
          onAnswerSubmit(audioBlob);
        };

        mediaRecorderRef.current.start();
        setIsRecording(true);

        const audioContext = new AudioContext();
        analyserRef.current = audioContext.createAnalyser();
        const microphone = audioContext.createMediaStreamSource(stream);
        microphone.connect(analyserRef.current);
        analyserRef.current.fftSize = 256;
        const bufferLength = analyserRef.current.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        function checkAudio() {
          analyserRef.current.getByteFrequencyData(dataArray);
          const silence = dataArray.every((value) => value < 10);

          setIsSpeaking(!silence);

          if (silence) {
            silenceTimeout = setTimeout(() => {
              setShowConfirmation(true);
            }, 2000); // Wait 2 seconds of silence before showing confirmation
          } else {
            clearTimeout(silenceTimeout);
          }

          if (isRecording) {
            animationFrameRef.current = requestAnimationFrame(checkAudio);
          }
        }

        checkAudio();
      } catch (error) {
        console.error("Error starting recording:", error);
      }
    };

    startRecording();

    return () => {
      if (
        mediaRecorderRef.current &&
        mediaRecorderRef.current.state === "recording"
      ) {
        mediaRecorderRef.current.stop();
      }
      clearTimeout(silenceTimeout);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [onAnswerSubmit]);

  const handleConfirmation = (confirmed) => {
    if (confirmed) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    } else {
      setShowConfirmation(false);
    }
  };

  return (
    <div>
      {isRecording && (
        <div>
          Recording in progress...
          <span className="ml-2 font-bold">
            {isSpeaking ? "Speaking" : "......."}
          </span>
        </div>
      )}
      {showConfirmation && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-4 bg-white rounded-lg">
            <p>Have you finished your answer?</p>
            <button
              onClick={() => handleConfirmation(true)}
              className="px-4 py-2 mr-2 text-white bg-green-500 rounded"
            >
              Yes
            </button>
            <button
              onClick={() => handleConfirmation(false)}
              className="px-4 py-2 text-white bg-red-500 rounded"
            >
              No
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnswerRecorder;
