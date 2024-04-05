import style from '../style.module.css';
import { FaRegStar,FaRegBell,FaCommentDots,FaSuitcase   } from "react-icons/fa";
import Link from 'next/link';

const links = [
    { name: 'Pedro tavares', foto: '/perfil.jpg'},
    { name: 'Pedro tavares', foto: '/perfil.jpg'},
    { name: 'Pedro tavares', foto: '/perfil.jpg'},
    { name: 'Pedro tavares', foto: '/perfil.jpg'},
  ];
export default function View2Page(){
    return (
        <div>
            <div style={{background:'black'}} className="flex h-[70px] w-[100%] bg-black grow items-center justify-center gap-6 rounded-[15px] bg-gray-50 p-3 text-md font-medium">
                <FaRegStar size={40}/>
                <FaRegBell size={30}/>
                <img 
                    src='/perfil.jpg'
                    alt="foto"
                    width={40}
                    height={40}
                    className="rounded-[100px]" 
                />
            </div>
            {links.map((link) => {
                return (
                    <Link
                    key={link.name}
                    href=''
                    className={style.chats}
                  >
                     <img
                            src={link.foto}
                            alt="foto"
                            width={40}
                            height={40}
                            className="rounded-[100px]" 
                        />
                        <p className='ml-[10px]'>{link.name}</p>
                        <FaCommentDots size={30} className="ml-[20%]"/>
                  </Link>
                )
            })}
            <div style={{background:'black'}} className="w-[100%]  mb-[5%] mt-[20px] pt-[10px] pl-[3%] bg-black  text-white grow items-center rounded-[15px] bg-gray-50 text-md font-medium">
                <div className="flex items-center justify-center">Recluta Destacado</div>
                <div className="flex items-center justify-center">
                    <img
                        src='/culo.jpeg'
                        alt="foto"
                        width={220}
                        height={220}
                        className=" rounded-[10px]" 
                    />
                </div>
                    <div className="flex justify-between m-[20px] h-[40px]">
                        <FaSuitcase  size={30}/>
                        <FaCommentDots size={30}/>
                    </div>
            </div>
        </div>
    );
}