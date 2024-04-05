import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { SearchCategory } from "./Redux/CategorySlice";

const Categories = () => {
  const data = [
    "All",
    "Javascript",
    "Music",
    "Mixes",
    "Data Structures",
    "Bollywood Music",
    "Laptop",
    "Mobile Phone",
    "Technology",
    "T-Series",
    "ReactJs",
    // "React Navtive",
    // "Android",
    // "Golang",
    // "Java",
    // "Kotlin",
    // "Web Development",
  ];

  const disptch = useDispatch();
  return (
    <div className=" md:w-full md:h-12 py-2 flex  ml-44 md:ml-52 ">
      {data?.map((d, i) => (
        <button
          key={i}
          onClick={() => {
            disptch(SearchCategory(d));
            // console.log(d);
          }}
          className={`bg-zinc-300 rounded-full px-2 py-1 mx-2 shrink-0 items-center flex `}
        >
          {d}
        </button>
      ))}
    </div>
  );
};

export default Categories;
