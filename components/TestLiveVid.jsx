// vidhans code

// "use client";
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   initializeInterview,
//   fetchNextQuestion,
// } from "../app/redux/interviewSlice";
// import Timer from "./Timer";
// import Camera from "./Camera";
// import Image from "next/image";
// import AudioPlayer from "./AudioPlayer";
// // import Navbar from "./Navbar";

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
// const TestLiveVid = () => {
//   const [now, setNow] = useState(new Date());
//   const dispatch = useDispatch();
//   const {
//     interviewId,
//     jobId,
//     userId,
//     totalQuestions,
//     currentQuestionNumber,
//     currentQuestion,
//     isLoading,
//     error,
//   } = useSelector((state) => state.interview);

//   useEffect(() => {
//     const timer = setInterval(() => setNow(new Date()), 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const handleAccessGranted = () => {
//     dispatch(initializeInterview({ interviewId, jobId, userId }));
//   };

//   useEffect(() => {
//     if (totalQuestions > 0 && currentQuestionNumber === 0) {
//       dispatch(fetchNextQuestion({ interviewId, jobId, userId }));
//     }
//   }, [
//     totalQuestions,
//     currentQuestionNumber,
//     dispatch,
//     interviewId,
//     jobId,
//     userId,
//   ]);
//   // console.log(interviewState.totalQuestions);
//   return (
//     <div className="px-6 pt-5 text-white bg-black font-inter">
//       {/* <Navbar /> */}
//       <div className="flex w-full h-screen gap-6 py-4">
//         <div className="flex flex-col h-full md:w-[950px] 2xl:w-[1200px] gap-4 flex-7">
//           <Camera
//             onAccessGranted={handleAccessGranted}
//             questionId={currentQuestion?.questionId}
//             base64Audio={currentQuestion?.audioFile}
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
//                   {currentQuestion ? (
//                     <div className="flex h-[400px] flex-col gap-2 rounded-3xl border-2 border-[#5ac5e9] p-6">
//                       <div>
//                         <div>
//                           <Image
//                             src="./orionmic.svg"
//                             width={93}
//                             height={37}
//                             alt=""
//                           />
//                         </div>
//                         <p className="mt-4 text-base font-medium">
//                           Q{currentQuestionNumber}. {currentQuestion.text}
//                         </p>
//                         <AudioPlayer base64Audio={currentQuestion.audioFile} />
//                       </div>
//                     </div>
//                   ) : (
//                     <div className="flex h-[400px] flex-col gap-2 rounded-3xl border-2 border-[#5ac5e9] p-6">
//                       <div>
//                         <div>
//                           <Image
//                             src="./orionmic.svg"
//                             width={93}
//                             height={37}
//                             alt=""
//                           />
//                         </div>
//                         <p className="mt-4 text-base font-medium">
//                           Question will be Here ASAP......
//                         </p>
//                       </div>
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

// export default TestLiveVid;
// "use client";
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   initializeInterview,
//   fetchRandomQuestions,
// } from "../app/redux/interviewSlice";
// import Timer from "./Timer";
// import Camera from "./Camera";
// import Image from "next/image";
// import AudioPlayer from "./AudioPlayer";

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
// const TestLiveVid = () => {
//   const [now, setNow] = useState(new Date());
//   const dispatch = useDispatch();
//   const {
//     interviewId,
//     jobId,
//     userId,
//     totalQuestions,
//     currentQuestionNumber,
//     questions, // Updated to use questions from the state
//     isLoading,
//     error,
//   } = useSelector((state) => state.interview);

//   useEffect(() => {
//     const timer = setInterval(() => setNow(new Date()), 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const handleAccessGranted = () => {
//     dispatch(initializeInterview({ interviewId, jobId, userId }));
//   };

//   useEffect(() => {
//     if (totalQuestions === 0) {
//       dispatch(fetchRandomQuestions()); // Fetch random questions on component mount
//     }
//   }, [totalQuestions, dispatch]);

//   const currentQuestion = questions[currentQuestionNumber]; // Get the current question

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
//         </div>
//       </div>
//       <div className="flex w-full gap-6 py-4">
//         <div className="flex flex-col md:w-[950px] 2xl:w-[1200px] gap-4 flex-7">
//           <Camera
//             onAccessGranted={handleAccessGranted}
//             questionId={currentQuestion?.id} // Use the current question ID
//             base64Audio={currentQuestion?.audioUrl} // Use the audio URL
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
//                   {currentQuestion ? (
//                     <div className="flex h-[400px] flex-col gap-2 rounded-3xl border-2 border-[#5ac5e9] p-6">
//                       <div>
//                         <div>
//                           <Image
//                             src="./orionmic.svg"
//                             width={93}
//                             height={37}
//                             alt=""
//                           />
//                         </div>
//                         <p className="mt-4 text-base font-medium">
//                           Q{currentQuestionNumber + 1}. {currentQuestion.text}
//                         </p>
//                         <AudioPlayer base64Audio={currentQuestion.audioUrl} />{" "}
//                         {/* Use the audio URL */}
//                       </div>
//                     </div>
//                   ) : (
//                     <div className="flex h-[400px] flex-col gap-2 rounded-3xl border-2 border-[#5ac5e9] p-6">
//                       <div>
//                         <div>
//                           <Image
//                             src="./orionmic.svg"
//                             width={93}
//                             height={37}
//                             alt=""
//                           />
//                         </div>
//                         <p className="mt-4 text-base font-medium">
//                           Question will be Here ASAP......
//                         </p>
//                       </div>
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

// export default TestLiveVid;


//dhanrajs update
// TestLiveVid.jsx
// "use client";
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import Timer from "./Timer";
// import Camera from "./Camera";
// import Image from "next/image";
// import AudioPlayer from "./AudioPlayer";

// const TestLiveVid = () => {
//   const [now, setNow] = useState(new Date());
//   const dispatch = useDispatch();
//   const {
//     currentQuestion,
//     isLoading,
//     error,
//   } = useSelector((state) => state.interview);


// Mock data to simulate API response
//   const mockData = {
//     question: {
//       Question: "What is your greatest strength?",
//       index: 1,
//       "Paramter Categories": ["Behavioral", "Technical"],
//       Difficulty_Level: "Easy"
//     },
//     audioFilePath: "path/to/mock/audio/file.mp3"
//   };

//   // Simulate a delay to mimic API call
//   await new Promise(resolve => setTimeout(resolve, 1000));

//   // Use mock data instead of fetching from the API
//   console.log("Fetched data:", mockData); // Debugging line
//   if (mockData.question) {
//     dispatch({
//       type: 'interview/setCurrentQuestion',
//       payload: {
//         text: mockData.question.Question,
//         audioFile: mockData.audioFilePath,
//         questionId: mockData.question.index,
//         parameterCategories: mockData.question["Paramter Categories"],
//         difficultyLevel: mockData.question.Difficulty_Level
//       }
//     });
//   } else {
//     console.error("No question found in mock data"); // Debugging line
//   }
// };

// const initializeInterview = async () => {
//   try {
//     const response = await fetch('https://training-pipeline-430916.el.r.appspot.com/api/questions/random');
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`); // Check for HTTP errors
//     }
//     const data = await response.json();
//     console.log("Fetched data:", data); // Debugging line
//     if (data.question) {
//       dispatch({
//         type: 'interview/setCurrentQuestion',
//         payload: {
//           text: data.question.Question,
//           audioFile: data.audioFilePath,
//           questionId: data.question.index,
//           parameterCategories: data.question["Paramter Categories"],
//           difficultyLevel: data.question.Difficulty_Level
//         }
//       });
//     } else {
//       console.error("No question found in response"); // Debugging line
//     }
//   } catch (error) {
//     console.error("Error initializing interview:", error);
//     dispatch({ type: 'interview/setError', payload: error.message });
//   }
// };
// const initializeInterview = async () => {
//   console.log("Initializing interview..."); // Added log to confirm function execution
//   try {
//     const response = await fetch('https://training-pipeline-430916.el.r.appspot.com/api/questions/random');
//     const data = await response.json();

//     console.log("API Response:", data); // Log the entire response data for inspection

//     if (data.question) {
//       dispatch({
//         type: 'interview/setCurrentQuestion',
//         payload: {
//           text: data.question.Question,
//           audioFile: data.audioFilePath,
//           questionId: data.question.index,
//           parameterCategories: data.question["Paramter Categories"],
//           difficultyLevel: data.question.Difficulty_Level
//         }
//       });
//     }
//   } catch (error) {
//     console.error("Error initializing interview:", error);
//     dispatch({ type: 'interview/setError', payload: error.message });
//     console.log("Error initializing interview:", error);
//   }
// };

"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Timer from "./Timer";
import Camera from "./Camera";
import Image from "next/image";
import AudioPlayer from "./AudioPlayer";

const TestLiveVid = () => {
  const [now, setNow] = useState(new Date());
  const dispatch = useDispatch();
  const {
    currentQuestion,
    isLoading,
    error,
  } = useSelector((state) => state.interview);

  const initializeInterview = async () => {
    console.log("Initializing interview..."); // Added log to confirm function execution
    try {
      const response = await fetch('https://training-pipeline-430916.el.r.appspot.com/api/questions/random');
      const data = await response.json();
      console.log("API Response:", data); // Log the entire response data for inspection
      // Check if the response is okay before logging
      if (!response.ok) {
        console.error("HTTP error! status:", response.status); // Log HTTP errors
        return; // Exit if there's an error
      }

      console.log("API Response:", data); // Log the entire response data for inspection

      if (data.question) {
        dispatch({
          type: 'interview/setCurrentQuestion',
          payload: {
            text: data.question.Question,
            audioFile: data.audioFilePath,
            questionId: data.question.index,
            parameterCategories: data.question["Paramter Categories"],
            difficultyLevel: data.question.Difficulty_Level
          }
        });
      }
    } catch (error) {
      console.error("Error initializing interview:", error);
      dispatch({ type: 'interview/setError', payload: error.message });
      console.log("Error initializing interview:", error);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleAccessGranted = () => {
    initializeInterview();
  };

  return (
    <div className="px-6 pt-5 text-white bg-black font-inter">
      <div className="flex w-full h-screen gap-6 py-4">
        <div className="flex flex-col h-full md:w-[950px] 2xl:w-[1200px] gap-4 flex-7">
          <Camera
            onAccessGranted={handleAccessGranted}
            questionId={currentQuestion?.questionId}
            base64Audio={currentQuestion?.audioFile}
          />
        </div>
        <div className="flex-[3] bg-[#081018] rounded-2xl flex flex-col px-6 py-5">
          <div className="flex flex-col gap-6">
            <div className="self-center">
              <Timer />
            </div>

            <div className="flex flex-col gap-6 overflow-hidden">
              <div className="scrollable-container">
                <div className="flex flex-col gap-6">
                  {currentQuestion ? (
                    <div className="flex h-[400px] flex-col gap-2 rounded-3xl border-2 border-[#5ac5e9] p-6">
                      <div>
                        <div>
                          <Image src="/orionmic.svg" width={93} height={37} alt="" />
                        </div>
                        <p className="mt-4 text-base font-medium">
                          Q{currentQuestion.questionId}. {currentQuestion.text}
                        </p>
                        <AudioPlayer base64Audio={currentQuestion.audioFile} />
                        <div className="mt-2 text-sm text-gray-400">
                          Difficulty: {currentQuestion.difficultyLevel}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex h-[400px] flex-col gap-2 rounded-3xl border-2 border-[#5ac5e9] p-6">
                      <div>
                        <div>
                          <Image src="/orionmic.svg" width={93} height={37} alt="" />
                        </div>
                        {/* <p className="mt-4 text-base font-medium">
                          Loading question...
                        </p> */}
                        <p className="mt-4 text-base font-medium">
                          {isLoading ? "(Loading...)" : "(No question available)"}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestLiveVid;
