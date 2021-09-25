import React from 'react';
import classNames from 'classnames';

const InfoButtons = (props) => {
    return (
        <>
           <button className={classNames(
               "flex items-center gap-3  border border-zomato-300 px-4 py-2 rounded-lg",
           {
               "text-white bg-zomato-300" : props.isActive,
           }
        )}> 
            {props.children}
           </button>
 
        </>
    )
}

export default InfoButtons
