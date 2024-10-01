"use client";
import React from "react";

import logo from "../assets/logo.svg";
import bellIcon from "../assets/bellIcon.svg";
import userImg from "../assets/userImg.svg";
import btn from "../assets/btn.svg";
import orion from "../assets/orion.svg";
import mic from "../assets/Mic.svg";
import violationIcon from "../assets/violationIcon.svg";
import emoji from "../assets/emoji.svg";
import microphoneIcon from "../assets/mic2.svg";
import stopIcon from "../assets/stop.svg";
import moreInfoIcon from "../assets/moreinfo.svg";
import bluecircle from "../assets/bluecircle.svg";
import redcircle from "../assets/redCircle.svg";
import Timer from "../../../components/Timer";
// import Timer from './Timer'
// import CircularTimer from './CircularTimer'

const LiveInterview = () => {
  // Function to format the date
  function formatDate(date) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString(undefined, options);
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
    const day = date.getDate();
    const formattedDate = formatDate(date).replace(
      `${day}`,
      `${day}${getOrdinalSuffix(day)}`
    );
    const formattedTime = formatTime(date);

    return <div>{`${formattedDate} | ${formattedTime}`}</div>;
  };

  const now = new Date();

  return (
    <section className="px-6 pt-5 text-white bg-black font-inter">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center justify-center bg-white rounded-full h-14 w-14">
            <img src={logo} alt="" />
          </div>
          <div>
            <h1>Bruce Williams, Pre-Interview (HR Round)</h1>
            <DateTimeDisplay date={now} />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="w-6 h-6">
            <img src={bellIcon} alt="bell icon" />
          </span>
          <div className="px-4 py-2 w-[19rem] flex justify-between rounded-full bg-[#081018] ">
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full border-2 border-[#01e2db]">
                <img src={userImg} className="rounded-full" alt="user image" />
              </div>
              <div>
                <h2 className="text-xl font-medium">Jane Watson</h2>
                <p className="text-[#CCCCCC] font-medium text-xs">HR Lead</p>
              </div>
            </div>
            <button>
              <img src={btn} alt="button icon" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-full gap-6 py-4">
        {/* <div className="flex-[7] flex flex-col gap-4">
          <div className="rounded-lg h-[35.875rem]">
            <img
              src="https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-full rounded-lg"
              alt=""
            />
          </div>

          <div className="flex flex-col items-center w-full bg-[#081018] rounded-lg py-3">
            <div className="flex items-center justify-center h-28">
              <img src={orion} alt="orion img" />
            </div>
            <div className="flex items-center self-end gap-2 pr-5">
              <p className="w-32 bg-[#060b11] rounded-full px-5 py-1">Orion</p>
              <button>
                <img src={mic} alt="Mic Icon" />
              </button>
            </div>
          </div>

          <div className="flex items-center self-center py-5 gap-9">
            <button className="bg-[#0077c2] rounded-full p-4">
              <img src={microphoneIcon} alt="" />
            </button>
            <button>
              <img src={stopIcon} alt="" />
            </button>
            <button className="bg-[#0077c2] rounded-full h-[3.75rem] w-[3.75rem] flex items-center justify-center">
              <img src={moreInfoIcon} alt="" />
            </button>
          </div>
        </div> */}
        <div className="flex flex-col w-[1200px] gap-4 flex-7">hello</div>
        <div className="flex-[3] bg-[#081018] rounded-2xl flex flex-col px-6 py-5">
          <div className="flex flex-col gap-6">
            {/* <Timer/> */}

            <div className="self-center">
              <Timer />
            </div>

            <div className="flex items-center p-2 border-2 border-[#EB5757] rounded-full gap-2">
              <img src={violationIcon} alt="" />
              <p className="text-base font-medium">Violation text</p>
            </div>

            <div className="flex items-center justify-center bg-[#071b2a] px-7 py-6 rounded-3xl border-2 border-[#5ac5e9]">
              <img src={emoji} alt="emojis" />
            </div>

            <div className="flex flex-col gap-6 overflow-hidden">
              <div className="scrollable-container">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2 rounded-3xl border-2 border-[#5ac5e9] p-6">
                    <div>
                      <span className="text-[#CCCCCC] font-normal text-[0.75rem]">
                        Orion
                      </span>
                      <p className="text-base font-medium">
                        Q) Can you provide an example of a challenging situation
                        you faced at work and how you handled it?
                      </p>
                    </div>
                    <div>
                      <span className="text-[#CCCCCC] font-normal text-[0.75rem]">
                        Bruce
                      </span>
                      <p className="text-base font-medium">
                        Can you provide an example of a challenging situation
                        you faced at work and how you handled it?
                      </p>
                    </div>
                    <div className="flex gap-2 px-2 py-1 border border-white rounded-full w-max mt-11">
                      <img src={redcircle} alt="" />
                      <span className="font-medium text-[0.75rem]">
                        Technical
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 rounded-3xl border-2 border-[#5ac5e9] p-6">
                    <div>
                      <span className="text-[#CCCCCC] font-normal text-[0.75rem]">
                        Orion
                      </span>
                      <p className="text-base font-medium">
                        Q) Can you provide an example of a challenging situation
                        you faced at work and how you handled it?
                      </p>
                    </div>
                    <div>
                      <span className="text-[#CCCCCC] font-normal text-[0.75rem]">
                        Bruce
                      </span>
                      <p className="text-base font-medium">
                        Can you provide an example of a challenging situation
                        you faced at work and how you handled it?
                      </p>
                    </div>
                    <div className="flex gap-2 px-2 py-1 border border-white rounded-full w-max mt-11">
                      <img src={bluecircle} alt="" />
                      <span className="font-medium text-[0.75rem] ">
                        Experience
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveInterview;
