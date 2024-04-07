import { useState } from "react"
export default function NewPost(){

    const [estado,modal] = useState(false);

    function viewPost (){
        modal(!estado)
    }
    
   return(
    <>
        <div id="pop" className={` bg-white z-45 absolute  flex justify-center items-center ${estado == false?"hidden":"last:"}`}>
        <form className="border-2 rounded-2xl p-5">
            <div className="flex justify-between mb-3">
            <div>Nuevo Post</div>
            <div className="cursor-pointer font-bold" onClick={viewPost} >X</div>
            </div>
            <div className="flex justify-between mb-5 gap-5">
            <input type="text" placeholder="Titulo" className="p-3 border rounded-xl" />
            <select name="" id="" className="p-3 border rounded-xl">
                <option value="">Tipo de servicios</option>
            </select>
            </div>
            <div>
            <textarea className="w-full p-3 mb-5 border rounded-xl" name="" id="" cols="30" rows="3" placeholder="Descripcion"></textarea>
            </div>
            <div>
            <label for="doc" class=" h-32 mb-5 flex items-center justify-center p-4 gap-2 rounded-3xl border border-gray-300 border-dashed bg-gray-50 cursor-pointer">
            <img class="h-5 w-auto" src="/upload.png" alt=""/>
            <div class="space-y-2">
                <h4 class="text-base font-semibold text-gray-700">Subir Img</h4>
                {/* <span class="text-sm text-gray-500">Max 2 MO</span> */}
            </div>
            <input type="file" id="doc" name="doc" accept="png, jpg" hidden/>
        </label>
            </div>
            <div>
            <input type="number" className="p-3 border rounded-xl w-full" placeholder="$ Precio" name="" id="" />
            </div>
            <div>
            <input type="submit"  className=" w-full cursor-pointer  border-2 px-3 py-4 my-2 rounded-2xl hover:bg-transparent hover:text-black bg-black text-white font-semibold" value="Publicar Trabajo" />
            </div>
        </form>
        </div>

        <button onClick={viewPost} >DATA</button>
    </>
    
    )
}

