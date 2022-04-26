import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Checkout = () => {
    return (
        <div className='w-50 mx-auto'>
            <h3 className='text-success py-3'>Checkout Page</h3>
            <Form className=' text-start'>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicTextarea">
                    <Form.Label>Your Address</Form.Label>
                    <Form.Control type="textarea" name="textarea" placeholder="Your Full Address" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="number" name="number" placeholder="Your Phone Number" required />
                </Form.Group>

                <Button variant="success" type="submit">
                    Proceed On
                </Button>
            </Form>
        </div>
    );
};

export default Checkout;