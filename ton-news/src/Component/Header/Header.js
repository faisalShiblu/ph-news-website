import React from 'react';
import { Card } from 'react-bootstrap';

const Header = () => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Header;