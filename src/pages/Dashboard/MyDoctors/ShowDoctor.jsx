import { useEffect,useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ShowDoctor = ({doctorId}) => {
    const axiosSecure = useAxiosSecure()
    const [doctor, setDoctor] = useState({})

    useEffect(()=>{
        const fetchData = async() =>{
            const {data} = await axiosSecure.get(`/doctors/${doctorId}`)
            // console.log(data)
            setDoctor(data?.data)
        }
        // calling fetchData func 
        fetchData()
    },[axiosSecure, doctorId])

    return (
        <div className="border-b border-blue-300 pb-3 mb-3">
            <p className="select-none font-semibold">Your Doctor:<span className="font-normal"> {doctor?.name}</span></p>
            <p className="select-none font-semibold">Doctor specialization:<span className="font-normal"> {doctor?.specialization}</span></p>
            <p className="select-none font-semibold">Doctor Email:<span className="font-normal"> {doctor?.contact?.email}</span></p>
        </div>
    );
};

export default ShowDoctor;