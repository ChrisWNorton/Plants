import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css'

function PlantCreationForm() {


    const [lastWateringDate, setLastWateringDate] = useState<Date | Date[] | null>(new Date())
    const [nextWateringDate, setNextWateringDate] = useState<Date | Date[] | null>(new Date())

    return(
        <Form>
        <Form.Label>Name </Form.Label>
        <Form.Control></Form.Control>
        <Form.Label>When was the last time it was watered?</Form.Label>
        <br/>
        <DatePicker value= {lastWateringDate?.toString()} onChange={date => setLastWateringDate(date)} showTimeSelect/>
        <br/>
        <Form.Label>When is the next time it should be watered?</Form.Label>
        <br/>
        <DatePicker value= {nextWateringDate?.toString()} onChange={date => setNextWateringDate(date)} showTimeSelect/>
        <br />
        
    </Form>
    )
}

export default PlantCreationForm