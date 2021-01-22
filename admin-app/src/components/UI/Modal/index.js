import React from 'react';
import {Modal, Button} from 'react-bootstrap';

export default function NewModal(props) {
    return (
        <Modal size={props.size} show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{props.modelTitle}</Modal.Title>
            </Modal.Header>
                {props.children }
            <Modal.Footer>
                {
                    props.buttons ? props.buttons.map((btn,index) => 
                     <Button key={index} variant={btn.color} onClick={btn.onClick}>
                        {btn.label}
                    </Button>
                    ):
                    <Button 
                    variant="primary" 
                    {...props}
                    style={{backgroundColor : '#333'}}
                    className="btn-sm" 
                    onClick={props.handleClose}
                    >
                        Save
                    </Button>
                }
               
            </Modal.Footer>
        </Modal>
    )
}
