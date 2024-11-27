import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import './commonmodal.css'; // Assuming this file includes the custom styles

const CommonModal = (props) => {
    const { title = "", content="", show, handleClose=()=>{}, handleSubmit=()=>{}, btnText="" } = props;

    return (
        <Modal className="custom-modal" show={show} onHide={handleClose} centered>
            <Modal.Header className="custom-modal-header">
                <Modal.Title >
                  <span className="custom-modal-title">{title}</span>  
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="custom-modal-body">
                {content}
            </Modal.Body>
            <Modal.Footer className="custom-modal-footer">
                <Button className="custom-modal-button cancel-btn" onClick={handleClose}>
                    Cancel
                </Button>
                <Button className="custom-modal-button submit-btn" onClick={handleSubmit}>
                    {btnText}
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CommonModal;
