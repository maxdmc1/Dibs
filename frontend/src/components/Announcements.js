import React from "react";
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

export default function Annoucements() {
    return (
        <div>
            <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text>Communication</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl as="textarea" aria-label="With textarea" />
            </InputGroup>
        </div>
    );
}
