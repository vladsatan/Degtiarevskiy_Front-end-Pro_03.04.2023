import React from 'react';
import "./Smiles.css";
import likeLogo from "../../img/like.png";
import saveLogo from "../../img/save.png";
import { useState, useEffect } from 'react';

const Smiles = (props) => {

    let { smileObj, arrayOfItems, setArrayOfItems, isReady, setIsReady } = props;

    const [count, setCount] = useState(null)
    const [isSave, setIsSave] = useState(false)

    const handlerCount = (count) => {
        if(count === null){
            setCount(1)
        }
        setCount(count + 1);
    }

    const handlerChengeSave = () => {
        setIsSave(!isSave);
    }

    useEffect(()=>{
        if(isReady){
            let array = arrayOfItems
            array.push({ counter: count, item: smileObj})
            setArrayOfItems(array)
        }
    },[isReady])

    return (
        <div className='smile'>
           <img className='smile-img' src={smileObj.img} alt='emoji' />
            <h3>{smileObj.title}</h3>
            <div className='reaction-box'>
            <button className='like' onClick={()=> handlerCount(count)}>
                    <p>{count}</p>
                    <img src={likeLogo} />
                </button>
                
                <button className={isSave? 'save-active': 'save'} onClick={()=> handlerChengeSave()}>
                    <img src={saveLogo} />
                </button>
            </div>
        </div>
    );
}

export default Smiles;
