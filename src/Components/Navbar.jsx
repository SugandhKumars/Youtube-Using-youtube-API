import React, { useEffect, useState } from "react";
import { FaYoutube } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdMic } from "react-icons/io";
import { BiSolidVideoPlus } from "react-icons/bi";
import { IoIosNotifications } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { MdClear } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [showClear, setShowClear] = useState(false);
  const navigate = useNavigate();
  const data = async () => {
    const res = await fetch(
      `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${inputValue}`
    );
    const json = await res.json();
    setSearchData(json[1]);
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      data();
    }, 200);
    return () => {
      return clearTimeout(timer);
    };
  }, [inputValue]);

  return (
    <div className="w-full top-0 fixed">
      <div className="flex w-full md:w-full  bg-white shadow-lg pb-2 md:pb-4  pt-2 ">
        <div className="flex w-[20%]   gap-5 items-center px-4">
          <RxHamburgerMenu className=" text-3xl" />
          <Link to={"/"}>
            <p className="flex items-center font-bold gap-2 text-xl">
              <FaYoutube className="text-3xl " />
              Playtube
            </p>
          </Link>
        </div>
        <div className="flex w-[60%]   justify-center  items-center">
          <div className="flex w-[70%] ">
            <form
              className="flex w-full"
              onSubmit={(e) => {
                e.preventDefault();
                console.log(inputValue);
                setShowClear(false);
                if (inputValue.trim().length == 0) return;
                navigate(`/search/${inputValue}`);
              }}
            >
              <input
                className="w-[80%] border-[1px] border-zinc-400 border-r-0 rounded-l-full outline-none text-lg py-1 px-3"
                placeholder="Search"
                onFocus={() => {
                  setShowClear(true);
                }}
                onBlur={() => {
                  setTimeout(() => {
                    setShowClear(false);
                  }, 200);
                }}
                type="text"
                value={inputValue}
                onChange={(e) => {
                  setInputValue(e.target.value);
                }}
              />
              <div className="flex border-[1px] border-l-0 border-zinc-400 items-center w-10  justify-center ">
                <p className="  rounded-full p-1 hover:bg-zinc-200 cursor-pointer ">
                  {inputValue.trim().length > 0 && (
                    <MdClear
                      className="text-2xl font-thin hover:bg-zinc-200 rounded-full  "
                      onClick={() => {
                        setInputValue(" ");
                      }}
                    />
                  )}
                </p>
              </div>
              <button
                type="submit"
                className="border-[1px] border-l-0 border-zinc-400 bg-zinc-100 rounded-r-full py-[1px] pr-5 flex pl-4 items-center"
              >
                <IoSearchOutline className="text-2xl" />
              </button>
            </form>
          </div>
          <p className="bg-zinc-400 px-1 py-1 rounded-full">
            <IoMdMic className="text-2xl cursor-pointer  " />
          </p>
        </div>
        <div className="flex justify-evenly w-[20%]  ">
          <BiSolidVideoPlus className="text-3xl cursor-pointer" />
          <IoIosNotifications className="text-3xl cursor-pointer" />
          <FaUserCircle className="text-3xl  cursor-pointer" />
        </div>
      </div>
      {showClear && (
        <div className="absolute top-14 left-96 w-[33%] bg-white shadow-lg  rounded-lg">
          {searchData.map((search) => (
            <Link to={`/search/${inputValue}`}>
              <p
                className="hover:bg-blue-300 px-4 py-2"
                key={Math.random()}
                onClick={() => setInputValue(search)}
              >
                {search}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
