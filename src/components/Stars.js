import React from 'react';

const RatingStars = (props) => {
console.log(props.rating);

  const renderStars = () => {
    const stars = [];
    let rating = Math.floor(props.rating)
    let i;
    for (i = 1; i <=rating; i++) {
        stars.push(<i class="fa-solid fa-star"></i>)
    }
    let dec_rating = props.rating-rating
    if(dec_rating>0){
        stars.push(<i class="fa-solid fa-star-half-stroke"></i>)
    }
    rating = Math.floor(5-props.rating);
    for(i=1;i<=rating;i++){
        stars.push(<i class="fa-regular fa-star"></i>);
    }  
    console.log(stars);
    return stars;
  };

  return <div>{renderStars()}</div>;
};

export default RatingStars;
