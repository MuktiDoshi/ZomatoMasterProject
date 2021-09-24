import React from 'react'
import { IoMdArrowDropright } from "react-icons/io";

const PictureCarousalCard = () => {
    return (
        <>
            <div className="w-full h-64 px-4 overflow-hidden relative">
                <div className="w-full h-full relative">
                <img 
                src="https://b.zmtcdn.com/data/pictures/8/19885268/21813fe047ae5efc0edc13368aa78156.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25" 
                alt="food"
                className="w-full h-full object-cover transition durant-700 ease-in-out rounded-lg"
                />
                 <div 
                    className="w-full h-full absolute bottom-0 rounded-lg"
                    style={{
                        background: "linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 85%)",
                    }} />
                </div>
                <div className="absolute w-full left-8 bottom-2 bottom-0 text-white">                   
                    <h4 className="z-10">Newly Opened</h4>
                    <h6 className="z-10 flex itms-center">
                        36 places <IoMdArrowDropright/>
                    </h6>
                </div>
            </div>
        </>
    )
}

export default PictureCarousalCard;
