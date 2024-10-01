import React from "react";
import Image from "next/image";

const EndInterview = () => {
  return (
    <div className="flex items-center justify-center min-h-screen -mt-10 bg-black">
      {/* Wrapper for Gradient Border Effect */}
      <div className="relative p-[2px] rounded-lg bg-gradient-to-r from-[#0077C2] to-[#70757A]">
        {/* Inner Content */}
        <div className="relative flex flex-col items-center justify-center w-[1046px] h-[700px] rounded-lg bg-black text-white bg-opacity-10">
          {/* Overlay Layer */}
          <div className="absolute inset-0 z-0 bg-black rounded-lg bg-opacity-80"></div>

          {/* Main Content Layer */}
          <div className="relative z-10 flex flex-col items-center">
            <Image src={"/congrats.svg"} width={248} height={248} />
            <div className="mt-10">
              <h1 className="items-center justify-center text-[#0084FF] text-5xl font-bold">
                Congratulations!
              </h1>
              <p className="flex items-center justify-center mt-2">
                Your response has been recorded successfully.
              </p>
            </div>
            <button className="px-4 py-2 mt-6 border border-blue-700 rounded-full">
              Close The Window <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EndInterview;

// import React from "react";
// import Image from "next/image";

// const EndInterview = () => {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-black">
//       {" "}
//       {/* Full height and centered */}
//       <div className="flex flex-col items-center justify-center w-[1046px] h-[700px] rounded-lg text-center text-white bg-gray-800 border border-blue-500">
//         {" "}
//         {/* Adjusted size and background */}
//         <div className="flex items-center justify-center mb-4">
//           <div className="flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full">
//             {" "}
//             {/* Circle for the checkmark */}
//             <Image src="/congrats.svg" width={32} height={32} alt="Checkmark" />
//           </div>
//         </div>
//         <h1 className="text-3xl font-bold text-blue-500">Congratulations!</h1>
//         <p className="mt-2 text-lg">
//           Your response has been recorded successfully.
//         </p>
//         <button className="px-4 py-2 mt-6 transition duration-200 bg-blue-500 rounded-lg hover:bg-blue-600">
//           Close The Window
//         </button>
//       </div>
//     </div>
//   );
// };

// export default EndInterview;
