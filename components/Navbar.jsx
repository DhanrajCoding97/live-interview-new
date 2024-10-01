"use client";
import React, { useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [showDialog, setShowDialog] = useState(false);

  const handleEndInterviewClick = () => {
    setShowDialog(true);
  };

  const handleConfirmEnd = () => {
    router.push(`${pathname}/ended`);
    console.log("confirm clicked");
    setShowDialog(false);
  };

  const handleCancelEnd = () => {
    setShowDialog(false);
  };

  return (
    <div className="flex items-center justify-between px-6 py-4 text-white bg-black">
      <div className="flex items-center gap-6">
        <div className="flex items-center justify-center bg-white rounded-full h-14 w-14">
          <Image src="/logo.svg" width={54} height={54} alt="logo" />
        </div>
        <h1>Bruce Williams, Pre-Interview (HR Round)</h1>
      </div>
      <div className="flex items-center gap-3">
        <button
          className={`w-[178px] h-[46px] px-4 py-2 flex justify-around items-center text-white transition duration-200 rounded-lg ${
            pathname === "/interview"
              ? "bg-red-500 hover:bg-red-600"
              : "bg-gray-500 hover:bg-gray-600 cursor-not-allowed"
          }`}
          onClick={handleEndInterviewClick}
          disabled={pathname !== "/interview"}
        >
          <Image
            src="/End Call Rounded.svg"
            width={24}
            height={24}
            alt="End Call"
          />
          End Interview
        </button>
        <button>
          <Image src="/help.svg" width={95} height={46} alt="Help" />
        </button>
      </div>

      {showDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-6 text-center text-white bg-gray-800 rounded-lg">
            <div className="flex justify-center mb-4">
              <Image src="/error.svg" alt="error" width={24} height={22} />
            </div>
            <h2 className="mb-4 text-xl">
              Do you really want to terminate the Interview?
            </h2>
            <div className="flex justify-center gap-4">
              <button
                className="px-4 py-2 bg-red-500 rounded cursor-pointer hover:bg-red-600"
                onClick={handleConfirmEnd}
              >
                Yes
              </button>
              <button
                className="px-4 py-2 bg-gray-500 rounded cursor-pointer hover:bg-gray-600"
                onClick={handleCancelEnd}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
