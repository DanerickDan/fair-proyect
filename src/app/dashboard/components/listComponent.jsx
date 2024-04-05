import React, { useState, useEffect } from "react";
import {
  FaRegStar,
  FaRegBell,
  FaCommentDots,
  FaSuitcase,
} from "react-icons/fa";
import Img from "next/image";

function ListComponent({ data, filterCriteria, selectedFilters }) {
  const {
    data: filteredData,
    loading,
    error,
  } = useFetch(
    "http://localhost:3000/api/User",
    selectedFilters,
    filterCriteria
  );

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {filteredData.map((item, index) => (
        <div key={index}>
          <div className="flex" key={post.id}>
            <div
              style={{ background: "black" }}
              className="w-[100%]  mb-[5%] mr-[5%] pt-[10px] pl-[3%] bg-black  text-white grow items-center rounded-[15px] bg-gray-50 text-md font-medium"
            >
              <div className="flex justify-between">
                <Img
                  src={item.perfil}
                  alt="foto"
                  width={50}
                  height={50}
                  className="rounded-[100px]"
                />
                <div className="mr-[20px]">
                  <span className="text-[12px] text-gray-400">
                    {item.fecha}
                  </span>
                </div>
              </div>
              <div>
                <p className="pt-[10px]">{item.title}</p>
              </div>
              <div>
                <p className="pt-[10px] pb-[10px] text-[15px] text-gray-400">
                  {item.description}
                </p>
              </div>
              <div className="flex justify-between mr-[20px] h-[40px]">
                <FaSuitcase size={30} />
                <FaCommentDots size={30} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListComponent;
