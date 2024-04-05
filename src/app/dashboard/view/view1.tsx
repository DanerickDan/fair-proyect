import { FaRegStar,FaRegBell,FaCommentDots,FaSuitcase   } from "react-icons/fa";
import styles from '../style.module.css';
export default function View1Page(){
    const post = [
        {id:1, title:'trabajo de atrcador', detalle:'Nesecito algien que sepa robar y que sea negro', fecha:'10-02-2024', perfil:'/perfil.jpg', fotos:'trab1.jpg' },
        {id:2, title:'trabajo de atrcador', detalle:'Nesecito algien que sepa robar y que sea negro', fecha:'10-02-2024', perfil:'/perfil.jpg', fotos:'' },
        {id:3, title:'trabajo de atrcador', detalle:'Nesecito algien que sepa robar y que sea negro', fecha:'10-02-2024', perfil:'/perfil.jpg', fotos:'trab1.jpg' },
        {id:4, title:'trabajo de atrcador', detalle:'Nesecito algien que sepa robar y que sea negro', fecha:'10-02-2024', perfil:'/perfil.jpg', fotos:'trab1.jpg' },
        {id:4, title:'trabajo de atrcador', detalle:'Nesecito algien que sepa robar y que sea negro', fecha:'10-02-2024', perfil:'/perfil.jpg', fotos:'trab1.jpg' },
        {id:4, title:'trabajo de atrcador', detalle:'Nesecito algien que sepa robar y que sea negro', fecha:'10-02-2024', perfil:'/perfil.jpg', fotos:'trab1.jpg' },
        {id:4, title:'trabajo de atrcador', detalle:'Nesecito algien que sepa robar y que sea negro', fecha:'10-02-2024', perfil:'/perfil.jpg', fotos:'trab1.jpg' },
        {id:4, title:'trabajo de atrcador', detalle:'Nesecito algien que sepa robar y que sea negro', fecha:'10-02-2024', perfil:'/perfil.jpg', fotos:'trab1.jpg' },
    ];

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
            <input style={{background:'black'}} type='text' placeholder="Buscar..." className="flex h-[70px] w-[100%] mb-[5%] bg-black  text-white grow items-center justify-center gap-6 rounded-[15px] bg-gray-50 p-3 text-[25px] font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:p-5 md:px-3"/>

        
            <div className={`flex flex-wrap ${styles.container}`}>
                {post.map((post,index) => (
                    <div  className={`w-full sm:w-1/1 lg:w-1/2 px-4 ${styles.row}`}>
                        {/* {trabL = trabL + 1}
                        {trabL === 1 ?  <div className='flex'/> : ""} */}
                            <div style={{background:'black'}}  className={styles.item}>
                                <div className="flex justify-between">
                                    <img 
                                        src={post.perfil} 
                                        alt="foto"
                                        width={50}
                                        height={50}
                                        className="rounded-[100px]" 
                                    />
                                    <div className="mr-[20px]">
                                        <span className="text-[12px] text-gray-400">{post.fecha}</span>
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
                                    <div className="flex"><FaSuitcase  size={30}/><span className="p-[5px]"> 22</span></div>
                                    <div className="flex"><span className="p-[5px]"> 22</span><FaCommentDots size={30}/></div>
                                </div>
                            </div>
                            
                        {/* {trabL === 2 ?  <div/> : ''}
                        {trabL = trabL === 2 ?  0 : trabL} */}

                    </div>
                ))}
            </div>
        </div>
    );
}