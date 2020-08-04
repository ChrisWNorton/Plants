import React from 'react';
import { Modal, Form } from 'react-bootstrap';

interface CreatePlantProps{
    modalOpen: boolean
    handleHide: React.Dispatch<React.SetStateAction<boolean>>
}

function CreatePlant({modalOpen, handleHide}: CreatePlantProps) {
    return (
        <Modal show={modalOpen} onHide = {() => handleHide(false)}>
        <Modal.Header closeButton>
        <Modal.Title>Add a new plant</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Label>Name </Form.Label>
                <Form.Control></Form.Control>
                <Form.Label>When was the last time it was watered </Form.Label>
                


            </Form>

        </Modal.Body>
        </Modal>
    )
}

export default CreatePlant