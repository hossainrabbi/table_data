import React from 'react';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const BookModal = ({
    showBookModal,
    handleBookModalClose,
    clickedItem,
    setStartDate,
    setEndDate,
    diffDate,
}) => {
    const [confirmBooking, setConfirmBooking] = useState(false);

    return (
        <Modal show={showBookModal} onHide={handleBookModalClose}>
            <h4>Book Product</h4>
            {!confirmBooking ? (
                <>
                    <p>{clickedItem?.name}</p>
                    <div className="text-center">
                        <input
                            type="date"
                            onChange={(e) => setStartDate(e.target.value)}
                        />
                        <span className="mx-2">To</span>
                        <input
                            type="date"
                            onChange={(e) => setEndDate(e.target.value)}
                        />
                    </div>
                </>
            ) : (
                <div className="text-center">
                    <p>
                        Your estimated price is ${clickedItem.price * diffDate}
                    </p>
                    <p>Do you want to procedure?</p>
                </div>
            )}
            <Modal.Footer>
                <Button variant="secondary" onClick={handleBookModalClose}>
                    No
                </Button>
                {!confirmBooking ? (
                    <Button
                        variant="primary"
                        onClick={() => setConfirmBooking(true)}
                    >
                        Yes
                    </Button>
                ) : (
                    <Button variant="primary">Confirm</Button>
                )}
            </Modal.Footer>
        </Modal>
    );
};

export default BookModal;
