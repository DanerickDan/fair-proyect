"use client"
import { useState } from "react";
import { useFormik } from 'formik';

export default function login() {

  const [newUser, setRegister] = useState(false);

  function registrarse(event) {
    setRegister(!newUser)
  }

  const formik = useFormik({ 
    initialValues: {
      usuario:'',
      password:'',
      correo:''
    },onSubmit: value => {
      alert(JSON.stringify(value,null,2))
    } })

  return (
    <div className="flex items-center ">

      <div className="basis-2/3 p-16  ">
        <div className=" mx-auto mb-4">
          <div className="text-center mb-2">
            <h1 className="text-4xl font-bold">Bienvenido</h1>
            <span className="text-xs">Bienvenido de vuelta. Por favor, ingresa tus detalles</span>
            <div className="bg-slate-200 w-2/3 mx-auto px-0.5 py-0.5  rounded-2xl flex gap-4 place-content-between ">
              <button className={"px-4 py-4 rounded-2xl " + (newUser == false ? "bg-white w-full" : "")} onClick={registrarse} >Iniciar</button>
              <button className={"px-4 py-4 rounded-2xl " + (newUser == true ? "bg-white w-full" : "")} onClick={registrarse}  >Registrar</button>
            </div>
          </div>
          <form onSubmit={formik.handleSubmit} className="flex items-center flex-col" method="POST">
            <input 
              className="w-2/3 border-2 px-3 py-4 my-2 rounded-xl " 
              type="text"
              id ="usuario" 
              name="usuario"
              onChange={formik.handleChange}
              value={formik.values.usuario}
              placeholder="Usuario" />
            <input 
              className="w-2/3 border-2 px-3 py-4 my-2 rounded-xl" 
              type="password"
              id="contraseña" 
              placeholder="Contraseña" 
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password} />
            <input 
              className={"w-2/3 border-2 px-3 py-4 my-2 rounded-xl" + (newUser === false ? " hidden" : "")} 
              type="email" 
              placeholder="Correo" 
              name="correo" 
              id="correo"
              onChange={formik.handleChange}
              value={formik.values.correo} />
            <input className="cursor-pointer w-2/3 border-2 px-3 py-4 my-2 rounded-xl hover:bg-transparent hover:text-black bg-black text-white font-semibold" type="submit" value="Continuar" />
          </form>
          <div className="flex items-center justify-center gap-3 ">
            <button className="hover:bg-red-500 hover:text-white w-48 rounded-xl border border-red-500 px-2 py-3 my-2 font-semibold" > Google</button>
            <button className=" hover:bg-blue-600 hover:text-white w-48 rounded-xl border border-blue-500 px-2 py-3 my-2 font-semibold" >Facebook</button>
          </div>
        </div>

        <div className="text-center ">© 2024 Empresa fair-proyect. Todos los derechos reservados</div>
      </div>
      <div className=" basis-2/4 h-full w-full ">
        <img className=" object-cover h-full w-full" src="/img_login.png" alt="" />
      </div>

    </div>
  )
}