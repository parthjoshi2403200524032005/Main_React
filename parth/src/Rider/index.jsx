import React, { useState } from "react";

const Project = () => {
  const [northDistance, setNorthDistance] = useState(0);
  const [leftDistance, setLeftDistance] = useState(0);
  const [rightDistance, setRightDistance] = useState(0);
  const [TotalDistance, setTotalDistance] = useState(0);
  const [riderName, setRiderName] = useState("Sandeep");

  const resetAllValues = () => {
    setNorthDistance(0);
    setLeftDistance(0);
    setRightDistance(0);
    setTotalDistance(0);
  };
  // Function to generate random north distance
  const generateNorthDistance = () => {
    const northDistance = Math.floor(Math.random() * 100);
    setNorthDistance(northDistance);
  };

  // Function to generate random left distance
  const generateLeftDistance = () => {
    const leftDistance = Math.floor(Math.random() * 100);

    setLeftDistance(leftDistance);
  };

  // Function to generate random right distance
  const generateRightDistance = () => {
    const rightDistance = Math.floor(Math.random() * 100);

    setRightDistance(rightDistance);
  };
  // Function to calculate total distance
  const calculateTotalDistance = () => {
    const TotalDistance = leftDistance + rightDistance + northDistance;

    setTotalDistance(TotalDistance);
  };
  const changeRider = () => {
    const name = riderName === "Sandeep" ?  "Parth" : "Sandeep" ;
    setRiderName(name);
    resetAllValues();
  };

  return (
    <div className="p-[20px] ">
      <div className="nav bg-gray-800 text-white p-4 flex justify-between rounded">
        <h1 className="text-2xl">Heads Towards North</h1>
        <div className="flex justify-between gap-[20px]">
        <h3 className="text2" id="name">
          {riderName}
        </h3>
        <div className="button">
          {" "}
          <h4 className="pr-[30px] pl-[30px] p-[5px] rounded bg-[#9333EA] " onClick={changeRider}>
            {" "}
            Change Rider{" "}
          </h4>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          fill="rgb(170, 84, 250)"
          class="bi bi-bicycle"
          viewBox="0 0 16 16"
          className="flex justify-center items-center"
        >
          <path d="M4 4.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1v.5h4.14l.386-1.158A.5.5 0 0 1 11 4h1a.5.5 0 0 1 0 1h-.64l-.311.935.807 1.29a3 3 0 1 1-.848.53l-.508-.812-2.076 3.322A.5.5 0 0 1 8 10.5H5.959a3 3 0 1 1-1.815-3.274L5 5.856V5h-.5a.5.5 0 0 1-.5-.5zm1.5 2.443-.508.814c.5.444.85 1.054.967 1.743h1.139L5.5 6.943zM8 9.057 9.598 6.5H6.402L8 9.057zM4.937 9.5a1.997 1.997 0 0 0-.487-.877l-.548.877h1.035zM3.603 8.092A2 2 0 1 0 4.937 10.5H3a.5.5 0 0 1-.424-.765l1.027-1.643zm7.947.53a2 2 0 1 0 .848-.53l1.026 1.643a.5.5 0 1 1-.848.53L11.55 8.623z" />
        </svg>
        </div>
      </div>

      <div className="mainbody flex justify-between ">
        <div className=" ">
          <h3 className=" text-purple-600 ml-[30px]"> Turn North</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            fill="rgb(170, 84, 250)"
            class="bi bi-bicycle"
            viewBox="0 0 16 16"
            className = "ml-[50px]"
            onClick={generateNorthDistance}
          >
            <path d="M4 4.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1v.5h4.14l.386-1.158A.5.5 0 0 1 11 4h1a.5.5 0 0 1 0 1h-.64l-.311.935.807 1.29a3 3 0 1 1-.848.53l-.508-.812-2.076 3.322A.5.5 0 0 1 8 10.5H5.959a3 3 0 1 1-1.815-3.274L5 5.856V5h-.5a.5.5 0 0 1-.5-.5zm1.5 2.443-.508.814c.5.444.85 1.054.967 1.743h1.139L5.5 6.943zM8 9.057 9.598 6.5H6.402L8 9.057zM4.937 9.5a1.997 1.997 0 0 0-.487-.877l-.548.877h1.035zM3.603 8.092A2 2 0 1 0 4.937 10.5H3a.5.5 0 0 1-.424-.765l1.027-1.643zm7.947.53a2 2 0 1 0 .848-.53l1.026 1.643a.5.5 0 1 1-.848.53L11.55 8.623z" />
          </svg>
          <p className="pr-[30px] pl-[30px] p-[5px] bg-[#9333EA] text-[white] rounded ml-[10px]"  >
            {northDistance} kms north
          </p>
        </div>
        <div>
          <h3 className="text-purple-600 ml-[30px]">Turn Left</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="rgb(170, 84, 250)"
            class="bi bi-arrow-90deg-left"
            viewBox="0 0 16 16"
            className="ml-[50px]"
            onClick={generateLeftDistance}
          >
            <path
              fill-rule="evenodd"
              d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4z"
            />
          </svg>
          <p className="pr-[30px] pl-[30px] p-[5px] bg-[#9333EA] text-[white] rounded" id="kms1">
            {leftDistance} kms left
          </p>
        </div>
        <div className="three">
          <h3 className="text-purple-600 ml-[30px]">Turn Right</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="rgb(170, 84, 250)"
            class="bi bi-arrow-90deg-right"
            viewBox="0 0 16 16"
            className="ml-[50px]"
            onClick={generateRightDistance}
          >
            <path
              fill-rule="evenodd"
              d="M14.854 4.854a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 4H3.5A2.5 2.5 0 0 0 1 6.5v8a.5.5 0 0 0 1 0v-8A1.5 1.5 0 0 1 3.5 5h9.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4z"
            />
          </svg>
          <p className="pr-[30px] pl-[30px] p-[5px] bg-[#9333EA] text-[white] rounded mr-[50px]" id="right">
            {rightDistance} kms Right
          </p>
        </div>
      </div>
      <div className="maindiv flex justify-between mt-[20px]">
        <div>
          <div className=" mt-[10px] div1 flex ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="green"
              class="bi bi-check2-square"
              viewBox="0 0 16 16"
              className="bi bi-check2-square text-green-500"
            >
              <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z" />
              <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
            </svg>
            <h4>Get early morning at 6 am</h4>
            <button className="bg-[red]">Delete</button>
          </div>

          <div className=" mt-[10px] flex" >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="green"
              class="bi bi-check2-square"
              viewBox="0 0 16 16"
              className="yes"
            >
              <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z" />
              <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
            </svg>
            <h4>take your energy drink</h4>
            <button className="bg-[red] redchanges3">Delete</button>
          </div>
          <div className=" mt-[10px] flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="green"
              class="bi bi-check2-square"
              viewBox="0 0 16 16"
              className="yes"
            >
              <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z" />
              <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
            </svg>
            <h4>Head towards north</h4>
            <button className="bg-[red] redchanges1">Delete</button>
          </div>
          <div className=" mt-[10px] flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="green"
              class="bi bi-check2-square"
              viewBox="0 0 16 16"
              className="yes"
            >
              <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z" />
              <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
            </svg>
            <h4>start the ride</h4>
            <button className="bg-[red] redchanges2">Delete</button>
          </div>
          <div className=" mt-[10px] flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="green"
              class="bi bi-check2-square"
              viewBox="0 0 16 16"
              className="yes"
            >
              <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z" />
              <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
            </svg>
            <h4>reach the destination</h4>
            <button className="bg-[red] redchanges">Delete</button>
          </div>
        </div>
        <div>
          <h1 className="text-purple-600 ml-[30px] text-xl font-bold" onClick={calculateTotalDistance}>
            Total
          </h1>
          <h2 className="pr-[30px] pl-[30px] p-[5px] bg-[#9333EA] text-[white] rounded mr-[50px]" id="total">
            {" "}
            {TotalDistance} kms
          </h2>
        </div>
        <div className="main2">
          <div className=" mt-[10px] div2 flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="green"
              class="bi bi-check2-square"
              viewBox="0 0 16 16"
              className="yes"
            >
              <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z" />
              <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
            </svg>
            <h4>take rest at noon </h4>
            <button className="bg-[red] redchange">Delete</button>
          </div>
          <div className=" mt-[10px] flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="green"
              class="bi bi-check2-square"
              viewBox="0 0 16 16"
              className="yes"
            >
              <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z" />
              <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
            </svg>
            <h4>take your meal at 1 pm</h4>
            <button className="bg-[red] redchange1">Delete</button>
          </div>
          <div className=" mt-[10px] flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="green"
              class="bi bi-check2-square"
              viewBox="0 0 16 16"
              className="yes"
            >
              <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z" />
              <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
            </svg>
            <h4>Come back at 3pm</h4>
            <button className="bg-[red] redchange2">Delete</button>
          </div>
          <div className=" mt-[10px] flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="green"
              class="bi bi-check2-square"
              viewBox="0 0 16 16"
              className="yes"
            >
              <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z" />
              <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
            </svg>
            
            <h4>Take rest for one day</h4>
            <button className="bg-[red] redchange3">Delete</button>
          </div>
          <div className=" mt-[10px] flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="green"
              class="bi bi-check2-square"
              viewBox="0 0 16 16"
              className="yes"
            >
              <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z" />
              <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
            </svg>
            <h4>continue daily routine</h4>
            <button className="bg-[red] redchange3">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
