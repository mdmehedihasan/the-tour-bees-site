import React from 'react';
import { Accordion } from 'react-bootstrap';

const Faq = () => {
    return (
        <div>
            <h2 className="heading-title my-5 text-success" id='services'>Frequently Asked Question </h2>
            <div className='bg-success w-100 mb-3' style={{ height: '1px' }}></div>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header className='text-start text-success'>The Tour Concept of Bangladesh?</Accordion.Header>
                    <Accordion.Body className='text-start'>
                        Bangladesh is one of the few countries in South Asia, which remains to be explored. Bangladesh has a delicate and distinctive attraction of its own to offer and it is definitely not a tourist haunt like Nepal or India. Bangladesh is like a painter's dream come true with a rich tapestry of colors and texture. The traditional emphasis of the tourist trade has always been on the material facilities offered by a country rather than on its actual charms. This may be a reason why Bangladesh has seldom been highlighted in the World's tourist maps.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header className='text-start'>What is the tour place in BD?</Accordion.Header>
                    <Accordion.Body className='text-start'>
                        Bangladesh, to the east of India on the Bay of Bengal, is a South Asian country marked by lush greenery and many waterways. Its Padma (Ganges), Meghna and Jamuna rivers create fertile plains, and travel by boat is common. On the southern coast, the Sundarbans, an enormous mangrove forest shared with Eastern India, is home to the royal Bengal tiger.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header className='text-start'>Tell Me About Cox's Bazar</Accordion.Header>
                    <Accordion.Body className='text-start'>
                        Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Faq;