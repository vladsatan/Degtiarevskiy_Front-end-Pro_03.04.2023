import React from 'react';
import "./Container.css";
import ContentBox from '../ContentBox/ContentBox';
import { useState, useEffect } from 'react';
import Popup from '../Popup/Popup';

const Container = () => {

  const [arrayOfItems, setArrayOfItems] = useState([])
  const [isReady, setIsReady] = useState(false)
  const [result,setResult] = useState(null)
  
  const comparison = (array) => {
    let max = 0
    let currentWiner;
    let repeat = 0
    for(let i = 0; i < array.length; i++) {
      if(array[i].counter > max) {
        max = array[i].counter
        currentWiner = array[i]
      }else if(max === 0){
        currentWiner = 'nobody'
      }else if(array[i].counter === max){
        repeat = repeat + 1
      }
    }

    console.log(repeat);
 
    if(repeat === array.length - 1){
      currentWiner = 'nobody'
    }


    return currentWiner
  }

  useEffect(() => {
    if(arrayOfItems.length > 0) {
      let biggestCount = comparison(arrayOfItems)
      setResult(biggestCount);
      setArrayOfItems([])
      setResult(biggestCount);
    }

  },[arrayOfItems.length,isReady]) 


    return (
        <div className='container'>
          {result? <Popup obj={result} setIsReady={setIsReady} setResult={setResult} /> 
          :
          <>
          <ContentBox arrayOfItems={arrayOfItems} setArrayOfItems={setArrayOfItems} isReady={isReady} setIsReady={setIsReady} />
          <div className='result-space'>
            <button className='result-btn' onClick={() => setIsReady(!isReady)}>Show Results</button>
          </div>
          </>
          }
          
        </div>
    );
}

export default Container;
