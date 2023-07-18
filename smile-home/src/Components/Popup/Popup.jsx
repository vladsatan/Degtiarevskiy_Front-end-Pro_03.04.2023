import React from 'react';
import "./Popup.css";
import like from "../../img/like.png";
import nothing from "../../img/nothing.png";

const Popup = (props) => {

    let { obj, setIsReady, setResult } = props;

    return (
        <div className='popup'>
        {obj ==='nobody'?
            <>
                <h1 className='noth-h1'>Oops looks like a draw</h1>
                <img className='noth-img' src={nothing} />
                <button onClick={() => {
                setIsReady(false)
                setResult(null)
            }}>Greate!</button>
            </> 
             : 
             <> <h1>This week's most popular emoji:</h1>
            <img src={obj.item.img} />
            <h3>{obj.item.title}</h3>
            <div className='like-box'>
                <img src={like} /> {obj.counter}
            </div>
            <button onClick={() => {
                setIsReady(false)
                setResult(null)
            }}>Greate!</button></>}
            
        </div>
    );
}

export default Popup;
