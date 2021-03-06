import React, { Component, Fragment } from "react";
import FoodPart from "./FoodPart";
import ShowMore from "react-show-more";
import "./Card.css";

class Card extends Component {
  state = {
    showMore: false
  };

  // Toggle recipe part of card
  toggleCard = () => {
    this.setState({ showMore: !this.state.showMore });
  };

  render() {
    const { beer, recipeToMatch, searchFor } = this.props;
    const { showMore } = this.state;
    // Prepare beerinfo to send to db. Is passed to recipe component to be combined with recipe info
    const beerInfo = {
      beerName: beer.name,
      beerDescription: beer.description,
      beerImage: beer.image_url
    };
    return (
      <div className="card">
        {/* Beer-card */}
        <div className="beer-card">
          <div className="beer-card-info">
            <div className="beer-card-title" role="alert">
              <div className="beer-name">
                {beer.name} - {beer.abv}%
              </div>
            </div>
            <div className="beer-card-description">
              <ShowMore
                lines={3}
                more="Show more"
                less="Show less"
                anchorClass="showmorebutton"
              >
                {beer.description}
              </ShowMore>
            </div>
          </div>
          <div className="beer-card-img">
            <img src={beer.image_url} alt="beer img" />
          </div>
        </div>

        <div className="food-card-title">
          <span className="badge badge-pill badge-dark">Food to match</span>
          <div className="food-name">{recipeToMatch}</div>
        </div>

        {/* Food-card */}

        <div className="food-card-intro">
          {/* <div className="food-card-intro-header">
            <span className="badge badge-success">Make this food</span>
          </div> */}
          <div className="food-card-intro-text">
            Search for the best matching recipe.
            <br/>Login to save your favorite match!
          </div>
        </div>

        {!showMore ? (
          <button
            className="btn btn-outline-dark btn-sm"
            onClick={this.toggleCard}
          >
            Find recipe
          </button>
        ) : (
          <Fragment>
            <FoodPart
              beerInfo={beerInfo}
              showMore={showMore}
              searchFor={searchFor}
              recipeToMatch={recipeToMatch}
            />
            <button
              className="btn btn-outline-dark btn-sm"
              onClick={this.toggleCard}
            >
              Hide Recipe
            </button>
          </Fragment>
        )}
      </div>
    );
  }
}

export default Card;
