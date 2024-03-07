import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import useUser from "../../../../hooks/useUser";
import { useEffect, useRef, useState } from "react";
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
      await axiosSecure.put(
        `/doctorAppointments/update-booked-appointment/${roomId}?meetLinkUpdated=${true}`,
        { meetingLinks: link }
      );
    };
    // calling the func
    updateBookedAppointment();
  }, [axiosSecure, roomId]);

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
            name: (
              <span className="flex flex-col">
                <span>You can find Your link on dashboard</span>
                <span>or Copy now</span>
              </span>
            ),
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
    <div className="">
      <div
        className="myCallContainer"
        ref={meetingContainerRef}
        style={{ width: "96vw", height: "85vh", overflow: "auto" }}
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
