"use client";
import Img from "next/image";
import { useState, useEffect } from "react";
import { post } from "../dashboardData/post";
import ListComponent from "../components/listComponent.jsx";
import FilterModal from "../components/filterModal";
import useFetch from "../../Hooks/useFetch";
import { provinciasData, posteoTrabajoData } from "../filter/dataFilter";

export default function View1Page() {
  const [filterCriteria, setFilterCriteria] = useState("");
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    loading,
    error,
    fetchData,
  } = useFetch("http://localhost:3000/api/User", selectedFilters, searchTerm);

  const handleFilterChange = (filters) => {
    setSelectedFilters(filters);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    fetchData();
  }, [selectedFilters, searchTerm]);

  // const MyComponent = ({ stream }) => {
  //     const isStreamValid = stream !== '';

  //     return (
  //       <div>
  //         {isStreamValid && (
  //           <p>El stream es válido: {stream}</p>
  //         )}
  //         {!isStreamValid && <p>El stream está vacío.</p>}
  //       </div>
  //     );
  //   };
  // var trabL = 0;

  return (
    <div className="viewscrollbar-hide ">
      <input
        onChange={handleSearchChange}
        style={{ background: "black" }}
        type="text"
        placeholder="Buscar..."
        className="flex h-[70px] w-[100%] mb-[5%] bg-black  text-white grow items-center justify-center gap-6 rounded-[15px] bg-gray-50 p-3 text-[25px] font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:p-5 md:px-3"
      />

      {/* Modal */}
      {/* Botón para abrir el modal */}
      <button onClick={handleOpenModal}>Abrir Modal</button>

      {/* Modal */}
      <FilterModal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        filters={[
          {
            label: "Filtrar por Locación",
            options: provinciasData.map((provincia) => provincia.nombre),
          },
          {
            label: "Filtrar tiempo trabajo posteado",
            options: posteoTrabajoData,
          },
        ]}
        onFilterChange={handleFilterChange}
      />

      {loading ? (
        <div>Cargando...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <ListComponent data={fetchData} loading={loading} error={error} />
      )}
    </div>
  );
}

/*

  {post.map((post) => {
        // TODO: Agregar el key del iterador, cuando usamos map para renderizar componentes debemos darle
        // TODO: un diferenciador a cada componente que se renderiza.
        return (
          <div className="flex" key={post.id}>
            <div
              style={{ background: "black" }}
              className="w-[100%]  mb-[5%] mr-[5%] pt-[10px] pl-[3%] bg-black  text-white grow items-center rounded-[15px] bg-gray-50 text-md font-medium"
            >
              <div className="flex justify-between">
                <Img
                  src={post.perfil}
                  alt="foto"
                  width={50}
                  height={50}
                  className="rounded-[100px]"
                />
                <div className="mr-[20px]">
                  <span className="text-[12px] text-gray-400">
                    {post.fecha}
                  </span>
                </div>
              </div>
              <div>
                <p className="pt-[10px]">{post.title}</p>
              </div>
              <div>
                <p className="pt-[10px] pb-[10px] text-[15px] text-gray-400">
                  {post.detalle}
                </p>
              </div>
              <div className="flex justify-between mr-[20px] h-[40px]">
                <FaSuitcase size={30} />
                <FaCommentDots size={30} />
              </div>
            </div>

            <div
              style={{ background: "black" }}
              className="w-[100%]  mb-[5%]  pt-[10px] pl-[3%] bg-black  text-white grow items-center rounded-[15px] bg-gray-50 text-md font-medium"
            >
              <div className="flex justify-between">
                <Img
                  src={post.perfil}
                  alt="foto"
                  width={50}
                  height={50}
                  className="rounded-[100px]"
                />
                <div className="mr-[20px]">
                  <span className="text-[12px] text-gray-400">
                    {post.fecha}
                  </span>
                </div>
              </div>
              <div>
                <p className="pt-[10px]">{post.title}</p>
              </div>
              <div>
                <p className="pt-[10px] pb-[10px] text-[15px] text-gray-400">
                  {post.detalle}
                </p>
              </div>
              <div className="flex justify-between mr-[20px] h-[40px]">
                <FaSuitcase size={30} />
                <FaCommentDots size={30} />
              </div>
            </div>
          </div>
        );
      })}

*/
