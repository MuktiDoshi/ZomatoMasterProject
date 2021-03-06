import React, {useState} from 'react';
import { HiMenu } from 'react-icons/hi';
import { MdClose } from 'react-icons/md';

//components
import MenuListContainer from './MenuListContainer';

const FloatMenuBtn = () => {
    const [isClicked, setIsClicked] = useState(false);
    
    const toggleMenu = () => setIsClicked((prev) => !prev);

    return (
        <>
          <div className="fixed z-30 w-8/12 flex flex-col gap-3 items-end bottom-2 right-2 md:hidden">
              {
                  isClicked && (
                    <div className="p-3 bg-white h-48 overflow-y-scroll">
                       <MenuListContainer/>
                    </div>
                  )
              }             
            <button 
            onClick={toggleMenu} 
            className="text-white flex items-center gap-2 bg-gray-800 px-4 py-3 rounded-full md:hidden">
               {isClicked ? <MdClose/> : <HiMenu/> } Menu
            </button>
          </div>          
        </>
    )
};

export default FloatMenuBtn;
