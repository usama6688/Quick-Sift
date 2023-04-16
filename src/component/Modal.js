import React from 'react';
import { Modal } from "react-bootstrap";
import "../App.css";

const modal = ({ show, size, icon, title, handleClose, children, className, customHeader = null }) => {
    return (
        <Modal
            size={size}
            show={show}
            onHide={handleClose}
            // backdrop="static"
            // keyboard={false}
            className={className}
            centered
        >
            {/* <Modal.Header closeButton={customHeader ? false : 'closeButton'}>
                <Modal.Title className="d-flex" >
                    <img src={icon} alt="" className='mr-2' />
                    <h5 className="title fontsize-15">{title}</h5>
                </Modal.Title>
                {customHeader ?
                    <div className="d-flex align-items-center">
                        {customHeader ? customHeader : ''}
                        <button type="button" class="btn-close" aria-label="Close" onClick={handleClose} onHide={handleClose} />
                    </div>
                    : ''}
            </Modal.Header> */}
            {children}
        </Modal>
    )
}

export default modal;