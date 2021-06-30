import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const BookModal = ({ showBookModal, handleBookModalClose, tableData }) => {
    const [confirmBooking, setConfirmBooking] = useState(false);
    const [selectedItem, setSelectedItem] = useState({});
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [bookingData, setBookingData] = useState([]);

    const diffDate =
        Math.round(new Date(endDate) - new Date(startDate)) /
            (1000 * 60 * 60 * 24) +
        1;

    const selectedData = tableData.find((item) => item.name === selectedItem);

    const handleConfirm = () => {
        setBookingData([...bookingData, selectedData]);
        localStorage.setItem('bookingData', JSON.stringify(bookingData));
    };

    useEffect(() => {
        setBookingData(JSON.parse(localStorage.getItem('bookingData')));
    }, []);

    return (
        <Modal show={showBookModal} onHide={handleBookModalClose}>
            <div className="p-3">
                <h4>Book Product</h4>
                {!confirmBooking ? (
                    <>
                        <div className="text-center mt-3">
                            <select
                                className="w-75 mb-3 py-2 px-3"
                                onChange={(e) =>
                                    setSelectedItem(e.target.value)
                                }
                            >
                                {tableData.map(({ code, name }) => (
                                    <option key={code} value={name}>
                                        {name}
                                    </option>
                                ))}
                            </select>
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
                    <div className="text-center mt-4">
                        <p>
                            Your estimated price is $
                            {selectedData?.price * diffDate}
                        </p>
                        <p>Do you want to procedure?</p>
                    </div>
                )}
            </div>
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
                    <Button variant="primary" onClick={handleConfirm}>
                        Confirm
                    </Button>
                )}
            </Modal.Footer>
        </Modal>
    );
};

export default BookModal;
