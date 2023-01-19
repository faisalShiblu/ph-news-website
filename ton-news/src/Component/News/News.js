import React from 'react';
import { Button, Card } from 'react-bootstrap';

const News = (props) => {
    const { author, title, description } = props.article;
    return (
        <Card>
            <Card.Header as="h5">Featured</Card.Header>
            <Card.Body>
                <Card.Title>{title} by {author}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
};

export default News;