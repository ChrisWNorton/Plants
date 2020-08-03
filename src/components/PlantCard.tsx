import React from 'react';
import { Card } from 'react-bootstrap';

interface cardProps {
    imageSource: string
    text: string
}

const cardStyle = {
    flex: '1 1 225px',
    minWidth: '300px',
    maxWidth: '450px',
    height: '250px',
}

function PlantCard({imageSource, text}: cardProps) {

    return(
        <Card style = {cardStyle}>
        <Card.Img variant="top" src={imageSource} />
        <Card.Body>
          <Card.Title>title</Card.Title>
          <Card.Text>
            {text}
          </Card.Text>
        </Card.Body>
        </Card>
    )
}

export default PlantCard