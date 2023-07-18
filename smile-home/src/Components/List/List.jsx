import React from 'react';
import "./List.css";
import Smiles from '../Smiles/Smiles';

const List = (props) => {

    let {title, data,arrayOfItems,setArrayOfItems,isReady,setIsReady} = props

    return (
        <div>
           <h1>{title}</h1>
           <div className='smiles-container'>
           {data? data.map(e =>{ return <Smiles smileObj={e} arrayOfItems={arrayOfItems} setArrayOfItems={setArrayOfItems} isReady={isReady} setIsReady={setIsReady} key={e.title} />}) : <p>Coming soon...</p>}
           </div>
        </div>
    );
}

export default List;
