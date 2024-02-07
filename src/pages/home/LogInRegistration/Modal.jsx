import LogIn from "./LogIn";
import { ImCross } from "react-icons/im";
import Register from "./Register";
import { useState } from "react";

export default function Modal({ showModal, setShowModal }) {
    const [showRegister, setShowRegister] = useState(false);

    return (
        <>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto bg-blue-500/40  fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-full sm:w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none p-8">
                                {/*header*/}
                                {/* <div className="flex items-center justify-between border-solid border-blueGray-200 rounded-t px-4 py-3"> */}
                                    {/* <h3 className="text-3xl font-bold ">
                                        {showRegister ? 'Registration' : 'Log In'}
                                    </h3> */}
                                    <button className="flex justify-end mt-14 lg:-mr-4 lg:-mt-4"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <ImCross />
                                    </button>
                                {/* </div> */}
                                {/*body here will be the input tags */}

                                {showRegister ? (
                                    <Register
                                        setShowRegister={setShowRegister}
                                        setShowModal={setShowModal}
                                    />
                                ) : (
                                    <LogIn
                                        setShowRegister={setShowRegister}
                                        setShowModal={setShowModal}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}
