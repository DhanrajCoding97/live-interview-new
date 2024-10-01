import Image from "next/image";
import { Fugaz_One, Roboto } from "next/font/google";
import Link from "next/link";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
});

const fugaz = Fugaz_One({
  subsets: ["latin"],
  weight: ["400"],
});

export default function InitialView() {
  return (
    <div className="min-h-screen p-6 text-white bg-black">
      <div className="w-[1400px] h-[770px] mx-auto">
        {/* <div className="relative p-[2px] rounded-lg bg-black border-white"> */}
        <div className="relative w-[1400px] h-[770px] px-4 py-12 bg-black bg-opacity-10 rounded-lg border-white">
          {/* Overlay Layer */}
          {/* <div className="absolute inset-0 z-0 bg-black rounded-lg bg-opacity-80"></div> */}

          {/* Main Content Layer */}
          <div className="relative z-10 flex flex-col flex-3 md:flex-row">
            {/* Left Column with Image and Info */}
            <div className="mb-6 md:w-1/3 md:mb-0">
              <div className="relative w-48 h-48 mx-auto">
                <Image
                  src="bruce.svg"
                  alt="Bruce Williams"
                  layout="fill"
                  className="rounded-full"
                />
              </div>
              <h2 className="mt-4 text-2xl font-bold text-center">
                Bruce Williams
              </h2>
              <p className="text-center text-gray-400">
                Data scientist, JP Morgan Chase
              </p>
              <div className="flex flex-col justify-center items-center mt-6 space-y-4  mr-[80px]">
                <p className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Birmingham, London
                </p>
                <hr className="ml-16 bg-[#FFFFFF] opacity-20 w-60 rounded-lg"></hr>
                <p className="flex items-center mr-4">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  +44-7472742367
                </p>
                <hr className="ml-16 bg-[#FFFFFF] opacity-20 w-60 rounded-lg"></hr>
                <p className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  bruce10@gmail.com
                </p>
              </div>
              <div className="relative mx-auto mt-8 w-[313px] h-[153px] rounded-lg border border-[#0077C2] bg-gradient-to-r from-[#0077C2] to-[#70757A] bg-opacity-10">
                <div className="absolute inset-0 z-0 bg-black rounded-lg bg-opacity-65"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-2">
                  {/* Content inside the small card */}
                  <p className="items-start text-[18px] text-white">
                    Applied For The Position of
                  </p>
                  <hr className="bg-[#FFFFFF] opacity-20 w-[265px] rounded-lg" />
                  <div className="flex flex-row items-center justify-start space-x-4">
                    <Image
                      src="jpmorgan.svg"
                      alt="Data Scientist"
                      width={54}
                      height={54}
                    />
                    <span className="flex flex-col items-start text-white justify-normal">
                      <h2 className="font-bold">Senior Data Analyst</h2>
                      <p className="text-[12px] text-[#CCCCCC]">JP Morgan</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Vertical Divider */}
            <div className="border-l border-[#FFFFFF] opacity-20 h-[670px] -ml-6"></div>

            {/* Right Column with Additional Info */}
            <div className="md:w-2/3 md:pl-6">
              <div className="relative flex flex-col px-6 mb-6 space-y-7 border border-[#0077C2] rounded-lg w-[839px] h-[201px] bg-gradient-to-r from-[#0077C2] to-[#70757A] bg-opacity-10">
                <div className="absolute inset-0 z-0 bg-black rounded-lg bg-opacity-65"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full space-y-6">
                  <div className="flex flex-row items-center justify-between">
                    <h3 className="mb-2 text-xl font-semibold text-white">
                      This is an "AI HR Round Interview"
                    </h3>
                    <button>
                      <Image src={"./demobtn.svg"} width={188} height={36} />
                    </button>
                  </div>
                  <div className="flex flex-row justify-between space-x-2">
                    <Image
                      src={"/box.svg"}
                      height={32}
                      width={32}
                      className="-mt-10"
                    />
                    <p className="text-white">
                      Meet Orion, Meet Orion, Meet Orion, Meet Orion, Meet
                      Orion, Meet Orion, Meet Orion, Meet Orion, Meet Orion,
                      Meet Orion, Meet Orion, Meet Orion, Meet Orion, Meet
                      Orion, Meet Orion, Meet Orion, Meet Orion, Meet Orion,
                      Meet Orion, Meet Orion.
                    </p>
                  </div>
                </div>
              </div>
              {/* Final Section */}
              <div className="relative px-4 border border-[#0077C2] flex flex-col space-y-7 rounded-lg w-[839px] h-[330px] bg-gradient-to-r from-[#0077C2] to-[#70757A] bg-opacity-10">
                <div className="absolute inset-0 z-0 bg-black rounded-lg bg-opacity-65"></div>

                <div className="z-10 rounded-lg ">
                  <h3 className="mb-4 text-xl font-semibold text-white">
                    Before you start ...
                  </h3>
                  <ul className="space-y-2 text-white">
                    {[...Array(5)].map((_, index) => (
                      <li key={index} className="flex items-center space-x-6">
                        <div className="flex items-center py-[4px] space-x-2">
                          <Image src={"/tick.svg"} width={32} height={32} />
                          <span>
                            Master Tableau for impactful data repr sen. Learn
                            vis.
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="p-4 mt-2">
                <p className={"text-center text-[#59A5F5] " + roboto.className}>
                  By continuing you are agreeing to the authenticity of all the
                  above information
                </p>
                <div className="mt-4 text-center">
                  <Link href={"/interview"}>
                    <button className="px-4 py-2 font-bold w-[161px] h-[43px] text-white border border-blue-300 rounded-full">
                      Continue <i class="fa-solid fa-chevron-right"></i>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// import Image from "next/image";
// import { Fugaz_One, Roboto } from "next/font/google";
// import Link from "next/link";

// const roboto = Roboto({
//   subsets: ["latin"],
//   weight: ["400"],
// });

// const fugaz = Fugaz_One({
//   subsets: ["latin"],
//   weight: ["400"],
// });

// export default function InitialView() {
//   return (
//     <div className="min-h-screen p-6 text-white bg-black">
//       <div className="w-[1400px] h-[770px] mx-auto">
//         {/* Wrapper for Gradient Border */}
//         <div className="relative p-[2px] rounded-lg bg-gradient-to-r from-[#0077C2] to-[#70757A]">
//           <div className="relative w-[1400px] h-[770px] px-4 py-12 bg-black bg-opacity-10 rounded-lg">
//             {/* Overlay Layer */}
//             <div className="absolute inset-0 z-0 bg-black rounded-lg bg-opacity-80"></div>

//             {/* Main Content Layer */}
//             <div className="relative z-10 flex flex-col md:flex-row">
//               {/* Left Column with Image and Info */}
//               <div className="mb-6 md:w-1/3 md:mb-0">
//                 <div className="relative w-48 h-48 mx-auto">
//                   <Image
//                     src="bruce.svg"
//                     alt="Bruce Williams"
//                     layout="fill"
//                     className="rounded-full"
//                   />
//                 </div>
//                 <h2 className="mt-4 text-2xl font-bold text-center">
//                   Bruce Williams
//                 </h2>
//                 <p className="text-center text-gray-400">
//                   Data scientist, JP Morgan Chase
//                 </p>
//                 <div className="flex flex-col justify-center items-center mt-6 space-y-4  mr-[80px]">
//                   <p className="flex items-center">
//                     <svg
//                       className="w-5 h-5 mr-2"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                       />
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                       />
//                     </svg>
//                     Birmingham, London
//                   </p>
//                   <hr className="ml-16 bg-[#FFFFFF] opacity-20 w-60 rounded-lg"></hr>
//                   <p className="flex items-center mr-4">
//                     <svg
//                       className="w-5 h-5 mr-2"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//                       />
//                     </svg>
//                     +44-7472742367
//                   </p>
//                   <hr className="ml-16 bg-[#FFFFFF] opacity-20 w-60 rounded-lg"></hr>
//                   <p className="flex items-center">
//                     <svg
//                       className="w-5 h-5 mr-2"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                       />
//                     </svg>
//                     bruce10@gmail.com
//                   </p>
//                 </div>
//                 {/* Smaller card with gradient border */}
//                 <div className="relative  w-[313px] mx-auto mt-8 p-[2px] rounded-lg bg-gradient-to-r from-[#0077C2] to-[#70757A]">
//                   <div className="relative h-[153px] rounded-lg bg-black bg-opacity-10">
//                     <div className="absolute inset-0 z-0 bg-black rounded-lg bg-opacity-65"></div>
//                     <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-2">
//                       {/* Content inside the small card */}
//                       <p className="items-start text-[18px] text-white">
//                         Applied For The Position of
//                       </p>
//                       <hr className="bg-[#FFFFFF] opacity-20 w-[265px] rounded-lg" />
//                       <div className="flex flex-row items-center justify-start space-x-4">
//                         <Image
//                           src="jpmorgan.svg"
//                           alt="Data Scientist"
//                           width={54}
//                           height={54}
//                         />
//                         <span className="flex flex-col items-start text-white justify-normal">
//                           <h2 className="font-bold">Senior Data Analyst</h2>
//                           <p className="text-[12px] text-[#CCCCCC]">
//                             JP Morgan
//                           </p>
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Vertical Divider */}
//               <div className="border-l border-[#FFFFFF] opacity-20 h-[670px] -ml-6"></div>

//               {/* Right Column with Additional Info */}
//               <div className="md:w-2/3 md:pl-6">
//                 {/* Card with gradient border */}
//                 <div className="relative  flex flex-col px-6 mb-6  p-[2px] bg-gradient-to-r from-[#0077C2] to-[#70757A] rounded-lg">
//                   <div className="relative w-[839px] h-[201px] rounded-lg bg-black bg-opacity-10">
//                     <div className="absolute inset-0 z-0 bg-black rounded-lg bg-opacity-65"></div>

//                     {/* Content */}
//                     <div className="relative z-10 flex flex-col h-full space-y-6">
//                       <div className="flex flex-row items-center justify-between">
//                         <h3 className="mb-2 text-xl font-semibold text-white">
//                           This is an "AI HR Round Interview"
//                         </h3>
//                         <button>
//                           <Image
//                             src={"./demobtn.svg"}
//                             width={188}
//                             height={36}
//                           />
//                         </button>
//                       </div>
//                       <div className="flex flex-row justify-between space-x-2">
//                         <Image
//                           src={"/box.svg"}
//                           height={32}
//                           width={32}
//                           className="-mt-10"
//                         />
//                         <p className="text-white">
//                           Meet Orion, Meet Orion, Meet Orion, Meet Orion, Meet
//                           Orion, Meet Orion, Meet Orion, Meet Orion, Meet Orion,
//                           Meet Orion, Meet Orion, Meet Orion, Meet Orion, Meet
//                           Orion, Meet Orion, Meet Orion, Meet Orion, Meet Orion,
//                           Meet Orion, Meet Orion.
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Final Section with gradient border */}
//                 <div className="relative flex flex-col p-[2px] bg-gradient-to-r from-[#0077C2] to-[#70757A] rounded-lg">
//                   <div className="relative w-[839px] h-[330px] rounded-lg bg-black bg-opacity-10">
//                     <div className="absolute inset-0 z-0 bg-black rounded-lg bg-opacity-65"></div>

//                     <div className="z-10 px-4 rounded-lg">
//                       <h3 className="mb-4 text-xl font-semibold text-white">
//                         Before you start ...
//                       </h3>
//                       <ul className="space-y-2 text-white">
//                         {[...Array(5)].map((_, index) => (
//                           <li
//                             key={index}
//                             className="flex items-center space-x-6"
//                           >
//                             <div className="flex items-center py-[4px] space-x-2">
//                               <Image src={"/tick.svg"} width={32} height={32} />
//                               <span>
//                                 Master Tableau for impactful data
//                                 representation. Learn visualization.
//                               </span>
//                             </div>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="p-4 mt-2">
//                   <p
//                     className={"text-center text-[#59A5F5] " + roboto.className}
//                   >
//                     By continuing you are agreeing to the authenticity of all
//                     the above information
//                   </p>
//                   <div className="mt-4 text-center">
//                     <Link href={"/interview"}>
//                       <button className="px-4 py-2 font-bold w-[161px] h-[43px] text-white border border-blue-300 rounded-full">
//                         Continue <i className="fa-solid fa-chevron-right"></i>
//                       </button>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
