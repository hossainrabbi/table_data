import React from 'react';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const BookModal = ({ showBookModal, handleBookModalClose, tableData }) => {
    const [confirmBooking, setConfirmBooking] = useState(false);
    const [selectedItem, setSelectedItem] = useState({});
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const diffDate =
        Math.round(new Date(endDate) - new Date(startDate)) /
        (1000 * 60 * 60 * 24);

    const selectedData = tableData.find((item) => item.name === selectedItem);

    // Product price
    let price = 0;
    if (selectedData?.minimum_rent_period <= diffDate) {
        price = selectedData?.price * diffDate;
    } else {
        // 5% discount
        price =
            selectedData?.price * diffDate -
            (selectedData?.price * diffDate * 5) / 100;
    }

    const handleConfirm = () => {
        alert('Product Order Successfully!');
        window.location.pathname = '/';
    };

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
                                <option value="">Select any Product</option>
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
                            {isNaN(price) ||
                                (price <= 0 && (
                                    <div>
                                        <small className="text-danger">
                                            Please Select a Valid Date
                                        </small>
                                    </div>
                                ))}
                            {selectedData ? (
                                <div className="text-left mt-3">
                                    <h6>Name: {selectedData?.name}</h6>
                                    <span className="d-flex align-items-center">
                                        <span className="mr-5">
                                            Rental Period:
                                            {selectedData?.minimum_rent_period}
                                        </span>
                                        {selectedData?.mileage && (
                                            <span>
                                                Mileage: {selectedData?.mileage}
                                            </span>
                                        )}
                                    </span>
                                    <span className="d-flex align-items-center">
                                        <span className="mr-5">
                                            Price: {selectedData?.price}
                                        </span>
                                        {selectedData?.needing_repair && (
                                            <span className="text-capitalize">
                                                Mileage:{' '}
                                                {`${selectedData?.needing_repair}`}
                                            </span>
                                        )}
                                    </span>
                                </div>
                            ) : (
                                <div className="text-center mt-3">
                                    Please Select any Product
                                </div>
                            )}
                        </div>
                    </>
                ) : (
                    <div className="text-center mt-4">
                        <p>Your estimated price is ${price} </p>
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
                        disabled={isNaN(price) || price <= 0}
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
