import { useEffect, useState } from "react";


const Advice = () => {
    const [advices, setAdvices] = useState([])
    const [selectedDisease, setSelectedDisease] = useState('');
    const [disease, setDisease] = useState([])

    // Function to handle the change in the dropdown
    const handleDiseaseChange = (e) => {
        // Update the state with the selected disease
        setSelectedDisease(e.target.value);
    };
    useEffect(() => {
        const [filteredDisease] = advices.filter(disease => disease.title === selectedDisease);
        setDisease(filteredDisease);
    }, [selectedDisease, advices])

    useEffect(() => {
        fetch("/advice.json")
            .then(res => res.json())
            .then(data => setAdvices(data))
    }, [])
    return (
        <div className="mt-2 py-5 lg:py-7">
            <div className="bg-cyan-300 p-12">
                <h1 className="text-xl font-semibold lg:text-5xl text-center mt-10">আপনার রোগটি নির্বাচন করুন</h1>
                <div className=" flex justify-center my-10">
                    <form className="border lg:w-1/4">
                        <select onChange={handleDiseaseChange}
                            value={selectedDisease}
                            defaultValue="রোগ নির্বাচন করুন"
                            name="disease" id="diseaseSelect" className="w-full py-2 text-center px-7">
                            <option  selected>রোগ নির্বাচন করুন</option>
                            <option value="জ্বর">জ্বর</option>
                            <option value="সর্দি-কাশি">সর্দি-কাশি</option>
                            <option value="মাথা ঘামা">মাথা ঘামা</option>
                            <option value="পেট ব্যাথা">পেট ব্যাথা</option>
                            <option value="ডায়াবেটিস">ডায়াবেটিস</option>
                            <option value="উচ্চ রক্তচাপ">উচ্চ রক্তচাপ</option>
                            <option value="হৃদরোগ">হৃদরোগ</option>
                            <option value="ক্যান্সার">ক্যান্সার</option>
                        </select>
                    </form>
                </div>
            </div>
            <div>
                {
                    disease && <div className="px-5 lg:px-20 lg:pb-10 mt-10">
                        <div className=" h-[400px] mb-10">
                            <img src={disease?.image} className="h-full w-full object-cover" alt="" />
                        </div>
                        <h1 className="font-semibold mb-3 text-xl">{disease?.title}</h1>
                        <p>{disease?.description}</p>
                        <p className="font-semibold mt-4">{disease?.tips_title_1}</p>
                        <p className="font-semibold mt-3">{disease?.tips_title_2}</p>
                        <p>{disease?.tips_para_2}</p>
                        <p className="font-semibold mt-2">{disease?.tips_title_3}</p>
                        <p>{disease?.tips_para_3}</p>
                        <p className="font-semibold mt-2">{disease?.tips_title_4}</p>
                        <p>{disease?.tips_para_4}</p>
                        <p className="font-semibold mt-2">{disease?.tips_title_5}</p>
                        <p>{disease?.tips_para_5}</p>
                        <p className="mt-3">{disease?.conclusion} </p>
                    </div>
                }
            </div>
        </div>
    );
};

export default Advice;