import React from "react";
import "../styles/card.module.css";

class Recipe extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isShowContent:false
    }
  }
  render(){
    const { isShowContent } = this.state;
    const { title, image, ingredients,calories } = this.props;
    const handleClick = () => {
      var { isShowContent } = this.props;
      isShowContent = true;
      this.setState({
        isShowContent
      })
      console.log('handle star',this)
    }
    const handleClick1 = () => {
      var { isShowContent } = this.props;
      isShowContent = false;
      this.setState({
        isShowContent
      })
      console.log('handle less',this)
    }
    return(
      <div className="recipe-card">
      <div className="recipe-content">
        <img src={image} alt="food-img" />
        <h1>{title}</h1>
        <h2>Calories: {calories}</h2>
        
        {
          isShowContent ? (
            <div className="ingredients">
          <h2>Ingredients</h2>
          <ol>
            {ingredients.map((ingredient) => (
              <li>{ingredient.food}</li>
            ))}
          </ol>
          <button onClick={handleClick1}>Show Less</button>
        </div>
          ) : (<button onClick={handleClick}>Show More</button>)  
        }
      </div>
    </div>
    );
  }
}

export default Recipe;