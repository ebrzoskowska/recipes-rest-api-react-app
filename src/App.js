import React, {useState, useEffect} from 'react';
import './styles/global.css';
// components
import Recipe from './components/recipe';



const App = () => {

  const APP_ID = '6de9e15c';
  const APP_KEY = '1328599b3e37c307527e80f62dc7bd9b';

  const [recipes, setRecipes] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState('smoothie');

  useEffect(() => {
    const getReceipes = async () => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const data = await response.json(); 
      setRecipes(data.hits)
    }
    getReceipes();
  }, [query])



  const handleInputCHange = (event) => {
    setSearchValue(event.target.value)
  }

  const handleQuery = (event) => {
    event.preventDefault();
    setQuery(searchValue);
    setSearchValue('')
  }

  return (
    <div className="App features-wrapper">
      <h1 className='features-wrapper__title'>Enter the ingredient, and magic will happen.</h1>
      <div className="feature__search-form__wrapper">
        <form onSubmit={handleQuery} className='feature__search-form'>
          <input className='feature__search-form__input' value={searchValue} type='text' placeholder="search" onChange={handleInputCHange} />
          <button className='feature__search-form__submit' type='submit'>
            <svg className='feature__search-form__icon' viewBox="0 0 24 24"><path fill="#666666" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
            </svg>
          </button>
        </form>
      </div>
      <div className="feature__recipes__wrapper">
        {recipes.map((item) =>
          <Recipe 
            key={item.id} 
            title={item.recipe.label}
            image={item.recipe.image}
            ingr={item.recipe.ingredientLines}
            calories={item.recipe.calories}
          />
        )}
      </div>
    </div>
  );
}

export default App;
