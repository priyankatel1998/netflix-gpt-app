    
    
    const Videotitle =({ title , overview })=>{
    return (
        <div className="pt-72 px-16 absolute">
       <h1 className="font-bold text-white text-6xl">{title}</h1>
       <h2 className="py-6 text-lg  text-white w-1/4">{overview}</h2>
       <div>
        <button className="text-white bg-gray-100 w-28 p-2.5 text-lg rounded-full bg-opacity-65 m-3 hover:bg-opacity-10"> ▶️Play</button>
        <button className="bg-gray-700 text-white  w-30 p-2.5 text-lg rounded-full bg-opacity-50 hover:bg-opacity-10">More info</button>
       </div>
        </div>
    )
};
export default Videotitle;