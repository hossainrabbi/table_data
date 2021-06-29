import React, { useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import BookModal from './BookModal';

const DataTable = ({ tableData }) => {
    const [showBookModal, setShowBookModal] = useState(false);
    const [clickedItem, setClickedItem] = useState({});
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const handleBookModalClose = () => setShowBookModal(false);
    const handleBookModalShow = () => setShowBookModal(true);

    const handleItemClick = (code) => {
        setClickedItem(tableData.find((item) => item.code === code));
    };

    const diffDate =
        Math.abs(new Date(endDate) - new Date(startDate)) /
        (1000 * 60 * 60 * 24);

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
                            <tr
                                key={code}
                                onClick={() => handleItemClick(code)}
                            >
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
                <Button variant="secondary">Return</Button>
            </div>
            <BookModal
                showBookModal={showBookModal}
                clickedItem={clickedItem}
                setStartDate={setStartDate}
                setEndDate={setEndDate}
                handleBookModalClose={handleBookModalClose}
                diffDate={diffDate}
            />
        </Container>
    );
};

export default DataTable;
