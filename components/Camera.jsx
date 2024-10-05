//main vidhans code
// "use client";
// import React, { useRef, useState, useEffect, useCallback } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { submitAnswer, fetchNextQuestion } from "../app/redux/interviewSlice";
// import Image from "next/image";
// import SiriWaveComponent from "./SiriWaveComponent";
// // import SiriWave from "siriwave";

// export default function Camera({ onAccessGranted, questionId, base64Audio }) {
//   const videoRef = useRef(null);
//   const mediaRecorderRef = useRef(null);
//   const audioContextRef = useRef(null);
//   const analyserRef = useRef(null);
//   const [recording, setRecording] = useState(false);
//   const [recordedChunks, setRecordedChunks] = useState([]);
//   const [showPopup, setShowPopup] = useState(true);
//   const [showRecordingPopup, setShowRecordingPopup] = useState(false);
//   const [accessGranted, setAccessGranted] = useState(false);
//   const [error, setError] = useState(null);
//   const [canSubmit, setCanSubmit] = useState(false);
//   const [recordingAttempts, setRecordingAttempts] = useState(0);
//   const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);
//   const [timer, setTimer] = useState(10);
//   const timerRef = useRef(null);
//   const [isRecording, setIsRecording] = useState(false);
//   // const [isSpeechDetectorActive, setIsSpeechDetectorActive] = useState(false);
//   const [isSpeaking, setIsSpeaking] = useState(false);
//   // const siriWaveRef = useRef(null);
//   // const siriWaveContainerRef = useRef(null);
//   // const audioSourceRef = useRef(null);
//   const [isbase64Audio, setIsbase64Audio] = useState(false);

//   const requestAccess = async () => {
//     try {
//       console.log("Requesting camera access...");
//       const stream = await navigator.mediaDevices.getUserMedia({
//         video: true,
//         audio: true,
//       });
//       console.log("Access granted:", stream);
//       if (videoRef.current) {
//         videoRef.current.srcObject = stream;
//         await videoRef.current.play();
//         console.log("Video playing");
//       } else {
//         console.error("Video ref is null");
//       }
//       setAccessGranted(true);
//       setShowPopup(false);
//       onAccessGranted(); //calling the function that we got from TestLiveVid.jsx
//       // fetchFirstQuestion(); //fetch the first question
//       setupAudioAnalysis(stream);
//     } catch (error) {
//       console.error("Error accessing camera and microphone: ", error);
//       setError(error.message);
//       setShowPopup(false);
//     }
//   };

//   const dispatch = useDispatch();
//   const { interviewId, jobId, userId } = useSelector(
//     (state) => state.interview
//   );

//   const setupAudioAnalysis = (stream) => {
//     audioContextRef.current = new (window.AudioContext ||
//       window.webkitAudioContext)();
//     analyserRef.current = audioContextRef.current.createAnalyser();
//     const source = audioContextRef.current.createMediaStreamSource(stream);
//     source.connect(analyserRef.current);
//     analyserRef.current.fftSize = 256;
//     detectSpeech();
//   };

//   const detectSpeech = () => {
//     const bufferLength = analyserRef.current.frequencyBinCount;
//     const dataArray = new Uint8Array(bufferLength);

//     const checkAudio = () => {
//       analyserRef.current.getByteFrequencyData(dataArray);
//       const sum = dataArray.reduce((a, b) => a + b, 0);
//       const average = sum / bufferLength;
//       setIsSpeaking(average > 20); // Adjust this threshold as needed
//       requestAnimationFrame(checkAudio);
//     };

//     checkAudio();
//   };

//   useEffect(() => {
//     if (accessGranted && videoRef.current && !videoRef.current.srcObject) {
//       requestAccess();
//     }
//   }, [accessGranted]);

//   useEffect(() => {
//     if (base64Audio) {
//       setIsbase64Audio(true);
//     }
//   }, [base64Audio]);

//   const handleStartRecording = () => {
//     setShowRecordingPopup(true); // Show the confirmation popup
//   };
//   const confirmStartRecording = () => {
//     setRecordedChunks([]);
//     const stream = videoRef.current.srcObject;
//     const mediaRecorder = new MediaRecorder(stream, { mimeType: "video/webm" });
//     mediaRecorderRef.current = mediaRecorder;

//     mediaRecorder.ondataavailable = (event) => {
//       if (event.data && event.data.size > 0) {
//         setRecordedChunks((prev) => [...prev, event.data]);
//       }
//     };

//     mediaRecorder.start(1000); // Collect data every second
//     setRecording(true);
//     setIsRecording(true);
//     // setIsSpeechDetectorActive(true);
//     setShowRecordingPopup(false);
//   };
//   const cancelStartRecording = () => {
//     setShowRecordingPopup(false);
//   };

//   const stopRecording = () => {
//     if (mediaRecorderRef.current && recording) {
//       mediaRecorderRef.current.stop();
//       setRecording(false);
//       setIsRecording(false);
//       // setIsSpeechDetectorActive(false);

//       // Wait for the final chunk to be processed
//       setTimeout(() => {
//         setCanSubmit(true);
//         setShowConfirmationPopup(true);
//         setRecordingAttempts((prev) => prev + 1);
//       }, 500);
//     }
//   };
//   const startTimer = () => {
//     setTimer(10);
//     timerRef.current = setInterval(() => {
//       setTimer((prevTimer) => {
//         if (prevTimer <= 1) {
//           clearInterval(timerRef.current);
//           submitAnswer(); // Automatically submit when timer reaches 0
//           return 0;
//         }
//         return prevTimer - 1;
//       });
//     }, 1000);
//   };

//   const stopTimer = () => {
//     clearInterval(timerRef.current);
//   };

//   const handleReRecord = () => {
//     stopTimer();
//     setShowConfirmationPopup(false);
//     setRecordedChunks([]);
//     setCanSubmit(false);
//     handleStartRecording();
//   };

//   const submitAnswerToFetch = useCallback(async () => {
//     stopTimer();
//     setIsRecording(false);
//     const blob = new Blob(recordedChunks, { type: "video/webm" });
//     const formData = new FormData();
//     formData.append("file", blob);
//     formData.append("interviewId", interviewId);
//     formData.append("jobId", jobId);
//     formData.append("userId", userId);
//     formData.append("questionId", questionId);

//     try {
//       await dispatch(submitAnswer({ formData })).unwrap();
//       console.log("Answer submitted successfully");
//       await dispatch(
//         fetchNextQuestion({ interviewId, jobId, userId })
//       ).unwrap();
//       setRecordingAttempts(0);
//       setShowConfirmationPopup(false);
//     } catch (error) {
//       console.error(
//         "Error submitting answer or fetching next question:",
//         error
//       );
//       setError(
//         "Failed to submit answer or fetch next question. Please try again."
//       );
//     }
//   }, [
//     dispatch,
//     recordedChunks,
//     interviewId,
//     jobId,
//     userId,
//     questionId,
//     stopTimer,
//   ]);

//   useEffect(() => {
//     if (showConfirmationPopup) {
//       startTimer();
//     }
//     return () => stopTimer(); // Cleanup timer on component unmount or when popup closes
//   }, [showConfirmationPopup]);

//   return (
//     <div className="flex flex-col items-center justify-center w-full h-full p-4 bg-black rounded-lg">
//       {showPopup && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="p-6 bg-white rounded-lg">
//             <h2 className="mb-4 text-xl font-bold text-black">
//               Camera and Microphone Access Required
//             </h2>
//             <p className="mb-4 text-black">
//               This website needs access to your camera and microphone.
//             </p>
//             <button
//               onClick={requestAccess}
//               className="px-4 py-2 text-white bg-blue-500 rounded-lg"
//             >
//               Allow Access
//             </button>
//           </div>
//         </div>
//       )}
//       {showRecordingPopup && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="p-6 bg-white rounded-lg">
//             <h2 className="mb-4 text-xl font-bold text-black">
//               Start Screen Recording
//             </h2>
//             <p className="mb-4 text-black">
//               Are you sure you want to start recording the screen?
//             </p>
//             <div className="flex justify-end space-x-4">
//               <button
//                 onClick={confirmStartRecording}
//                 className="px-4 py-2 text-white bg-red-600 rounded-lg"
//               >
//                 Yes
//               </button>
//               <button
//                 onClick={cancelStartRecording}
//                 className="px-4 py-2 text-black bg-gray-300 rounded-lg"
//               >
//                 No
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//       {showConfirmationPopup && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="w-full h-48 max-w-2xl p-6 bg-white rounded-lg">
//             <div className="flex flex-row justify-between">
//               <h2 className="mb-4 text-xl font-bold text-black">
//                 Recording Completed
//               </h2>
//               <p className="mb-4 font-bold text-black">{timer}s</p>
//             </div>
//             <p className="mb-4 text-black">
//               {recordingAttempts < 3
//                 ? "Do you want to submit this recording or re-record?"
//                 : "You have used all re-record attempts. Do you want to submit this recording?"}
//             </p>

//             <div className="flex justify-center space-x-4">
//               <button onClick={submitAnswerToFetch}>
//                 <Image
//                   src="/submit.svg"
//                   width={345}
//                   height={54}
//                   alt="start rec"
//                 />
//               </button>
//               {recordingAttempts < 3 && (
//                 <button
//                   onClick={handleReRecord}
//                   className="px-4 py-2 text-white transition duration-200 bg-red-500 rounded-lg hover:bg-red-600"
//                 >
//                   Re-record ({3 - recordingAttempts} attempts left)
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       )}

//       {accessGranted && (
//         <div className="flex flex-col w-full h-[860px] gap-2">
//           <video
//             ref={videoRef}
//             className={`w-full h-[547px] border ${
//               recording ? "border-red-600" : "border-gray-300"
//             } rounded-lg`}
//             autoPlay
//             playsInline
//             muted
//           />
//           <div className="flex flex-col items-center w-full py-3 bg-black">
//             <div className="flex items-center justify-center h-36">
//               {isRecording ? (
//                 <>
//                   <Image
//                     src="/myrec.svg"
//                     width={840}
//                     height={168}
//                     alt="recording visualization"
//                   />
//                   <div className="ml-4 text-xl text-white">
//                     {isSpeaking ? "Speaking" : "Not Speaking"}
//                   </div>
//                 </>
//               ) : (
//                 <>
//                   <SiriWaveComponent freq={6} amp={1} />
//                 </>
//               )}
//             </div>
//           </div>
//           <div className="flex items-center justify-center w-full gap-4 mt-4 space-x-4">
//             {!recording ? (
//               <button
//                 onClick={handleStartRecording}
//                 disabled={recordingAttempts >= 3 && !canSubmit}
//               >
//                 <Image
//                   src="/startrec.svg"
//                   width={345}
//                   height={54}
//                   alt="start recording"
//                 />
//               </button>
//             ) : (
//               <button onClick={stopRecording}>
//                 <Image
//                   src="/stoprec.svg"
//                   width={345}
//                   height={54}
//                   alt="stop recording"
//                 />
//               </button>
//             )}
//           </div>
//         </div>
//       )}
//       {error && <p className="mt-4 text-red-500">{error}</p>}
//     </div>
//   );
// }
//main
// "use client";
// import React, { useRef, useState, useEffect, useCallback } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { submitAnswer, fetchNextQuestion } from "../app/redux/interviewSlice";
// import Image from "next/image";
// import SiriWaveComponent from "./SiriWaveComponent";
// // import SiriWave from "siriwave";

// export default function Camera({ onAccessGranted, questionId, base64Audio }) {
//   const videoRef = useRef(null);
//   const mediaRecorderRef = useRef(null);
//   const audioContextRef = useRef(null);
//   const analyserRef = useRef(null);
//   const [recording, setRecording] = useState(false);
//   const [recordedChunks, setRecordedChunks] = useState([]);
//   const [showPopup, setShowPopup] = useState(true);
//   const [showRecordingPopup, setShowRecordingPopup] = useState(false);
//   const [accessGranted, setAccessGranted] = useState(false);
//   const [error, setError] = useState(null);
//   const [canSubmit, setCanSubmit] = useState(false);
//   const [recordingAttempts, setRecordingAttempts] = useState(0);
//   const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);
//   const [timer, setTimer] = useState(10);
//   const timerRef = useRef(null);
//   const [isRecording, setIsRecording] = useState(false);
//   // const [isSpeechDetectorActive, setIsSpeechDetectorActive] = useState(false);
//   const [isSpeaking, setIsSpeaking] = useState(false);
//   // const siriWaveRef = useRef(null);
//   // const siriWaveContainerRef = useRef(null);
//   // const audioSourceRef = useRef(null);
//   const [isbase64Audio, setIsbase64Audio] = useState(false);

//   const requestAccess = async () => {
//     try {
//       console.log("Requesting camera access...");
//       const stream = await navigator.mediaDevices.getUserMedia({
//         video: true,
//         audio: true,
//       });
//       console.log("Access granted:", stream);
//       if (videoRef.current) {
//         videoRef.current.srcObject = stream;
//         await videoRef.current.play();
//         console.log("Video playing");
//       } else {
//         console.error("Video ref is null");
//       }
//       setAccessGranted(true);
//       setShowPopup(false);
//       onAccessGranted(); //calling the function that we got from TestLiveVid.jsx
//       // fetchFirstQuestion(); //fetch the first question
//       setupAudioAnalysis(stream);
//     } catch (error) {
//       console.error("Error accessing camera and microphone: ", error);
//       setError(error.message);
//       setShowPopup(false);
//     }
//   };

//   const dispatch = useDispatch();
//   const { interviewId, jobId, userId } = useSelector(
//     (state) => state.interview
//   );

//   const setupAudioAnalysis = (stream) => {
//     audioContextRef.current = new (window.AudioContext ||
//       window.webkitAudioContext)();
//     analyserRef.current = audioContextRef.current.createAnalyser();
//     const source = audioContextRef.current.createMediaStreamSource(stream);
//     source.connect(analyserRef.current);
//     analyserRef.current.fftSize = 256;
//     detectSpeech();
//   };

//   const detectSpeech = () => {
//     const bufferLength = analyserRef.current.frequencyBinCount;
//     const dataArray = new Uint8Array(bufferLength);

//     const checkAudio = () => {
//       analyserRef.current.getByteFrequencyData(dataArray);
//       const sum = dataArray.reduce((a, b) => a + b, 0);
//       const average = sum / bufferLength;
//       setIsSpeaking(average > 20); // Adjust this threshold as needed
//       requestAnimationFrame(checkAudio);
//     };

//     checkAudio();
//   };

//   useEffect(() => {
//     if (accessGranted && videoRef.current && !videoRef.current.srcObject) {
//       requestAccess();
//     }
//   }, [accessGranted]);

//   useEffect(() => {
//     if (base64Audio) {
//       setIsbase64Audio(true);
//     }
//   }, [base64Audio]);

//   const handleStartRecording = () => {
//     setShowRecordingPopup(true); // Show the confirmation popup
//   };
//   const confirmStartRecording = () => {
//     setRecordedChunks([]);
//     const stream = videoRef.current.srcObject;
//     const mediaRecorder = new MediaRecorder(stream, { mimeType: "video/webm" });
//     mediaRecorderRef.current = mediaRecorder;

//     mediaRecorder.ondataavailable = (event) => {
//       if (event.data && event.data.size > 0) {
//         setRecordedChunks((prev) => [...prev, event.data]);
//       }
//     };

//     mediaRecorder.start(1000); // Collect data every second
//     setRecording(true);
//     setIsRecording(true);
//     // setIsSpeechDetectorActive(true);
//     setShowRecordingPopup(false);
//   };
//   const cancelStartRecording = () => {
//     setShowRecordingPopup(false);
//   };

//   const stopRecording = () => {
//     if (mediaRecorderRef.current && recording) {
//       mediaRecorderRef.current.stop();
//       setRecording(false);
//       setIsRecording(false);
//       // setIsSpeechDetectorActive(false);

//       // Wait for the final chunk to be processed
//       setTimeout(() => {
//         setCanSubmit(true);
//         setShowConfirmationPopup(true);
//         setRecordingAttempts((prev) => prev + 1);
//       }, 500);
//     }
//   };
//   const startTimer = () => {
//     setTimer(10);
//     timerRef.current = setInterval(() => {
//       setTimer((prevTimer) => {
//         if (prevTimer <= 1) {
//           clearInterval(timerRef.current);
//           // submitAnswer(); // Automatically submit when timer reaches 0
//           return 0;
//         }
//         return prevTimer - 1;
//       });
//     }, 1000);
//   };

//   const stopTimer = () => {
//     clearInterval(timerRef.current);
//   };

//   const handleReRecord = () => {
//     stopTimer();
//     setShowConfirmationPopup(false);
//     setRecordedChunks([]);
//     setCanSubmit(false);
//     handleStartRecording();
//   };

//   // const submitAnswerToFetch = useCallback(async () => {
//   //   stopTimer();
//   //   setIsRecording(false);
//   //   const blob = new Blob(recordedChunks, { type: "video/webm" });
//   //   const formData = new FormData();
//   //   formData.append("file", blob);
//   //   formData.append("interviewId", interviewId);
//   //   formData.append("jobId", jobId);
//   //   formData.append("userId", userId);
//   //   formData.append("questionId", questionId);

//   //   try {
//   //     await dispatch(submitAnswer({ formData })).unwrap();
//   //     console.log("Answer submitted successfully");
//   //     await dispatch(
//   //       fetchNextQuestion({ interviewId, jobId, userId })
//   //     ).unwrap();
//   //     setRecordingAttempts(0);
//   //     setShowConfirmationPopup(false);
//   //   } catch (error) {
//   //     console.error(
//   //       "Error submitting answer or fetching next question:",
//   //       error
//   //     );
//   //     setError(
//   //       "Failed to submit answer or fetch next question. Please try again."
//   //     );
//   //   }
//   // }, [
//   //   dispatch,
//   //   recordedChunks,
//   //   interviewId,
//   //   jobId,
//   //   userId,
//   //   questionId,
//   //   stopTimer,
//   // ]);

//   useEffect(() => {
//     if (showConfirmationPopup) {
//       startTimer();
//     }
//     return () => stopTimer(); // Cleanup timer on component unmount or when popup closes
//   }, [showConfirmationPopup]);

//   return (
//     <div className="flex flex-col items-center justify-center w-full h-full p-4 bg-black rounded-lg">
//       {showPopup && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="p-6 bg-white rounded-lg">
//             <h2 className="mb-4 text-xl font-bold text-black">
//               Camera and Microphone Access Required
//             </h2>
//             <p className="mb-4 text-black">
//               This website needs access to your camera and microphone.
//             </p>
//             <button
//               onClick={requestAccess}
//               className="px-4 py-2 text-white bg-blue-500 rounded-lg"
//             >
//               Allow Access
//             </button>
//           </div>
//         </div>
//       )}
//       {showRecordingPopup && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="p-6 bg-white rounded-lg">
//             <h2 className="mb-4 text-xl font-bold text-black">
//               Start Screen Recording
//             </h2>
//             <p className="mb-4 text-black">
//               Are you sure you want to start recording the screen?
//             </p>
//             <div className="flex justify-end space-x-4">
//               <button
//                 onClick={confirmStartRecording}
//                 className="px-4 py-2 text-white bg-red-600 rounded-lg"
//               >
//                 Yes
//               </button>
//               <button
//                 onClick={cancelStartRecording}
//                 className="px-4 py-2 text-black bg-gray-300 rounded-lg"
//               >
//                 No
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//       {showConfirmationPopup && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="w-full h-48 max-w-2xl p-6 bg-white rounded-lg">
//             <div className="flex flex-row justify-between">
//               <h2 className="mb-4 text-xl font-bold text-black">
//                 Recording Completed
//               </h2>
//               <p className="mb-4 font-bold text-black">{timer}s</p>
//             </div>
//             <p className="mb-4 text-black">
//               {recordingAttempts < 3
//                 ? "Do you want to submit this recording or re-record?"
//                 : "You have used all re-record attempts. Do you want to submit this recording?"}
//             </p>

//             <div className="flex justify-center space-x-4">
//               <button>
//                 <Image
//                   src="/submit.svg"
//                   width={345}
//                   height={54}
//                   alt="start rec"
//                 />
//               </button>
//               {recordingAttempts < 3 && (
//                 <button
//                   onClick={handleReRecord}
//                   className="px-4 py-2 text-white transition duration-200 bg-red-500 rounded-lg hover:bg-red-600"
//                 >
//                   Re-record ({3 - recordingAttempts} attempts left)
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       )}

//       {accessGranted && (
//         <div className="flex flex-col w-full gap-2">
//           <video
//             ref={videoRef}
//             className={`w-full h-[500px] border ${
//               recording ? "border-red-600" : "border-gray-300"
//             } rounded-lg`}
//             autoPlay
//             playsInline
//             muted
//           />
//           <div className="flex flex-col items-center w-full py-3 bg-black">
//             <div className="flex items-center justify-center h-36">
//               {isRecording ? (
//                 <>
//                   <Image
//                     src="/myrec.svg"
//                     width={840}
//                     height={168}
//                     alt="recording visualization"
//                   />
//                   <div className="ml-4 text-xl text-white">
//                     {isSpeaking ? "Speaking" : "Not Speaking"}
//                   </div>
//                 </>
//               ) : (
//                 <>
//                   {isbase64Audio ? (
//                     <SiriWaveComponent freq={6} amp={1} />
//                   ) : (
//                     // <Image
//                     //   src="/waveicon.svg"
//                     //   width={840}
//                     //   height={168}
//                     //   alt="orion logo"
//                     // />
//                     <SiriWaveComponent freq={0} amp={0} />
//                   )}
//                 </>
//               )}
//             </div>
//           </div>
//           <div className="flex items-center justify-center w-full gap-4 mt-4 space-x-4">
//             {!recording ? (
//               <button
//                 onClick={handleStartRecording}
//                 disabled={recordingAttempts >= 3 && !canSubmit}
//               >
//                 <Image
//                   src="/startrec.svg"
//                   width={345}
//                   height={54}
//                   alt="start recording"
//                 />
//               </button>
//             ) : (
//               <button onClick={stopRecording}>
//                 <Image
//                   src="/stoprec.svg"
//                   width={345}
//                   height={54}
//                   alt="stop recording"
//                 />
//               </button>
//             )}
//           </div>
//         </div>
//       )}
//       {error && <p className="mt-4 text-red-500">{error}</p>}
//     </div>
//   );
// }


"use client";
import React, { useRef, useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitAnswer, fetchNextQuestion } from "../app/redux/interviewSlice";
import Image from "next/image";
import SiriWaveComponent from "./SiriWaveComponent";

export default function Camera({ onAccessGranted, questionId, base64Audio }) {
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const [recording, setRecording] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [showPermissionPopup, setShowPermissionPopup] = useState(true);
  const [showRecordingPopup, setShowRecordingPopup] = useState(false);
  const [accessGranted, setAccessGranted] = useState(false);
  const [error, setError] = useState(null);
  const [canSubmit, setCanSubmit] = useState(false);
  const [recordingAttempts, setRecordingAttempts] = useState(0);
  const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);
  const [timer, setTimer] = useState(10);
  const timerRef = useRef(null);
  const [isRecording, setIsRecording] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [hasVideo, setHasVideo] = useState(false);

  const dispatch = useDispatch();
  // const { interviewId, jobId, userId } = useSelector((state) => state.interview);

  const requestAccess = async () => {
    try {
      // First try to get both audio and video
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          await videoRef.current.play();
        }
        setHasVideo(true);
        setAccessGranted(true);
        setupAudioAnalysis(stream);
      } catch (videoError) {
        // If video fails, try audio only
        console.log("Video access failed, trying audio only");
        const audioStream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        setHasVideo(false);
        setAccessGranted(true);
        setupAudioAnalysis(audioStream);
      }

      setShowPermissionPopup(false);
      onAccessGranted();
    } catch (error) {
      console.error("Error accessing media devices: ", error);
      setError("Please allow access to your microphone to continue.");
      setShowPermissionPopup(false);
    }
  };

  const setupAudioAnalysis = (stream) => {
    audioContextRef.current = new (window.AudioContext ||
      window.webkitAudioContext)();
    analyserRef.current = audioContextRef.current.createAnalyser();
    const source = audioContextRef.current.createMediaStreamSource(stream);
    source.connect(analyserRef.current);
    analyserRef.current.fftSize = 256;
    detectSpeech();
  };

  const detectSpeech = () => {
    const bufferLength = analyserRef.current.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const checkAudio = () => {
      analyserRef.current.getByteFrequencyData(dataArray);
      const sum = dataArray.reduce((a, b) => a + b, 0);
      const average = sum / bufferLength;
      setIsSpeaking(average > 20);
      requestAnimationFrame(checkAudio);
    };

    checkAudio();
  };

  const handleStartRecording = () => {
    setShowRecordingPopup(true);
  };

  const confirmStartRecording = () => {
    setRecordedChunks([]);

    // Use the correct stream based on the presence of video
    const stream = hasVideo
      ? videoRef.current.srcObject // Use video stream if available
      : audioContextRef.current.createMediaStreamDestination().stream; // Use audio-only stream

    // Check if the stream is valid before creating MediaRecorder
    if (!stream) {
      console.error("Stream is not available");
      setError("Unable to start recording. Please check your audio/video settings.");
      return; // Exit the function if the stream is invalid
    }

    const mediaRecorder = new MediaRecorder(stream, {
      mimeType: hasVideo ? "video/webm" : "audio/webm",
    });
    mediaRecorderRef.current = mediaRecorder;

    mediaRecorder.ondataavailable = (event) => {
      if (event.data && event.data.size > 0) {
        setRecordedChunks((prev) => [...prev, event.data]);
      }
    };

    mediaRecorder.start(1000); // Start recording every second
    setRecording(true);
    setIsRecording(true);
    setShowRecordingPopup(false);
  };

  const cancelStartRecording = () => {
    setShowRecordingPopup(false);
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && recording) {
      mediaRecorderRef.current.stop();
      setRecording(false);
      setIsRecording(false);

      setTimeout(() => {
        setCanSubmit(true);
        setShowConfirmationPopup(true);
        setRecordingAttempts((prev) => prev + 1);
      }, 500);
    }
  };

  // Timer and submission logic remains the same
  const startTimer = () => {
    setTimer(10);
    timerRef.current = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 1) {
          clearInterval(timerRef.current);
          submitAnswerToFetch();
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
  };

  const handleReRecord = () => {
    stopTimer();
    setShowConfirmationPopup(false);
    setRecordedChunks([]);
    setCanSubmit(false);
    handleStartRecording();
  };

  const submitAnswerToFetch = useCallback(async () => {
    stopTimer();
    setIsRecording(false);
    const blob = new Blob(recordedChunks, {
      type: hasVideo ? "video/webm" : "audio/webm",
    });
    const formData = new FormData();
    formData.append("file", blob);
    // Removed unnecessary fields
    // formData.append("interviewId", interviewId);
    // formData.append("jobId", jobId);
    // formData.append("userId", userId);
    // formData.append("questionId", questionId);

    try {
      await dispatch(submitAnswer({ formData })).unwrap();
      console.log("Answer submitted successfully");
      setRecordingAttempts(0);
      setShowConfirmationPopup(false);
    } catch (error) {
      console.error("Error submitting answer:", error);
      setError("Failed to submit answer. Please try again.");
    }
  }, [dispatch, recordedChunks, hasVideo]);
  // const submitAnswerToFetch = useCallback(async () => {
  //   stopTimer();
  //   setIsRecording(false);
  //   const blob = new Blob(recordedChunks, {
  //     type: hasVideo ? "video/webm" : "audio/webm",
  //   });
  //   const formData = new FormData();
  //   formData.append("file", blob);
  //   formData.append("interviewId", interviewId);
  //   formData.append("jobId", jobId);
  //   formData.append("userId", userId);
  //   formData.append("questionId", questionId);

  //   try {
  //     await dispatch(submitAnswer({ formData })).unwrap();
  //     console.log("Answer submitted successfully");
  //     await dispatch(fetchNextQuestion({ interviewId, jobId, userId })).unwrap();
  //     setRecordingAttempts(0);
  //     setShowConfirmationPopup(false);
  //   } catch (error) {
  //     console.error("Error submitting answer or fetching next question:", error);
  //     setError("Failed to submit answer or fetch next question. Please try again.");
  //   }
  // }, [dispatch, recordedChunks, interviewId, jobId, userId, questionId, hasVideo]);

  useEffect(() => {
    if (showConfirmationPopup) {
      startTimer();
    }
    return () => stopTimer();
  }, [showConfirmationPopup]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-4 bg-black rounded-lg">
      {showPermissionPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-6 bg-white rounded-lg">
            <h2 className="mb-4 text-xl font-bold text-black">
              Microphone Access Required
            </h2>
            <p className="mb-4 text-black">
              This website needs access to your microphone. Camera access is optional.
            </p>
            <button
              onClick={requestAccess}
              className="px-4 py-2 text-white bg-blue-500 rounded-lg"
            >
              Allow Access
            </button>
          </div>
        </div>
      )}

      {/* Confirmation Popups */}
      {showRecordingPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-6 bg-white rounded-lg">
            <h2 className="mb-4 text-xl font-bold text-black">
              Start Recording
            </h2>
            <p className="mb-4 text-black">
              Are you ready to start recording your answer?
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={confirmStartRecording}
                className="px-4 py-2 text-white bg-red-600 rounded-lg"
              >
                Yes
              </button>
              <button
                onClick={cancelStartRecording}
                className="px-4 py-2 text-black bg-gray-300 rounded-lg"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}

      {showConfirmationPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full h-48 max-w-2xl p-6 bg-white rounded-lg">
            <div className="flex flex-row justify-between">
              <h2 className="mb-4 text-xl font-bold text-black">
                Recording Completed
              </h2>
              <p className="mb-4 font-bold text-black">{timer}s</p>
            </div>
            <p className="mb-4 text-black">
              {recordingAttempts < 3
                ? "Do you want to submit this recording or re-record?"
                : "You have used all re-record attempts. Do you want to submit this recording?"}
            </p>
            <div className="flex justify-center space-x-4">
              <button onClick={submitAnswerToFetch}>
                <Image
                  src="/submit.svg"
                  width={345}
                  height={54}
                  alt="submit"
                />
              </button>
              {recordingAttempts < 3 && (
                <button
                  onClick={handleReRecord}
                  className="px-4 py-2 text-white transition duration-200 bg-red-500 rounded-lg hover:bg-red-600"
                >
                  Re-record ({3 - recordingAttempts} attempts left)
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Main Recording Interface */}
      {accessGranted && (
        <div className="flex flex-col w-full h-[860px] gap-2">
          {hasVideo && (
            <video
              ref={videoRef}
              className={`w-full h-[547px] border ${recording ? "border-red-600" : "border-gray-300"
                } rounded-lg`}
              autoPlay
              playsInline
              muted
            />
          )}
          {!hasVideo && (
            <div className={`w-full h-[547px] border ${recording ? "border-red-600" : "border-gray-300"
              } rounded-lg flex items-center justify-center bg-gray-900`}>
              <div className="text-white text-xl">Audio Only Mode</div>
            </div>
          )}
          <div className="flex flex-col items-center w-full py-3 bg-black">
            <div className="flex items-center justify-center h-36">
              {isRecording ? (
                <>
                  <Image
                    src="/myrec.svg"
                    width={840}
                    height={168}
                    alt="recording visualization"
                  />
                  <div className="ml-4 text-xl text-white">
                    {isSpeaking ? "Speaking" : "Not Speaking"}
                  </div>
                </>
              ) : (
                <SiriWaveComponent freq={6} amp={1} />
              )}
            </div>
          </div>
          <div className="flex items-center justify-center w-full gap-4 mt-4 space-x-4">
            {!recording ? (
              <button
                onClick={handleStartRecording}
                disabled={recordingAttempts >= 3 && !canSubmit}
              >
                <Image
                  src="/startrec.svg"
                  width={345}
                  height={54}
                  alt="start recording"
                />
              </button>
            ) : (
              <button onClick={stopRecording}>
                <Image
                  src="/stoprec.svg"
                  width={345}
                  height={54}
                  alt="stop recording"
                />
              </button>
            )}
          </div>
        </div>
      )}
      {error && <p className="mt-4 text-red-500">{error}</p>}
    </div>
  );
}