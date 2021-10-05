import React  from 'react';

const Recipe = (props) => {

  return(
    <div className='recipe__wrapper' >
      <img  className='recipe__img'  src={props.image} alt='food-img' />
      <ul className='recipe__ingridiens-list-ul'>
      <h2 className='recipe__title' >{props.title}</h2>
        {props.ingr.map((item) => {
          return <li className='recipe__ingridiens-list-li' key={item} >{item}</li>
        })}
        <p className='recipe__calories-amount'><span className='recipe__calories-desc'>calories:</span> {props.calories.toFixed(2)}</p>
      </ul>
      
    </div>
  )
}

export default Recipe;