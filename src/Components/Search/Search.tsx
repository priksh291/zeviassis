import React, { useState, ChangeEvent } from 'react'
import './Search.scss';
import { CiSearch } from "react-icons/ci";
// import faker from 'faker';
import { faker } from '@faker-js/faker';
import { useNavigate } from 'react-router-dom';



const Search = () => {

  const productData = Array.from({ length: 5 }, () => ({
    name: faker.commerce.productName(),
    imageUrl: faker.image.imageUrl(130, 170, 'clothing'),
  }));

  const[input,Setinput] = useState('')
  const[showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();

  const handleClick = ()=>{
    setShowSuggestions(!showSuggestions)
  }
  

  const toggle = (e:ChangeEvent<HTMLInputElement>)=> {
    const value = e.target.value;
    Setinput(value)
  }
  const handleSearch = ()=>{
    navigate('/results');
  }
  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      navigate('/results');
    }
  };
  return (
    <div className='search'>
        <div className='home'>
            <input className='searchbox' type='name' value={input} placeholder='Search' onChange={toggle} onClick={handleClick} onKeyDown={handleEnter}/>

            <CiSearch className='searchicon' onClick={handleSearch}/>
        </div>
        <div>
          {showSuggestions && <div className={`suggestion ${showSuggestions?'show' : ''}`}>
          <p className='suggesthead'>Latest Trends</p>
          <div className='product-container'>
          {productData.map((product, index) => (
          <div key={index}>
            <img className='images' src={product.imageUrl} alt={`Product ${index + 1}`} />
            <p className='productname'>{product.name}</p>
          </div>
            ))}
          </div>
            <div className='popsuggest'>
              <p>Popular suggestions</p>
              <ul className='suggested list'>
                <li>Stripped</li>
                <li>Satin Shirts</li>
                <li>Denim Jumpsuit</li>
                <li>Solid tshirts</li>
                <li>Leather dresses</li>
              </ul>
            </div>
          </div>}
            
          
            


        </div>
        
    </div>
  )
}

export default Search;
