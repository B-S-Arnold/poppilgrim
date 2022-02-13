import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import ReviewForm from './ReviewForm';


function ReviewFormModal() {
    const [showModal, setShowModal] = useState(false);
    
    
    return (
        <>
            <button onClick={() => setShowModal(true)}>Leave a Review</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <ReviewForm />
                </Modal>
            )}
        </>
    );
}

export default ReviewFormModal;