// Timer.js
import { useState, useEffect } from "react";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes in seconds

  useEffect(() => {
    if (timeLeft === 0) return;

    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const getBorderColor = () => {
    if (timeLeft <= 30) {
      return "./stroke4.svg";
    } else if (timeLeft <= 60) {
      return "./stroke3.svg";
    } else if (timeLeft <= 90) {
      return "./stroke2.svg";
    } else {
      return "./stroke1.svg";
    }
  };

  return (
    <div
      className={`flex flex-col items-center justify-center text-white h-[208px] w-[208px]`}
      style={{ backgroundImage: `url(${getBorderColor()})` }}
    >
      {/* className={`flex flex-col items-center justify-center text-white h-[200px] w-[200px] rounded-full border-4 border-dashed ${getBorderColor()}`} */}
      <div className="text-4xl font-bold">{formatTime(timeLeft)}</div>
      <div className="mt-4 text-sm">
        <p>
          <span className="bg-gradient-to-r from-[#22B4F8] to-[#EDF3C2] inline-block text-transparent bg-clip-text">
            minutes
          </span>
          &nbsp;remaining
        </p>
      </div>
    </div>
  );
};

export default Timer;

// import React, { useState, useEffect } from "react";

// const Timer = () => {
//   const [timeLeft, setTimeLeft] = useState(120); // 2 minutes in seconds

//   useEffect(() => {
//     if (timeLeft === 0) return;

//     const intervalId = setInterval(() => {
//       setTimeLeft((prevTime) => prevTime - 1);
//     }, 1000);

//     return () => clearInterval(intervalId);
//   }, [timeLeft]);

//   const formatTime = (seconds) => {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = seconds % 60;
//     return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
//   };

//   const getBorderColor = () => {
//     if (timeLeft <= 30) {
//       return "border-gradient-red";
//     } else if (timeLeft <= 60) {
//       return "border-gradient-orange";
//     } else if (timeLeft <= 90) {
//       return "border-gradient-yellow";
//     } else {
//       return "border-gradient-green";
//     }
//   };

//   return (
//     <div className={`timer ${getBorderColor()}`}>
//       <div className="content">
//         <div className="text-4xl font-bold">{formatTime(timeLeft)}</div>
//         <div className="mt-4 text-sm">
//           <p>
//             <span className="bg-gradient-to-r from-[#22B4F8] to-[#EDF3C2] inline-block text-transparent bg-clip-text">
//               minutes
//             </span>
//             &nbsp;remaining
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Timer;
