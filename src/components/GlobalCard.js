import React from 'react'
import Card from './Card'
import Card2 from './Card2'
import Card3 from './Card3'

const GlobalCard = (props) => {
    // console.log(props.title);
    return (
        <>
            {
                (props.id === '1') ? <Card
                    identification={props.identification}
                    imageURL={props.imageURL}
                    title={props.title}
                    description={props.description}
                    builder={props.builder}
                    location={props.location}
                    price={props.price}
                    rating={props.rating}
                    builder_rating={props.builder_rating} /> : (props.id === '2') ? <Card2
                        identification={props.identification}
                        imageURL={props.imageURL}
                        title={props.title}
                        description={props.description}
                        builder={props.builder}
                        location={props.location}
                        price={props.price}
                        rating={props.rating}
                        builder_rating={props.builder_rating} /> : <Card3
                    identification={props.identification}
                    imageURL={props.imageURL}
                    title={props.title}
                    description={props.description}
                    builder={props.builder}
                    location={props.location}
                    price={props.price}
                    rating={props.rating}
                    builder_rating={props.builder_rating} />
            }
        </>
    )
}

export default GlobalCard
