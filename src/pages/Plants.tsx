import React from 'react';
import { CardDeck, Card } from 'react-bootstrap';
import PlantCard from '../components/PlantCard'

const deckStyle = {

}

function Plants() {
    return(
        <CardDeck style = {{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
            <PlantCard imageSource=".jpg" text="test"></PlantCard>
            <PlantCard imageSource="" text="test2"></PlantCard>
            <PlantCard imageSource="" text="test3"></PlantCard>
            <PlantCard imageSource="" text="test3"></PlantCard>
        </CardDeck>
    )
}

export default Plants