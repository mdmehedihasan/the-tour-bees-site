import React from 'react';
import google from "../../../images/social/google.png"
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);


    const navigate = useNavigate();
    let errorOccur;

    if (error) {

        errorOccur = <div>
            <p className='text-danger'>Error: {error?.message} </p>
        </div>

    }

    if (user) {
        navigate('/home')
    }


    return (

        <div>
            <div className='d-flex align-items-center'>
                <div className='bg-primary w-50' style={{ height: '1px' }}></div>
                <p className='mt-2 px-2'>OR</p>
                <div className='bg-primary w-50' style={{ height: '1px' }}></div>
                <div />
            </div>

            <div className='d-flex flex-column align-items-center'>
                {errorOccur}
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-primary w-50 '>
                    <img style={{ width: '30px' }} src={google} alt="" />
                    <span>Google Sign In </span>
                </button>
            </div>
        </div >
    );
};

export default SocialLogin;