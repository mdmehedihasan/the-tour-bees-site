import React from 'react';
import bio from "../../images/profile/mehedi.jpg"
import "../About/About.css"

const About = () => {
    return (
        <div className='main-div'>
            <div className='second-div d-flex align-items-center  mx-auto p-5 sm-p-0'>
                <div className=' w-50 bg-secondary p-5'>
                    <img className='border rounded-circle ' src={bio} alt="" />
                    <h3 className='text-white'>Md Mehedi Hasan</h3>
                    <p className='text-white'>Hi! This is Mehedi. Currently I am pursuing my graduation form Bangladesh University in the Department of Computer Science and Engineering.Passion is developing website consistently.Trying to develop myself</p>
                    <small className='text-white'>BSc in Cse, BU</small>
                </div>
                <div className='w-50  p-5'>
                    <h3>Goal To Achieve</h3>
                    <p>Basically I am in this fielf from my interest. I fond of creating and doing something new. When I saw the videos of Jhankar Mahbub vai, then think about myself why I don't do that? It is very interesting and creative also. </p>
                    <p>I need to develop myself and want to be the best developer.I know technology is changing day by day and I am also ready to take any challenge. I want to be full stack developer and become an technology expert. </p>
                </div>
            </div>
        </div>
    );
};

export default About;