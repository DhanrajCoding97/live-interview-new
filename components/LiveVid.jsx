// vidhans code
// "use client";
// import React, { useEffect, useState } from "react";
// import Timer from "./Timer";
// import Camera from "./Camera";
// import Image from "next/image";
// import AudioPlayer from "./AudioPlayer";
// // import AnswerRecorder from "./AnswerRecorder";

// // Function to format the date consistently
// function formatDate(date) {
//   const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];
//   const day = date.getDate();
//   const month = months[date.getMonth()];
//   const year = date.getFullYear();
//   const suffix = getOrdinalSuffix(day);

//   return `${month} ${day}${suffix}, ${year}`;
// }

// // Function to format the time
// function formatTime(date) {
//   let hours = date.getHours();
//   let minutes = date.getMinutes();
//   const ampm = hours >= 12 ? "PM" : "AM";

//   hours = hours % 12;
//   hours = hours ? hours : 12; // the hour '0' should be '12'
//   minutes = minutes < 10 ? "0" + minutes : minutes;

//   return `${hours}:${minutes} ${ampm}`;
// }

// // Function to get the ordinal suffix for the date
// function getOrdinalSuffix(day) {
//   if (day >= 11 && day <= 13) return "th";
//   switch (day % 10) {
//     case 1:
//       return "st";
//     case 2:
//       return "nd";
//     case 3:
//       return "rd";
//     default:
//       return "th";
//   }
// }

// // React Component
// const DateTimeDisplay = ({ date }) => {
//   const formattedDate = formatDate(date);
//   const formattedTime = formatTime(date);

//   return <div>{`${formattedDate} | ${formattedTime}`}</div>;
// };

// const LiveVid = () => {
//   const [now, setNow] = useState(new Date());
//   const [content, setContent] = useState([]);
//   const [nextQuestion, setNextQuestion] = useState(null);
//   // const [isAnswering, setIsAnswering] = useState(false);
//   // const audioPlayerRef = useRef(null);
//   const [interviewState, setInterviewState] = useState({
//     interviewId: "interview3",
//     jobId: "job3",
//     userId: "user3",
//     totalQuestions: 10,
//     currentQuestionNumber: 0,
//   });

//   useEffect(() => {
//     initializeInterview();
//   }, []);

//   useEffect(() => {
//     fetch("http://localhost:3001/content")
//       .then((response) => response.json())
//       .then((data) => setContent(data))
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

//   useEffect(() => {
//     const timer = setInterval(() => setNow(new Date()), 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const initializeInterview = async () => {
//     try {
//       const response = await fetch(
//         "https://mindful-silo-433713-m9.el.r.appspot.com/api/v1/init",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             interviewId: interviewState.interviewId,
//             jobId: interviewState.jobId,
//             userId: interviewState.userId,
//           }),
//         }
//       );
//       const data = await response.json();
//       console.log(data);
//       setInterviewState((prev) => ({
//         ...prev,
//         totalQuestions: data.totalQuestions,
//       }));
//       fetchNextQuestion();
//     } catch (error) {
//       console.error("Error initializing the interview", error);
//     }
//   };

//   const fetchNextQuestion = async () => {
//     try {
//       const response = await fetch(
//         "https://mindful-silo-433713-m9.el.r.appspot.com/api/v1/nextquestion",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             interviewId: interviewState.interviewId,
//             jobId: interviewState.jobId,
//             userId: interviewState.userId,
//           }),
//         }
//       );
//       const data = await response.json();
//       setNextQuestion({
//         audioFile: data.audioFile,
//         text: data.text,
//         questionId: data.questionId,
//       });
//       console.log(nextQuestion);
//       setInterviewState((prev) => ({
//         ...prev,
//         currentQuestionNumber:
//           data.nextQuestion === -1 ? prev.totalQuestions : data.nextQuestion,
//       }));
//       //automatically plays the audio file
//       //submit answer question trigger here
//       //isse phele should be displayed and played
//       // if(data.nextQuestion==1){
//       //   fetchAllQuestions()//for loop in it total questions length
//       // }
//     } catch (error) {
//       console.error("Error fetching next question", error);
//     }
//   };

//   // const handleAudioEnd = () => {
//   //   setIsAnswering(true);
//   // };

// const handleAnswerSubmit = async (audioBlob) => {
//   const formData = new FormData();
//   formData.append("video", audioBlob, "answer.webm"); //see this
//   formData.append("interviewId", interviewState.interviewId);
//   formData.append("jobId", interviewState.jobId);
//   formData.append("userId", interviewState.userId);

//   try {
//     const response = await fetch(
//       "https://mindful-silo-433713-m9.el.r.appspot.com/api/v1/answer",
//       {
//         method: "POST",
//         body: formData,
//       }
//     );

//     if (response.ok) {
//       console.log("Answer submitted successfully");
//       setIsAnswering(false);
//       fetchNextQuestion();
//     } else {
//       console.error("Failed to submit answer");
//     }
//   } catch (error) {
//     console.error("Error submitting answer:", error);
//   }
// };

//   return (
//     <div className="px-6 pt-5 text-white bg-black font-inter">
//       <div className="flex items-center justify-between">
//         <div className="flex items-center gap-6">
//           <div className="flex items-center justify-center bg-white rounded-full h-14 w-14">
//             <Image src="./logo.svg" width={54} height={54} alt="logo" />
//           </div>
//           <div>
//             <h1>Bruce Williams, Pre-Interview (HR Round)</h1>
//             <DateTimeDisplay date={now} />
//           </div>
//         </div>

//         <div className="flex items-center gap-3">
//           <span className="w-6 h-6">
//             <Image
//               src="./bellIcon.svg"
//               width={50}
//               height={50}
//               alt="bell icon"
//             />
//           </span>
//           <div className="px-4 py-2 w-[19rem] flex justify-between rounded-full bg-black ">
//             <div className="flex gap-3">
//               <div className="w-10 h-10 rounded-full border-2 border-[#01e2db]">
//                 <Image
//                   src="./userImg.svg"
//                   width={40}
//                   height={40}
//                   className="rounded-full"
//                   alt="user image"
//                 />
//               </div>
//               <div>
//                 <h2 className="text-xl font-medium">Jane Watson</h2>
//                 <p className="text-[#CCCCCC] font-medium text-xs">HR Lead</p>
//               </div>
//             </div>
//             <button>
//               <Image src="./btn.svg" width={7} height={4} alt="button icon" />
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="flex w-full h-[] gap-6 py-4">
//         <div className="flex flex-col md:w-[950px] 2xl:w-[1200px] md:h-[] 2xl:h-[] gap-4 flex-7">
//           <Camera />
//         </div>
//         <div className="flex-[3] bg-[#081018] rounded-2xl flex flex-col px-6 py-5">
//           <div className="flex flex-col gap-6">
//             {/* <Timer/> */}

//             <div className="self-center">
//               <Timer />
//             </div>

//             {/* <div className="flex items-center p-2 border-2 border-[#EB5757] rounded-full gap-2">
//               <Image
//                 src="./violationIcon.svg"
//                 width={30}
//                 height={30}
//                 alt="Vi"
//               />
//               <p className="text-base font-medium">Violation text</p>
//             </div> */}

//             {/* {nextQuestion && (
//               <div className="flex flex-col gap-2 rounded-3xl border-2 border-[#5ac5e9] p-6">
//                 <h3>
//                   Question {interviewState.currentQuestionNumber} of{" "}
//                   {interviewState.totalQuestions}:
//                 </h3>
//                 <p>{nextQuestion.text}</p>
//                 <AudioPlayer
//                   audioData={nextQuestion.audioFile}
//                   ref={audioPlayerRef}
//                   onEnded={handleAudioEnd}
//                 />
//               </div>
//             )} */}
//             {/* 
//             {isAnswering && (
//               <AnswerRecorder
//                 onAnswerSubmit={handleAnswerSubmit}
//                 questionId={nextQuestion.questionId}
//               />
//             )} */}

//             <div className="flex flex-col gap-6 overflow-hidden">
//               <div className="scrollable-container">
//                 <div className="flex flex-col gap-6">
//                   {nextQuestion && (
//                     // {content.map((item) => (
//                     <div
//                       // key={item.id}
//                       className="flex flex-col gap-2 rounded-3xl border-2 border-[#5ac5e9] p-6"
//                     >
//                       <div>
//                         <span className="text-[#CCCCCC] font-normal text-[0.75rem]">
//                           {/* {item.askedBy} */}
//                         </span>
//                         <h3>
//                           Question {interviewState.currentQuestionNumber} of{" "}
//                           {interviewState.totalQuestions}:
//                         </h3>
//                         <p className="text-base font-medium">
//                           {nextQuestion.text}
//                         </p>
//                         {/* <AudioPlayer
//                           audioData={nextQuestion.audioFile}
//                           ref={audioPlayerRef}
//                         /> */}
//                         <AudioPlayer base64Audio={nextQuestion.audioFile} />
//                       </div>
//                       <div>
//                         <span className="text-[#CCCCCC] font-normal text-[0.75rem]">
//                           {/* {item.answeredBy} */}
//                         </span>
//                         {/* <p className="text-base font-medium">{item.answer}</p> */}
//                         <p className="text-base font-medium">
//                           answere do hehehe
//                         </p>
//                       </div>
//                       <div className="flex gap-2 px-2 py-1 border border-white rounded-full w-max mt-11">
//                         <Image
//                           src="./redCircle.svg"
//                           width={19}
//                           height={19}
//                           alt=""
//                         />
//                         <span className="font-medium text-[0.75rem]">
//                           {/* {item.type} */}
//                         </span>
//                       </div>
//                     </div>
//                     // ))}
//                   )}
//                 </div>
//               </div>
//               <button
//                 onClick={fetchNextQuestion}
//                 className="self-center px-4 py-2 text-white bg-blue-500 rounded-full"
//               >
//                 Next Question
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LiveVid;

// const LiveVid = () => {
//   const [now, setNow] = useState(new Date());
//   const [nextQuestion, setNextQuestion] = useState(null);
//   const dispatch = useDispatch();
//   const { interviewId, jobId, userId, totalQuestions, currentQuestionNumber } = useSelector((state) => state.interview);

//   useEffect(() => {
//     const timer = setInterval(() => setNow(new Date()), 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const initializeInterview = async () => {
//     try {
//       const response = await fetch("https://mindful-silo-433713-m9.el.r.appspot.com/api/v1/init", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ interviewId, jobId, userId }),
//       });
//       const data = await response.json();
//       dispatch({ type: 'interview/setTotalQuestions', payload: data.totalQuestions });
//       fetchNextQuestion();
//     } catch (error) {
//       console.error("Error initializing the interview", error);
//     }
//   };

//   const fetchNextQuestion = async () => {
//     try {
//       const response = await fetch("https://mindful-silo-433713-m9.el.r.appspot.com/api/v1/nextquestion", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ interviewId, jobId, userId }),
//       });
//       const data = await response.json();
//       setNextQuestion({
//         audioFile: data.audioFile,
//         text: data.text,
//         questionId: data.questionId,
//       });
//       dispatch({ type: 'interview/setCurrentQuestionNumber', payload: data.nextQuestion });
//     } catch (error) {
//       console.error("Error fetching next question", error);
//     }
//   };

//   useEffect(() => {
//     initializeInterview();
//   }, []);

//   return (
//     <div className="px-6 pt-5 text-white bg-black font-inter">
//       <div className="flex items-center justify-between">
//         <div className="flex items-center gap-6">
//           <div className="flex items-center justify-center bg-white rounded-full h-14 w-14">
//             <Image src="./logo.svg" width={54} height={54} alt="logo" />
//           </div>
//           <div>
//             <h1>Bruce Williams, Pre-Interview (HR Round)</h1>
//             <DateTimeDisplay date={now} />
//           </div>
//         </div>
//       </div>
//       <div className="flex w-full gap-6 py-4">
//         <div className="flex flex-col md:w-[950px] 2xl:w-[1200px] gap-4 flex-7">
//           <Camera
//             onAccessGranted={initializeInterview}
//             questionId={nextQuestion?.questionId}
//             base64Audio={nextQuestion?.audioFile}
//           />
//         </div>
//         <div className="flex-[3] bg-[#081018] rounded-2xl flex flex-col px-6 py-5">
//           <div className="flex flex-col gap-6">
//             <div className="self-center">
//               <Timer />
//             </div>
//             <div className="flex flex-col gap-6 overflow-hidden">
//               <div className="scrollable-container">
//                 <div className="flex flex-col gap-6">
//                   {nextQuestion ? (
//                     <div className="flex flex-col gap-2 rounded-3xl border-2 border-[#5ac5e9] p-6">
//                       <h3>Question {currentQuestionNumber + 1} of {totalQuestions}:</h3>
//                       <p className="text-base font-medium">{nextQuestion.text}</p>
//                       <AudioPlayer base64Audio={nextQuestion.audioFile} />
//                     </div>
//                   ) : (
//                     <div className="flex h-[400px] flex-col gap-2 rounded-3xl border-2 border-[#5ac5e9] p-6">
//                       <p className="mt-4 text-base font-medium">Loading question...</p>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LiveVid;

// dhanraj / s code
"use client";
import React, { useEffect, useState } from "react";
import Timer from "./Timer";
import Camera from "./Camera";
import Image from "next/image";
import AudioPlayer from "./AudioPlayer";
// import AnswerRecorder from "./AnswerRecorder";

// Function to format the date consistently
function formatDate(date) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const suffix = getOrdinalSuffix(day);

  return `${month} ${day}${suffix}, ${year}`;
}

// Function to format the time
function formatTime(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;

  return `${hours}:${minutes} ${ampm}`;
}

// Function to get the ordinal suffix for the date
function getOrdinalSuffix(day) {
  if (day >= 11 && day <= 13) return "th";
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

// React Component
const DateTimeDisplay = ({ date }) => {
  const formattedDate = formatDate(date);
  const formattedTime = formatTime(date);

  return <div>{`${formattedDate} | ${formattedTime}`}</div>;
};

const LiveVid = () => {
  const [now, setNow] = useState(new Date());
  const [content, setContent] = useState([]);
  const [nextQuestion, setNextQuestion] = useState(null);
  // const [isAnswering, setIsAnswering] = useState(false);
  // const audioPlayerRef = useRef(null);
  const [interviewState, setInterviewState] = useState({
    // interviewId: "interview3",
    // jobId: "job3",
    // userId: "user3",
    totalQuestions: 10,
    currentQuestionNumber: 0,
  });

  const initializeInterview = async () => {
    try {
      const response = await fetch(
        "https://training-pipeline-430916.el.r.appspot.com/api/questions/random",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            interviewId: interviewState.interviewId,
            jobId: interviewState.jobId,
            userId: interviewState.userId,
          }),
        }
      );
      const data = await response.json();
      console.log(data);
      setInterviewState((prev) => ({
        ...prev,
        totalQuestions: data.totalQuestions,
      }));
      fetchNextQuestion();
    } catch (error) {
      console.error("Error initializing the interview", error);
    }
  };

  const fetchNextQuestion = async () => {
    try {
      const response = await fetch(
        "https://training-pipeline-430916.el.r.appspot.com/api/questions/nextQuestion",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify()
        }
      );
      const data = await response.json();
      setNextQuestion({
        audioFile: data.audioFile,
        text: data.text,
        questionId: data.questionId,
      });
      console.log(nextQuestion);
      setInterviewState((prev) => ({
        ...prev,
        currentQuestionNumber:
          data.nextQuestion === -1 ? prev.totalQuestions : data.nextQuestion,
      }));
      //automatically plays the audio file
      //submit answer question trigger here
      //isse phele should be displayed and played
      // if(data.nextQuestion==1){
      //   fetchAllQuestions()//for loop in it total questions length
      // }
    } catch (error) {
      console.error("Error fetching next question", error);
    }
  };

  useEffect(() => {
    initializeInterview();
  }, []);

  useEffect(() => {
    fetch("http://localhost:3001/content")
      .then((response) => response.json())
      .then((data) => setContent(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);





  // const handleAudioEnd = () => {
  //   setIsAnswering(true);
  // };

  const handleAnswerSubmit = async (audioBlob) => {
    const formData = new FormData();
    formData.append("video", audioBlob, "answer.webm"); //see this
    // formData.append("interviewId", interviewState.interviewId);
    // formData.append("jobId", interviewState.jobId);
    // formData.append("userId", interviewState.userId);

    try {
      const response = await fetch(
        "https://training-pipeline-430916.el.r.appspot.com/api/questions/submitAnswer",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        console.log("Answer submitted successfully");
        setIsAnswering(false);
        fetchNextQuestion();
      } else {
        console.error("Failed to submit answer");
      }
    } catch (error) {
      console.error("Error submitting answer:", error);
    }
  };

  return (
    <div className="px-6 pt-5 text-white bg-black font-inter">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center justify-center bg-white rounded-full h-14 w-14">
            <Image src="./logo.svg" width={54} height={54} alt="logo" />
          </div>
          <div>
            <h1>Bruce Williams, Pre-Interview (HR Round)</h1>
            <DateTimeDisplay date={now} />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="w-6 h-6">
            <Image
              src="./bellIcon.svg"
              width={50}
              height={50}
              alt="bell icon"
            />
          </span>
          <div className="px-4 py-2 w-[19rem] flex justify-between rounded-full bg-black ">
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full border-2 border-[#01e2db]">
                <Image
                  src="./userImg.svg"
                  width={40}
                  height={40}
                  className="rounded-full"
                  alt="user image"
                />
              </div>
              <div>
                <h2 className="text-xl font-medium">Jane Watson</h2>
                <p className="text-[#CCCCCC] font-medium text-xs">HR Lead</p>
              </div>
            </div>
            <button>
              <Image src="./btn.svg" width={7} height={4} alt="button icon" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-full h-[] gap-6 py-4">
        <div className="flex flex-col md:w-[950px] 2xl:w-[1200px] md:h-[] 2xl:h-[] gap-4 flex-7">
          <Camera />
        </div>
        <div className="flex-[3] bg-[#081018] rounded-2xl flex flex-col px-6 py-5">
          <div className="flex flex-col gap-6">
            {/* <Timer/> */}

            <div className="self-center">
              <Timer />
            </div>

            {/* <div className="flex items-center p-2 border-2 border-[#EB5757] rounded-full gap-2">
              <Image
                src="./violationIcon.svg"
                width={30}
                height={30}
                alt="Vi"
              />
              <p className="text-base font-medium">Violation text</p>
            </div> */}

            {/* {nextQuestion && (
              <div className="flex flex-col gap-2 rounded-3xl border-2 border-[#5ac5e9] p-6">
                <h3>
                  Question {interviewState.currentQuestionNumber} of{" "}
                  {interviewState.totalQuestions}:
                </h3>
                <p>{nextQuestion.text}</p>
                <AudioPlayer
                  audioData={nextQuestion.audioFile}
                  ref={audioPlayerRef}
                  onEnded={handleAudioEnd}
                />
              </div>
            )} */}
            {/* 
            {isAnswering && (
              <AnswerRecorder
                onAnswerSubmit={handleAnswerSubmit}
                questionId={nextQuestion.questionId}
              />
            )} */}

            <div className="flex flex-col gap-6 overflow-hidden">
              <div className="scrollable-container">
                <div className="flex flex-col gap-6">
                  {nextQuestion && (
                    // {content.map((item) => (
                    <div
                      // key={item.id}
                      className="flex flex-col gap-2 rounded-3xl border-2 border-[#5ac5e9] p-6"
                    >
                      <div>
                        <span className="text-[#CCCCCC] font-normal text-[0.75rem]">
                          {/* {item.askedBy} */}
                        </span>
                        <h3>
                          Question {interviewState.currentQuestionNumber} of{" "}
                          {interviewState.totalQuestions}:
                        </h3>
                        <p className="text-base font-medium">
                          {nextQuestion.text}
                        </p>
                        {/* <AudioPlayer
                          audioData={nextQuestion.audioFile}
                          ref={audioPlayerRef}
                        /> */}
                        <AudioPlayer base64Audio={nextQuestion.audioFile} />
                      </div>
                      <div>
                        <span className="text-[#CCCCCC] font-normal text-[0.75rem]">
                          {/* {item.answeredBy} */}
                        </span>
                        {/* <p className="text-base font-medium">{item.answer}</p> */}
                        <p className="text-base font-medium">
                          answere do hehehe
                        </p>
                      </div>
                      <div className="flex gap-2 px-2 py-1 border border-white rounded-full w-max mt-11">
                        <Image
                          src="./redCircle.svg"
                          width={19}
                          height={19}
                          alt=""
                        />
                        <span className="font-medium text-[0.75rem]">
                          {/* {item.type} */}
                        </span>
                      </div>
                    </div>
                    // ))}
                  )}
                </div>
              </div>
              <button
                onClick={fetchNextQuestion}
                className="self-center px-4 py-2 text-white bg-blue-500 rounded-full"
              >
                Next Question
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveVid;