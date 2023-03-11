const Card =(props)=>{
    return (
      <>
        <div className="w-100 p-4 flex flex-row justify-between">
          <div className="border-2 border-solid border-blue-400 p-3 w-30 text-center bg-white shadow-xl">
            {props.date}
          </div>
          <div className="border-2 border-solid border-blue-400 p-3 w-80 text-center bg-white shadow-xl">
            {props.title}
          </div>
          <div className="border-2 border-solid border-blue-400 p-3 w-24 text-center bg-white shadow-xl">
            {props.amount}
          </div>
        </div>
      </>
    );
}
export default Card;