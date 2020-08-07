import React, { useState } from 'react';
import { CardDeck, Card } from 'react-bootstrap';
import PlantCard from '../components/PlantCard'
import CreatePlant from '../components/CreatePlant';

const deckStyle = {

}

function Plants() {

    const [modalOpen, setModalOpen] = useState<boolean>(false)

    return(
        <div>
        <button onClick={() => setModalOpen(true)}>Plants </button>
        <CreatePlant modalOpen={modalOpen} handleHide={setModalOpen} />
        <CardDeck style = {{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
            <PlantCard imageSource=".jpg" text="test"></PlantCard>
            <PlantCard imageSource="" text="test2"></PlantCard>
            <PlantCard imageSource="" text="test3"></PlantCard>
            <PlantCard imageSource="" text="test3"></PlantCard>
        </CardDeck>
        </div>
    )
}

export default Plants