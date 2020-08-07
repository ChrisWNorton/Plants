import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

import DatePicker from 'react-datepicker';
import ImageUploader from 'react-images-upload';

import 'react-datepicker/dist/react-datepicker.css'

function PlantCreationForm() {


    const [lastWateringDate, setLastWateringDate] = useState<Date | Date[] | null>(new Date())
    const [nextWateringDate, setNextWateringDate] = useState<Date | Date[] | null>(new Date())
    const [images, setImages] = useState<File[]>([])

    const handleFormSubmit = () => {
        console.log('Image data')
    }

    return(
        <Form>
        <Form.Label>Plant Type</Form.Label>
        <Form.Control></Form.Control>
        <Form.Label>When was the last time it was watered?</Form.Label>
        <br/>
        <DatePicker value= {lastWateringDate?.toString()} onChange={date => setLastWateringDate(date)} showTimeSelect/>
        <br/>
        <Form.Label>When is the next time it should be watered?</Form.Label>
        <br/>
        <DatePicker value= {nextWateringDate?.toString()} onChange={date => setNextWateringDate(date)} showTimeSelect/>
        <br />
        <Form.Label> Choose a picture for your plant</Form.Label>
        <br />
        <ImageUploader
            withIcon={true}
            buttonText="Choose images"
            onChange={image => setImages(images.concat(image))}
            imgExtension={['.jpg', '.png']}
            maxFileSize={5242880}
        />
        <Button variant="primary" type="submit" onClick = {handleFormSubmit}>
            Submit
        </Button>        
    </Form>
    )
    }

export default PlantCreationForm