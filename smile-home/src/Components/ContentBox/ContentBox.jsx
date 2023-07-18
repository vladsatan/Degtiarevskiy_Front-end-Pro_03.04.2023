import React, { useEffect, useState } from 'react';
import "./ContentBox.css";
import { Routes, Route } from 'react-router-dom';
import List from '../List/List';
import About from '../About/About';
import DB from "../../data.js"

const ContentBox = (props) => {

    let {arrayOfItems,setArrayOfItems,isReady,setIsReady} = props;

    const [data, setData] = useState()

    useEffect(()=>{
        if(DB){
            setData(DB)
        }

    },[DB,data])
    

    return (
        <div className='ContentBox'>
            <Routes>
                <Route path='/' element ={<List title={'All Smiles'} data={data} arrayOfItems={arrayOfItems} setArrayOfItems={setArrayOfItems} isReady={isReady} setIsReady={setIsReady} />}/>
                <Route path='/saved' element ={<List title={'Saved Smiles'} />}/>
                <Route path='/add' element ={<List title={'Create a new smile'} />}/>
                <Route path='/about' element ={<About />}/>
            </Routes>
        </div>
    );
}

export default ContentBox;
