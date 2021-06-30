import React from 'react';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ReturnModal = ({
    showReturnModal,
    tableData,
    handleReturnModalClose,
}) => {
    const [confirmBooking, setConfirmBooking] = useState(false);
    const [selectedItem, setSelectedItem] = useState({});

    const selectedData = tableData.find((item) => item.name === selectedItem);

    const handleConfirm = () => {
        alert('Product Order Successfully!');
        window.location.pathname = '/';
    };

    return (
        <Modal show={showReturnModal} onHide={handleReturnModalClose}>
            <div className="p-3">
                <h4>Return Product</h4>
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
                        <p>Your estimated price is ${selectedData?.price} </p>
                        <p>Do you want to procedure?</p>
                    </div>
                )}
            </div>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleReturnModalClose}>
                    No
                </Button>
                {!confirmBooking ? (
                    <Button
                        variant="primary"
                        onClick={() => setConfirmBooking(true)}
                        disabled={selectedData === undefined}
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

export default ReturnModal;
