// import Image from "next/image";
// import * as React from "react";

// const MobileView = () => {
//   return (
//     <div className="flex overflow-hidden flex-col px-5 py-11 mx-auto w-full bg-black rounded-2xl border-white border-solid border-[1.795px] max-w-[480px]">
//       <div className="relative flex flex-col justify-center flex-1 w-full">
//         <div className="z-0 flex items-center justify-between w-full gap-10 p-2 overflow-hidden rounded-lg bg-zinc-900">
//           <div className="flex gap-1.5 items-start self-stretch my-auto min-w-[240px]">
//             <Image
//               loading="lazy"
//               src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d993d0251c68e293c482397f4dd51c32847c3d8c8730e4cbcd49864db2d0f48?placeholderIfAbsent=true&apiKey=113a9a543ada41659bf28dbefd47925e"
//               className="object-contain shrink-0 rounded-none aspect-square w-[22px]"
//             />
//             <div className="flex flex-col">
//               <div className="text-xs text-white">
//                 Bruce Williams, Pre-Interview (HR Round)
//               </div>
//               <div className="gap-1.5 self-start mt-1.5 text-xs text-stone-300">
//                 March 31st, 2024 | 11:00 AM{" "}
//               </div>
//             </div>
//           </div>
//           <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/4985b63d650bce6d39d7e45628a77144ddd697fd9f4a4106803a1f367953ada2?placeholderIfAbsent=true&apiKey=113a9a543ada41659bf28dbefd47925e"
//             className="object-contain shrink-0 self-stretch my-auto aspect-[1.1] stroke-[1.5px] stroke-rose-500 w-[22px]"
//           />
//         </div>
//         <div className="z-0 flex items-center self-center justify-center gap-2 mt-4 text-xl font-bold leading-snug text-white">
//           <Image
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ce2bb6332d0da50c1ecc853e35d5f1b76aa076af3f8f0f32611bc2343ca919b?placeholderIfAbsent=true&apiKey=113a9a543ada41659bf28dbefd47925e"
//             className="self-stretch object-contain w-5 my-auto shrink-0 aspect-square"
//           />
//           <div className="self-stretch my-auto bg-clip-text bg-[linear-gradient(92deg,#22B4F8_0.47%,#EDF3C2_136.89%)]">
//             <span className="text-white">2:00</span> mins
//           </div>
//         </div>
//         <Image
//           loading="lazy"
//           srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2dd306f312bcae68f0c8721c76103bcb07b3fa56ea9b5f7e90a59dfb2d195f47?placeholderIfAbsent=true&apiKey=113a9a543ada41659bf28dbefd47925e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2dd306f312bcae68f0c8721c76103bcb07b3fa56ea9b5f7e90a59dfb2d195f47?placeholderIfAbsent=true&apiKey=113a9a543ada41659bf28dbefd47925e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2dd306f312bcae68f0c8721c76103bcb07b3fa56ea9b5f7e90a59dfb2d195f47?placeholderIfAbsent=true&apiKey=113a9a543ada41659bf28dbefd47925e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2dd306f312bcae68f0c8721c76103bcb07b3fa56ea9b5f7e90a59dfb2d195f47?placeholderIfAbsent=true&apiKey=113a9a543ada41659bf28dbefd47925e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2dd306f312bcae68f0c8721c76103bcb07b3fa56ea9b5f7e90a59dfb2d195f47?placeholderIfAbsent=true&apiKey=113a9a543ada41659bf28dbefd47925e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2dd306f312bcae68f0c8721c76103bcb07b3fa56ea9b5f7e90a59dfb2d195f47?placeholderIfAbsent=true&apiKey=113a9a543ada41659bf28dbefd47925e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2dd306f312bcae68f0c8721c76103bcb07b3fa56ea9b5f7e90a59dfb2d195f47?placeholderIfAbsent=true&apiKey=113a9a543ada41659bf28dbefd47925e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2dd306f312bcae68f0c8721c76103bcb07b3fa56ea9b5f7e90a59dfb2d195f47?placeholderIfAbsent=true&apiKey=113a9a543ada41659bf28dbefd47925e"
//           className="object-contain z-0 mt-4 w-full rounded-lg aspect-[0.87]"
//         />
//         <div className="flex overflow-hidden z-0 flex-1 gap-2 items-start px-2 py-3 mt-4 rounded-lg border border-solid backdrop-blur-[50px] bg-[linear-gradient(137deg,rgba(0,119,194,0.10_23.98%,rgba(112,117,122,0.10)_65.73%))] border-sky-600 border-opacity-40 size-full">
//           <Image
//             loading="lazy"
//             srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/45c93dcd9202cc2004f25bffee1659754ba42513ce18ac5eeeb3698cb7f7e66e?placeholderIfAbsent=true&apiKey=113a9a543ada41659bf28dbefd47925e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/45c93dcd9202cc2004f25bffee1659754ba42513ce18ac5eeeb3698cb7f7e66e?placeholderIfAbsent=true&apiKey=113a9a543ada41659bf28dbefd47925e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/45c93dcd9202cc2004f25bffee1659754ba42513ce18ac5eeeb3698cb7f7e66e?placeholderIfAbsent=true&apiKey=113a9a543ada41659bf28dbefd47925e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/45c93dcd9202cc2004f25bffee1659754ba42513ce18ac5eeeb3698cb7f7e66e?placeholderIfAbsent=true&apiKey=113a9a543ada41659bf28dbefd47925e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/45c93dcd9202cc2004f25bffee1659754ba42513ce18ac5eeeb3698cb7f7e66e?placeholderIfAbsent=true&apiKey=113a9a543ada41659bf28dbefd47925e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/45c93dcd9202cc2004f25bffee1659754ba42513ce18ac5eeeb3698cb7f7e66e?placeholderIfAbsent=true&apiKey=113a9a543ada41659bf28dbefd47925e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/45c93dcd9202cc2004f25bffee1659754ba42513ce18ac5eeeb3698cb7f7e66e?placeholderIfAbsent=true&apiKey=113a9a543ada41659bf28dbefd47925e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/45c93dcd9202cc2004f25bffee1659754ba42513ce18ac5eeeb3698cb7f7e66e?placeholderIfAbsent=true&apiKey=113a9a543ada41659bf28dbefd47925e"
//             className="object-contain shrink-0 rounded-none aspect-[1.09] w-[38px]"
//           />
//           <div className="flex flex-col flex-1 shrink justify-center basis-0 min-w-[240px]">
//             <div className="text-xs font-bold text-stone-300">Orion</div>
//             <div className="text-sm leading-5 text-white">
//               Thank you everyone for joining the design critique meeting. I want
//               everyone’s opinion so please start !
//             </div>
//           </div>
//         </div>
//         <div className="flex overflow-hidden absolute z-0 flex-col p-1 text-xs font-medium text-white whitespace-nowrap bg-stone-950 bg-opacity-30 left-[9px] rounded-[88px] top-[104px] w-[50px]">
//           <div className="flex gap-1.5 items-center w-full">
//             <Image
//               loading="lazy"
//               src="https://cdn.builder.io/api/v1/image/assets/TEMP/a50c165e37882af4e6c49bef030ebe2ab547fe6e61a7f604889acdee23c317b2?placeholderIfAbsent=true&apiKey=113a9a543ada41659bf28dbefd47925e"
//               className="object-contain shrink-0 self-stretch my-auto aspect-square w-[15px]"
//             />
//             <div className="self-stretch my-auto">24:01</div>
//           </div>
//         </div>
//         <div className="flex absolute z-0 gap-3 items-center self-start text-sm font-medium leading-none text-white bottom-[179px] right-[68px]">
//           <div className="gap-1.5 self-stretch px-3 py-1.5 my-auto bg-orange-600 rounded-lg shadow-md">
//             Unauthorized face detected
//           </div>
//         </div>
//       </div>
//       <div className="flex gap-10 justify-between items-center px-8 py-2.5 mt-4 w-full border border-solid bg-[linear-gradient(137deg,rgba(0,119,194,0.10_23.98%,rgba(112,117,122,0.10)_65.73%))] border-sky-600 border-opacity-40 rounded-[100px]">
//         <Image
//           loading="lazy"
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca6cedb233db9e398cbe1721ae2b419f46143e17d95509bb5c11dd4c19cda787?placeholderIfAbsent=true&apiKey=113a9a543ada41659bf28dbefd47925e"
//           className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
//         />
//         <Image
//           loading="lazy"
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/b72ec4565926388b4482da3f3f38f37b5d882c2a8692b29adc1179e85c5737a8?placeholderIfAbsent=true&apiKey=113a9a543ada41659bf28dbefd47925e"
//           className="object-contain shrink-0 self-stretch my-auto aspect-[1.19] w-[19px]"
//         />
//         <Image
//           loading="lazy"
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c36a44f70b9c7e1477ed98e9ee169f896b3faf3ea52d449df6d567b58d5dfec?placeholderIfAbsent=true&apiKey=113a9a543ada41659bf28dbefd47925e"
//           className="object-contain shrink-0 self-stretch my-auto rounded-none aspect-square w-[50px]"
//         />
//         <Image
//           loading="lazy"
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e12f71f3de67814a65d8073722bddb0749912d0ebc46f10fe693a8e79dc32dd?placeholderIfAbsent=true&apiKey=113a9a543ada41659bf28dbefd47925e"
//           className="object-contain shrink-0 self-stretch my-auto w-4 aspect-[0.76]"
//         />
//         <Image
//           loading="lazy"
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/68765b647e90af90eca502668a180c560143056e5412cc6c808faaef8cf77d73?placeholderIfAbsent=true&apiKey=113a9a543ada41659bf28dbefd47925e"
//           className="object-contain shrink-0 self-stretch my-auto aspect-[3.86] w-[27px]"
//         />
//       </div>
//     </div>
//   );
// };
// export default MobileView;
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";

const MobileView = () => {
  const [stream, setStream] = useState(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        setStream(mediaStream);
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
        }
      } catch (error) {
        console.error("Error accessing camera:", error);
      }
    };

    startCamera();

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <div className="flex flex-col h-screen text-white bg-gray-900">
      {/* Header */}
      {/* <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <button className="text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <div className="text-sm font-medium">
          Bruce Williams, Pre-Interview (HR Round)
        </div>
      </div> */}
      <div className="flex items-center justify-between p-4 text-white bg-gray-900">
        <div className="flex items-center">
          <button className="mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <div>
            <h1 className="text-[14px] font-semibold">
              Bruce Williams, Pre-Interview (HR Round)
            </h1>
            <p className="text-[10px] text-gray-400">
              March 31st, 2024 | 11:00 AM
            </p>
          </div>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>
      </div>

      <div className="relative flex-grow">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute px-2 py-1 text-xs text-white bg-red-500 rounded bottom-4 left-[7rem]">
          Unauthorized face detected
        </div>
      </div>

      <div className="p-4 bg-gray-800">
        <div className="p-3 text-sm bg-gray-700 rounded-lg">
          <p className="mb-1 font-bold">Orion</p>
          <p>
            Thank you everyone for joining the design critique meeting. I want
            everyone's opinion so please start !
          </p>
        </div>
      </div>

      <div className="flex items-center justify-around p-4 bg-gray-800">
        <button className="text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m2.828-9.9a9 9 0 012.828-2.828"
            />
          </svg>
        </button>
        <button className="text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
            />
          </svg>
        </button>
        <button>
          <Image src="/call.svg" width={50} height={50} alt="start recording" />
        </button>
        <button className="text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        </button>
        <button className="text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MobileView;
