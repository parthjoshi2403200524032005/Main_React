import React, { useState } from 'react';

const Todoapp = () => {
  const [inputValue, setInputValue] = useState('');
  const [list, setList] = useState([]);


  const handleAddClick = () => {
    list?.push(inputValue);
    setInputValue('')
    
  };

  const handleEdit = (val , index) =>{
    setInputValue(val);

    list?.splice(index,1);
  }
  // let int1 = Math.floor(Math.random() * 100) ;

  return (
    <div className="p-4 space-y-2">
      <input
        type="text"
        className="border px-2 py-1 rounded w-[300px]"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded ml-[20px]"
        onClick={handleAddClick}
      >
        {inputValue === "" ? "*" : '>'}
        Add
       
      </button>
      <div>
        {list.map((val, index) => (
          <div className='flex'>
            <div>{index+1}</div> 
          <div key={index} className="flex  border border-gray-300 w-[350px] rounded ml-[5px] justify-between">
            <div className="">{val}</div>
            <div className=''>
            <button
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-1 rounded mr-[10px]"
              onClick={()=>handleEdit(val,index)}
            >
              Edit
            </button>
            <button
              className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded ml-[10px] mr-[20px] "
              onClick={() => setList((prevList) => prevList.filter((j, i) => i !== index))}
            >
              Delete
            </button>
            </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todoapp;