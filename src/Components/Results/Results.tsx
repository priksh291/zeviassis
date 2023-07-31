import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { faker } from '@faker-js/faker';
import Star from './assets/Star.png';
import filledheart from './assets/filledheart.png';
import unfilledheart from './assets/unfilledheart.png';
import StarRating from './assets/Star-rating';

import './Results.scss'

const productData = Array.from({ length: 8 }, () => ({
  name: faker.commerce.productName(),
  imageUrl: faker.image.imageUrl(239, 325, 'clothing'),
  
}));

const getRandomNumber=(min:number,max:number):number =>{
  return Math.floor(Math.random()* (max-min)+ min);
}

const Results = () => {

  // const[isExpanded, setIsExpanded] = useState(true);
  // const handleToggle = ()=>{
  //   setIsExpanded(!isExpanded)
  // }
  const [favorites,setFavorites] = useState(new Array(productData.length).fill(false));
  const toggleFavorite =(index:number)=>{
    const updatedFavorites = [...favorites];
    updatedFavorites[index] = !updatedFavorites[index];
    setFavorites(updatedFavorites);

  }

  const [showViewProduct, setShowViewProduct] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setShowViewProduct(index);
  };

  const handleMouseLeave = () => {
    setShowViewProduct(null);
  };

  //accordian starts
  const [expandedItem, setExpandedItem] = useState<number[]>([]);

  const accordionItems = [
    {
      title: 'BRAND',
      content: (
        <div>
          <input type="checkbox" id="checkbox1" />
          <label htmlFor="checkbox1">Mango</label>
          <br />
          <input type="checkbox" id="checkbox2" />
          <label htmlFor="checkbox2">H&M</label>
        </div>
      ),
    },
    {
      title: 'PRICE RANGE',
      content: (
        <div>
          <input type="checkbox" id="checkbox3" />
          <label htmlFor="checkbox3">Under 500</label>
          <br />
          <input type="checkbox" id="checkbox4" />
          <label htmlFor="checkbox4">1000 to 3000</label>
        </div>
      ),
    },
    {
      title: 'RATINGS',
      content: (
        <div>
          <input type="checkbox" id="checkbox3" />
          <label htmlFor="checkbox3"><StarRating onRatingChange={(rating: number) => console.log(`Selected rating: ${rating}`)} /></label>
          <br/>
          <input type="checkbox" id="checkbox4" />
          <label htmlFor="checkbox4"><StarRating onRatingChange={(rating: number) => console.log(`Selected rating: ${rating}`)} /></label>
          <br/>
          <input type="checkbox" id="checkbox5" />
          <label htmlFor="checkbox5"><StarRating onRatingChange={(rating: number) => console.log(`Selected rating: ${rating}`)} /></label>
          <br/>
          <input type="checkbox" id="checkbox4" />
          <label htmlFor="checkbox4"><StarRating onRatingChange={(rating: number) => console.log(`Selected rating: ${rating}`)} /></label>
          <br/>
          <input type="checkbox" id="checkbox3" />
          <label htmlFor="checkbox3"><StarRating onRatingChange={(rating: number) => console.log(`Selected rating: ${rating}`)} /></label>
          
          
        </div>
      ),
    },
  ];

  const toggleAccordion = (index: number) => {
    if (expandedItem.includes(index)) {
      setExpandedItem(expandedItem.filter((item) => item !== index));
    } else {
      setExpandedItem([...expandedItem, index]);
    }
  };

  //star



  return (
    <div>
      
        <div className='result'>
              <input className='resultsearch' type='name' placeholder='Search'/>

              <CiSearch className='searchicons'/>
        </div>
        <div className='searchresult'>
          <p>Search Results</p>
          <div className="accordion">
            {accordionItems.map((item, index) => (
              <div className="accordion-item" key={index}>
                <button
                  style={{display:'flex',justifyContent:'space-between'}}
                  className={`accordion-title ${expandedItem.includes(index) ? 'expanded' : ''}`}
                  onClick={() => toggleAccordion(index)}
                >
                  {item.title}
                <IoIosArrowDown/>
                </button>
                {expandedItem.includes(index) && (
                  <div className="accordion-content" >
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* star rating */}
          

        </div>
      
      
      
      <div className='productlist'>
        <div>
          {productData.map((product, index) => (
            <div key={index} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}>
              <div style={{ position: 'relative' }}>
                <img style={{ borderRadius: 5 }} src={product.imageUrl} alt={`Product ${index + 1}`} />
                <div className='hearticon' onClick={() => toggleFavorite(index)}>
                  <img src={favorites[index] ? filledheart : unfilledheart} alt='heart' />
                </div>
                {showViewProduct === index && (
                  <div className={`viewproduct ${showViewProduct === index ? 'show' : ''}`}>View Product</div>
                )}
              </div>
              <p style={{ marginBottom: -10, fontWeight: 400, fontSize: 20, position: 'relative' }}>
                {product.name.split(' ').slice(0, 2).join(' ')}
              </p>
              <div style={{ display: 'flex', gap: 20, position: 'absolute' }}>
                <p style={{ textDecorationLine: 'line-through', color: 'rgba(0, 0, 0, 0.40)', fontSize: 20, fontWeight: 300 }}>
                  Rs{getRandomNumber(100, 999)}
                </p>
                <p style={{ color: 'blue', fontWeight: 600, fontSize: 20 }}>Rs {getRandomNumber(100, 999)}</p>
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
  );
};

export default Results;