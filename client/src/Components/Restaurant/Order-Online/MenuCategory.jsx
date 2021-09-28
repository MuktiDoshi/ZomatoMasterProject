import React from 'react';
import classnames from 'classnames';

const MenuCategory = (props) => {

    return (
        <>
            <div className={classnames({
                "text-zomato-300 py-2 px-1 bg-zomato-50 border-r-4 border-zomato-400": 
                props.isActive, })}
                
                onClick={props.onClickHandler}
                >                    
                <h3 
                id={props.name} 
                onClick={props.onClickHandler}> 
                {props.name} 
                ({props.items.length})
                </h3>
            </div>
        </>
    )
}

export default MenuCategory
