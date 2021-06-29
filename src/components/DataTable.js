import React from 'react';
import { Container, Table } from 'react-bootstrap';

const DataTable = ({ tableData }) => {
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
        </Container>
    );
};

export default DataTable;
