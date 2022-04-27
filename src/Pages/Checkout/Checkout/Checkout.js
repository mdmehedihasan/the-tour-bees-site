import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Checkout = () => {

    const proceedon = () => {
        toast('Thank you for booking');
    }


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

                <Button onClick={proceedon} variant="success">
                    Proceed On
                </Button>
                <ToastContainer />
            </Form>

        </div>
    );
};

export default Checkout;