import React from "react";
import Red from "../../components/Red/Red";
import Blue from "../../components/Blue/Blue";
import Green from "../../components/Green/Green";
const handleClick = () =>{
}

const Home = () =>{
    return (
      <div>
        <div>
          <div className="w-full bg-[#002060] h-[500px]">
            <div className="">
              <div class="flex space-x-2 justify-between">
                <div>
                  <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    class="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mt-[20px]"
                    onClick={handleClick}
                  >
                    Readmore
                  </button>
                </div>
                <div>
                  <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mt-[20px]"
                    onClick={handleClick}
                  >
                    Readmore
                  </button>
                </div>
                <div>
                  <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    class="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mt-[20px]"
                    onClick={handleClick}
                  >
                    Readmore
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Red/>
        <Blue/>
        <Green/>
      </div>
    );
};
export default Home