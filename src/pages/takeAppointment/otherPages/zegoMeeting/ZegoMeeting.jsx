import { useLocation, useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import useUser from "../../../../hooks/useUser";
import { useEffect, useRef, useState } from "react";
import { IoFlashOffOutline } from "react-icons/io5";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const ZegoMeeting = () => {
  const { roomId } = useParams();
  const userData = useUser();
  const meetingContainerRef = useRef(null);
  const [isMeetingLoading, setIsMeetingLoading] = useState(true);
  // const [isPendingMessageShowing, setIsPendingMessageShowing] = useState(false)
  const axiosSecure = useAxiosSecure();
  // get unique Id for each room
  // const uniqueIdForRoom = roomId + "_" + new Date().getTime().toString();

  // const location = useLocation();

  // update booked appointment with meeting link 
  useEffect(() => {
    // get the meeting link 
    const link =
      window.location.protocol +
      "//" +
      window.location.host +
      window.location.pathname +
      "?roomId=" +
      roomId;
      // update booked appointment
    const updateBookedAppointment = async () => {
      console.log('front-end')
      const { data } = await axiosSecure.put(
        `/doctorAppointments/update-booked-appointment/${roomId}?meetLinkUpdated=${true}`,{meetingLinks:link}
      );
      console.log(data);
    };
    // calling the func
    updateBookedAppointment();
  }, [axiosSecure, roomId]);

  // useEffect(() => {
    //  if(!isMeetingLoading){
      // const searchParams = new URLSearchParams(location.search);
      // const startTimeParam = searchParams.get("startTime");
      // console.log("startTime",startTimeParam)
      // const startTime = new Date(startTimeParam);
      // get the current time
      // const currentTime = new Date();
      // Calculate the difference in milliseconds between the current time and the start time
      // const timeDifference = currentTime - startTime;
      // Convert the time difference from milliseconds to minutes
      // const timeDifferenceInMinutes = timeDifference / (1000 * 60);
      // Check if the current time is less than 5 minutes from the start time
      // const within5Minutes = timeDifferenceInMinutes >= -5 && timeDifferenceInMinutes < 0;
      // Check if the current time is equal to the start time
      // const isEqual = timeDifferenceInMinutes === 0;
      // Check if the current time is less than 31 minutes from the start time
  //     const lessThan31Minutes = timeDifferenceInMinutes > 0 && timeDifferenceInMinutes < 31;

  //     setTimeout(() => {
  //       const button = document.getElementsByClassName(
  //         "VsTVUAD89KWleD0YRVsD"
  //       )[0];
  //       console.log(button);
  //       if (within5Minutes || (isEqual && lessThan31Minutes)) {
  //         button.style.cssText = "opacity:1; pointer-events: auto";
  //       } else {
  //         button.style.cssText = "opacity:0.3; pointer-events: none";
  //       }
  //     }, 1000);
  //    }
  // }, [isMeetingLoading, location.search]);

  useEffect(() => {
    let meeting = () => {
      // generate Kit Token
      const appID = 327100452;
      const serverSecret = "f15ef18af4358e21a931f1704e4e1830";
      const userId = userData?._id;
      const userName = userData?.name;
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomId,
        userId,
        userName
      );
      const zc = ZegoUIKitPrebuilt.create(kitToken);
      // start the call
      zc?.joinRoom({
        container: meetingContainerRef.current,
        sharedLinks: [
          {
            name: <span className="flex flex-col">
            <span>You can find Your link on dashboard</span> 
            <span>or Copy now</span>
            </span>,
            url:
              window.location.protocol +
              "//" +
              window.location.host +
              window.location.pathname +
              "?roomId=" +
              roomId,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall,
        },
        showRemoveUserButton: true,
        showTurnOffRemoteMicrophoneButton: true,
      });
    };
    // calling the meeting func here
    meeting();
    setIsMeetingLoading(false);
  }, [roomId, userData?._id, userData?.name]);

  return (
    <div className="max-[740px]:overflow-x-auto overflow-auto px-3">
      <div
        className="myCallContainer"
        ref={meetingContainerRef}
        style={{width:'96vw',height:'85vh'}}
      ></div>
      {/* {
        isPendingMessageShowing && <div className="absolute bg-red-700 top-0 right-0 z-[1000]">
          <p className="text-lg">You get access to talk with your booked doctor in your selected date and time </p>
          <p className="text-lg">You can access permission to join your link before 5 minutes of your date & time</p>
          <p className="text-lg">Your meeting link are saved and you can get your link from user dashboard or you can copy your link and keep save on your choices</p>
        </div>
      } */}
    </div>
  );
};

export default ZegoMeeting;
