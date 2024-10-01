"use client";
// app/room/[roomid]/page.js
import { useUser } from "@/app/UserContext";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { v4 as uuid } from "uuid";
import React from "react";

const Room = ({ params }) => {
  const { fullName } = useUser();
  //   console.log(params.roomid, fullName);
  const roomID = params.roomid;

  let myMeeting = async (element) => {
    // generate Kit Token
    const appID = parseInt(process.env.NEXT_PUBLIC_ZEGO_APP_ID);
    const serverSecret = process.env.NEXT_PUBLIC_ZEGO_SERVER_SECRET;
    //we can also add auth
    //(method) ZegoUIKitPrebuilt.generateKitTokenForTest(appID: number, serverSecret: string, roomID: string, userID: string, userName?: string, ExpirationSeconds?: number): string
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      uuid(), //working as our user id
      fullName || "user" + Date.now(),
      720 // expiring after 1 hr
    );

    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    // start the call
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Shareable link",
          url:
            window.location.protocol +
            "//" +
            window.location.host +
            window.location.pathname +
            "?roomID=" +
            roomID,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
      maxUsers: 10,
      //write show if you want to enable or disable something
    });
  };

  return <div className="w-full h-screen" ref={myMeeting}></div>;
};

export default Room;
