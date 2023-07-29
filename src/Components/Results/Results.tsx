import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { faker } from '@faker-js/faker';
import Star from './assets/Star.png';
import filledheart from './assets/filledheart.png';
import unfilledheart from './assets/unfilledheart.png';

import './Results.css'

const productData = Array.from({ length: 8 }, () => ({
  name: faker.commerce.productName(),
  imageUrl: faker.image.imageUrl(239, 325, 'clothing'),
  
}));

function getRandomNumber(min:number,max:number):number{
  return Math.floor(Math.random()* (max-min)+ min);
}

const Results = () => {

  const[isExpanded, setIsExpanded] = useState(true);
  const handleToggle = ()=>{
    setIsExpanded(!isExpanded)
  }
  const [favorites,setFavorites] = useState(new Array(productData.length).fill(false));
  const toggleFavorite =(index:number)=>{
    const updatedFavorites = [...favorites];
    updatedFavorites[index] = !updatedFavorites[index];
    setFavorites(updatedFavorites);
  }
  return (
    <div>
      <div>
      <div className='result'>
            <input className='resultsearch' type='name' placeholder='Search'/>

            <CiSearch className='searchicons'/>
      </div>
      <div className='searchresult'>
        <p>Search Results</p>
        <div style={{position:'relative'}}>
          <div className='brandname' onClick={handleToggle}>
            <p>BRAND</p>
            <IoIosArrowDown className={`downarrow ${isExpanded ? 'expanded' : ''}`}/>
          </div>
          {isExpanded && (
            <div className='brand-content'>
              <label className='label'>
                <input className='checkbox' type='checkbox'/>
                <div>H&M</div>
              </label>
              <label className='label'>
                <input className='checkbox' type='checkbox'/>
                <div>Mango</div>
              </label>
              
            </div>
          )}
          
        </div>
        </div>
      </div>
      
      
      <div className='productlist'>
       
          <div>
            {productData.map((product, index) => (
            <div key={index}>
              <div style={{position:'relative'}}>
              <img style={{borderRadius: 5}} src={product.imageUrl} alt={`Product ${index + 1}`} />
              <div className='hearticon' onClick={()=>toggleFavorite(index)}><img src={favorites[index] ? filledheart: unfilledheart} alt='heart'/></div>

              </div>
              <p style={{marginBottom:-10,fontWeight:400, fontSize:20, position:'relative'}}>{product.name.split(' ').slice(0,2).join(' ')}</p>
              <div style={{display:'flex',gap: 20,position:'absolute',}}>
              <p style={{textDecorationLine: 'line-through', color:'rgba(0, 0, 0, 0.40)', fontSize:20, fontWeight:300}}>Rs{getRandomNumber(100,999)}</p>
              <p style={{color: 'blue', fontWeight:600, fontSize:20,}}>Rs {getRandomNumber(100,999)}</p>

              </div>
              <div className='star'>
                <img src={Star} alt='/' />
                <p>(210)</p>
              </div>
            </div>
              ))}
          </div>
          
      </div>
    </div>
  )
}

export default Results