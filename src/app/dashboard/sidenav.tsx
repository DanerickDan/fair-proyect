import Link from 'next/link';
import NavLinks from './nav-links';
import Image from 'next/image';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-black">
        <div className="flex items-center justify-center p-[10%]">
          <div className='bg-white rounded-[1000px] p-[15px] pt-[45px] pb-[45px]'>
            <Image 
              src='/logo.png'
              alt='logo'
              width={90}
              height={100}
            />
          </div>
        </div>
        <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
          <NavLinks />
          <div style={{background:'black'}} className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block" ></div>
        </div>
    </div>
  );
}
