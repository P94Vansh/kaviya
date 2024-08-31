import React from "react";

const RiceMSPTable = () => {
  const mspData = [
    { year: "2021-22", msp: "₹1,940" },
    { year: "2020-21", msp: "₹1,868" },
    { year: "2019-20", msp: "₹1,815" },
    { year: "2018-19", msp: "₹1,750" },
    { year: "2017-18", msp: "₹1,550" },
  ];

  return (
    <>
        <form className="max-w-md mx-auto mt-10">
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-red-50 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="red" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>

                    </div>
                    <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-red-900 border border-red-300 rounded-lg bg-red-50 focus:ring-red-500 focus:border-red-500 dark:bg-red-700 dark:border-red-600 dark:placeholder-white dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="Search Mockups, Logos..." required />
                    <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Search</button>
                </div>
            </form>
    <div className="min-h-screen  flex items-center justify-center ">
      <div className="w-full max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <h2 className="text-center text-xl font-bold text-white bg-[#8b4513] p-4">
          Minimum Support Price (MSP) for Rice
        </h2>
        <table className="w-full text-left  " style={{border: "2px solid #ddd", boxShadow: "0 0 5px #aaa", overflow:"hidden"}}>
          <thead>
            <tr className="bg-[#d2b48c]">
              <th className="p-4">Year</th>
              <th className="p-4">MSP (₹)</th>
            </tr>
          </thead>
          <tbody>
            {mspData.map((record, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-[#f5f5dc]" : "bg-[#fffaf0]"}
              >
                <td className="p-4 border-b border-[#8b4513]">{record.year}</td>
                <td className="p-4 border-b border-[#8b4513]">{record.msp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default RiceMSPTable;