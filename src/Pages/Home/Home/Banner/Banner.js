import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import bannar1 from "../../../../images/banner/banner1.png"


const Banner = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bannar1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Bandarban Tour Shot</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bannar1}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Rangamati River Lake</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bannar1}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Kuata Sun Set</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;