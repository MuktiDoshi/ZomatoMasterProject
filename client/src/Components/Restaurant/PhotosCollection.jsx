import React from 'react';

const PhotosCollection = (props) => {
 
    return (
        <>

          <div 
          className="w-32 h-32 md:w-64 md:h-64 flex flex-col"
          onClick={props.openViewer}
          >
           <div className="w-full h-full overflow-hidden rounded-lg">
               <img 
               src={props.image} 
               alt="menu"
               className="w-full h-full transform transition duration-400 rounded-lg hover:scale-110"
               />
            </div> 
           </div>
        </>
    )
}

export default PhotosCollection;
