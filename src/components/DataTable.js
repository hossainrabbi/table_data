import React, { useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import BookModal from './BookModal';
import ReturnModal from './ReturnModal';

const DataTable = ({ tableData }) => {
    const [showBookModal, setShowBookModal] = useState(false);
    const [showReturnModal, setShowReturnModal] = useState(false);

    const handleBookModalClose = () => setShowBookModal(false);
    const handleBookModalShow = () => setShowBookModal(true);
    const handleReturnModalClose = () => setShowReturnModal(false);
    const handleReturnModalShow = () => setShowReturnModal(true);

    return (
        <Container>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Code</th>
                        <th>Availability</th>
                        <th>Need to Repair</th>
                        <th>Durability</th>
                        <th>Mileage</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((item, index) => {
                        const {
                            name,
                            code,
                            availability,
                            needing_repair,
                            durability,
                            mileage,
                        } = item;
                        return (
                            <tr key={code}>
                                <td>{index + 1}</td>
                                <td>{name}</td>
                                <td>{code}</td>
                                <td className="text-capitalize">{`${availability}`}</td>
                                <td className="text-capitalize">{`${needing_repair}`}</td>
                                <td>{durability}</td>
                                <td>{mileage}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
            <div className="text-right">
                <Button variant="secondary" onClick={handleBookModalShow}>
                    Book
                </Button>{' '}
                <Button variant="secondary" onClick={handleReturnModalShow}>
                    Return
                </Button>
            </div>
            <BookModal
                showBookModal={showBookModal}
                tableData={tableData}
                handleBookModalClose={handleBookModalClose}
            />
            <ReturnModal
                showReturnModal={showReturnModal}
                tableData={tableData}
                handleReturnModalClose={handleReturnModalClose}
            />
        </Container>
    );
};

export default DataTable;
