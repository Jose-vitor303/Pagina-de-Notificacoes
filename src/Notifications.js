import React, { useState } from 'react';
import Datas from './Data.js'

const Notifications = ({props}) =>{
    
    const [checkStyle, setCheckStyle] = useState(Datas)

    

    const changeStyle = (id) =>{

        const newStyle = checkStyle.map((item)=>{

            if(item.id === id){

                const updateItem = {
                    ...item,
                    check: !item.check,
                };

           
                updateItem.check ? props.setNotification(props.notification + 1) : props.setNotification(props.notification - 1)
            

                return updateItem;
            }
            return item;

        })

        setCheckStyle(newStyle);

    }


    return <div>

    {checkStyle.map((data)=>{

    const {id, name, action, special, img, chessimg , time, check, message} = data  

    return( 
        <section key={id}>
            <section key={id} className= {check ? "check-bg flex" : "flex"} onClick={()=> changeStyle(id)}>

                <img src={img} alt='profile'></img>

                <div style={{display:'flex', flexDirection: 'column'}}>
                    <span className='icon-red'> <a href='#' className='color-profile'>{name}</a> {action} <a href='#' className={`${id === 2 ? 'color-blue' : id === 6 ? 'color-blue' : 'color-gray'}`}>{special}</a></span>
                    <span className='time-spend'>{time}</span>

                    {id === 3 && (
                      <article className='private-message'>{message}</article>
                    )}

                </div>

                {id === 4 && (

                    <img className='chess-img' src={chessimg} alt = "chess"></img>

                )}

              
            </section>
        </section>
    )

    })}

    </div>

}


export default Notifications;

