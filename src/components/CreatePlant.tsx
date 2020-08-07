import React from 'react';
import { Modal } from 'react-bootstrap';
import PlantCreationForm from './PlantCreationForm';

interface CreatePlantProps{
    modalOpen: boolean
    handleHide: React.Dispatch<React.SetStateAction<boolean>>
}

function CreatePlant({ modalOpen, handleHide }: CreatePlantProps) {
  return (
    <Modal show={modalOpen} onHide={() => handleHide(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Add a new plant</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <PlantCreationForm />

      </Modal.Body>
    </Modal>
  );
}

export default CreatePlant;
