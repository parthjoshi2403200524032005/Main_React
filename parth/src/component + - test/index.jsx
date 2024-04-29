import { useState } from "react";

export const Add = () => {
  const [add, setAdd] = useState(0);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center p-4 transform hover:scale-105 transition-transform duration-300 w-[450px] h-[250px] opacity-90 hover:opacity-100 bg-gray-200 hover:bg-gray-300 transition-bg duration-300 rounded-lg">
        <div className="text-3xl text-gray-700 transition-colors duration-300 mt-[0px]">{add}</div>
        <div className="space-x-4 mt-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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
    </div>
  );
};
