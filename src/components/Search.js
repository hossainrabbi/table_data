import React from 'react';
import { Container, Form } from 'react-bootstrap';

const Search = () => {
    return (
        <Container>
            <Form.Control
                className="w-50 mx-auto mt-5"
                type="text"
                placeholder="Search For Name"
            />
            <br />
        </Container>
    );
};

export default Search;
