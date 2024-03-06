

const ShowDate = ({date}) => {

    const selectedDate = new Date(date)
    const localDate = selectedDate.toLocaleDateString()
    return (
        <div>
            <p className="select-none font-semibold">Date:<span className="font-normal"> {localDate}</span></p>
        </div>
    );
};

export default ShowDate;