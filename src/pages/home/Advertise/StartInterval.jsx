
const StartInterval = (setCurrentIndex, doctors) => {
    return setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % doctors.length);
    }, 5000);
};

export default StartInterval;