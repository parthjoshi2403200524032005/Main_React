import { useState } from "react"


export const Twodisplay = () => {

    const [add, setAdd] = useState(0);
    const [add1, setAdd1] = useState(0);
    const [total, setTotal] = useState(0);

    function Total() {
      const result = add + add1;
      setTotal(result); 
    }
  return (
    <div className="">
    <div className=" text-center justify-center text-center  bg-blue-600  w-[800px] h-[600px] ml-[450px] mt-[100px]">
        <p className="rounded bg-[white] w-[300px] h-[50px] ml-[240px] font-bold pt-[10px] absolute top-[180px] ">{total}</p>
     <button className="bg-[white] absolute top-[250px] left-[820px] rounded font-bold  w-[50px]" onClick={()=> Total()}>result</button>
     <div className="flex h-[350px] mt-[100px]">

        
      <div className="text-center p-4 transform hover:scale-105 transition-transform duration-300 w-[300px] h-[180px] opacity-90 hover:opacity-100 bg-gray-200 hover:bg-gray-300 transition-bg duration-300 rounded-lg ml-[60px] mt-[80px] absolute top-[280px] ">
        <div className="text-3xl text-gray-700 transition-colors duration-300 mt-[20px]">{add}</div>
        <div className="space-x-4 mt-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transform hover:scale-105 transition-transform duration-300 hover:pulse"
            onClick={() => setAdd(add + 1)}
          >
            +
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setAdd(add - 1)}
          >
            -
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setAdd(0)}
          >
            Reset
          </button>
        </div>
      </div>
      
   
    
    <div className=" items-center justify-center h-screen absolute top-[280px] left-[820px]">
      <div className="text-center p-4 transform hover:scale-105 transition-transform duration-300 w-[300px] h-[180px] opacity-90 hover:opacity-100 bg-gray-200 hover:bg-gray-300 transition-bg duration-300 rounded-lg  ml-[60px] mt-[80px] ">
        <div className="text-3xl text-gray-700 transition-colors duration-300 mt-[20px]">{add1}</div>
        <div className="space-x-4 mt-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setAdd1(add1 + 1)}
          >
            +
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setAdd1(add1 - 1)}
          >
            -
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setAdd1(0)}
          >
            Reset
          </button>
        </div>
      </div>
      </div>
      
    </div>
    </div>
    </div>
 
  )
}
