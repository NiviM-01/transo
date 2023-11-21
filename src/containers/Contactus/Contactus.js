import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

function Contactus({ openModal, closeModal }) {
    return (
        <>
            <Modal
                show={openModal}
                onHide={() => closeModal()}
                size="lg"
                centered>
                <Modal.Body style={{ background: 'rgba(8, 59, 90, 1)', borderRadius:'5px'}}>
                    <div >
                        <div className='container' >
                            <div className='row'>
                                <div className='col-12'>
                                    <p className='modal-text text-center'>Thank You <br/>For Contacting Us!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

        </>
    );
}

export default Contactus;

