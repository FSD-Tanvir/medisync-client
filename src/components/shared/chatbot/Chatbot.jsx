
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { RiCustomerService2Line } from "react-icons/ri";
import { BsSend } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import io from "socket.io-client";
import "./chatbot.css";

const Chatbot = () => {
  const [isOpen, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io("http://localhost:5000"); // Assuming your backend runs on localhost:5001
    setSocket(newSocket);

    return () => newSocket.close();
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on("message", (message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
      });
    }
  }, [socket]);

  const sendMessage = (data) => {
    if (socket) {
      socket.emit("chat message", data.chatText);
      setMessages((prevMessages) => [...prevMessages, data.chatText]);
      reset();
    }
  };

  return (
    <>
      <div className="text-black fixed bottom-5 right-5 z-20">
        <div className="w-full">
          <div
            className="w-10 h-10 bg-[#3B82F6] rounded-full flex justify-center items-center cursor-pointer"
            onClick={() => setOpen(!isOpen)}
          >
            <IoChatbubbleEllipsesOutline size={25} className="text-white" />
          </div>
          <div
            className={`absolute bottom-12 right-5 transition-all transform ${
              isOpen
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }`}
          >
            <div className="w-60 h-auto rounded-lg relative bg-[#BFE2FF] shadow-lg">
              <div className="bg-zinc-700 rounded-t-lg px-2 py-1 flex justify-between items-center">
                <h1 className="text-white">Chat here...</h1>
                <MdClose
                  onClick={() => setOpen(!isOpen)}
                  className="text-white cursor-pointer"
                />
              </div>

              <div className="h-44 overflow-y-auto px-3 py-2 flex flex-col gap-2">
                <div className="px-3 py-2 flex justify-start items-center gap-2">
                  <RiCustomerService2Line />
                  <h1 className="text-sm">Hello there!!!</h1>
                </div>
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className="text-sm px-3 py-2 flex justify-start items-center flex-row-reverse gap-2"
                  >
                    <RxAvatar />
                    <h1>{message}</h1>
                  </div>
                ))}
              </div>
              <div className="text-center px-2 w-full pb-2">
                <form
                  onSubmit={handleSubmit(sendMessage)}
                  className="flex items-center gap-2 relative"
                >
                  <input
                    type="text"
                    name="chatText"
                    placeholder="Type your message"
                    className="w-[180px] rounded-lg px-2 py-1 focus:outline-none"
                    {...register("chatText", { required: true })}
                  />
                  {errors.chatText && (
                    <span className="text-red-600 text-sm font-thin absolute bottom-8">
                      This field is required
                    </span>
                  )}
                  <button
                    type="submit"
                    className="w-8 h-8 bg-[#3B82F6] rounded-full flex justify-center items-center"
                  >
                    <BsSend className="text-white" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbot