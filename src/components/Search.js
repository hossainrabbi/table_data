import React from 'react';
import { Container, Form } from 'react-bootstrap';

const Search = ({ setSearchData }) => {
    return (
        <Container>
            <Form.Control
                className="w-50 mx-auto mt-5"
                type="text"
                placeholder="Search For Name"
                onChange={(e) => setSearchData(e.target.value)}
            />
            <br />
        </Container>
    );
};

export default Search;
