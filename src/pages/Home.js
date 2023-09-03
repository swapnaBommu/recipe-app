import { useState } from "react";
import API from '../utils';
import "../styles/home.module.css";
import Card from '../components/Card';
function Home() {
    const [searchText,setSearchText] = useState('');
    const [recipeList,setRecipeList] = useState([]);
    
    const app = API;

    const handleSubmit = (e) =>{
        e.preventDefault();
        fetch(`https://api.edamam.com/search?q=${searchText}&app_id=${app.APP_ID}&app_key=${app.APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`)
        .then(
            response => response.json()
        )
        .then(
            (recipe) => {
                setRecipeList(recipe.hits);
                setSearchText('');
            }
        )
    }

  return (
   <div className="home">
    <h1>Recipe Search</h1>
    <form onSubmit={handleSubmit} className="search-form">
        <input className="form-input"
            type="text" 
            placeholder="search a recipe"
            value={searchText} 
            onChange={(e) => setSearchText(e.target.value)}
        />
        <br/>
        <button type="submit" className="searcn-btn">Search</button>
    </form>
    <div className="recipe-list">
       
    {
  recipeList.map(
    (recipe,index) => (
    <Card 
    key={index}
    title ={recipe.recipe.label} 
    image = {recipe.recipe.image}
    calories ={recipe.recipe.calories}
    ingredients ={recipe.recipe.ingredients}
    />
    )
  )
}
    </div>
   </div>
  );
}

export default Home;
