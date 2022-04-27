import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='bg-success p-2 text-dark bg-opacity-25'>
                <h1>Q:1</h1>
                <h2>Difference Between Authorization and Authentication</h2>
                <p><span className='text-success fs-5'>Authorization:</span>
                    ➤ Authentication varies who the user is
                    ➤ Authentication works through passwords,one-time pins,biometric information, and other information provided or entered by the user
                    ➤Authentication is the first step of a good identity and access management process

                </p>
                <p><span className='text-success fs-5'>Authorization:</span>
                    ➤Authorization determines what resources a user can access.
                    ➤Authorization works through settings that are imiplemented and maintained by the organization
                    ➤Authorization always takes place after authentication
                </p>

            </div>
            <div className='bg-success p-2 text-dark bg-opacity-10'>
                <h1>Q:2</h1>
                <div className='d-flex'>
                    <div className='w-30%'>
                        <h2>Why are you using firebase?</h2>
                        <p>Many features make Google Firebase the backend development tool for web and mobile projects.We can implement authentication system by Firebase. It cuts down on development time and effort.So we use firebase.</p>
                    </div>
                    <div className='w-60'>
                        <h2>What other options do you have to implement authentication?</h2>
                        <p>There are many other option to implement authentication
                            ➤MOngoDB ➤Parse ➤Heroku ➤Auth0 ➤Realm ➤Contentful ➤Couchbase ➤Google Cloud Storage
                        </p>

                    </div>
                </div>
            </div>
            <div className='bg-success p-2 text-dark bg-opacity-25'>
                <h1>Q:3</h1>
                <h2>What Other Services Does Firebase Provides other that authentication?</h2>
                <p><span className='text-success fs-5'>Firebase offers a number of services, icluding</span> <br></br>
                    ➤Analytics-Gogle analytics for Firebase offers free, unlimited reporting on as many as 500 separate events.
                    ➤Coud Messeaging-Firebase cloud messaging is a cross platform messaging tool that lets companies reliably receive and deliver message on iOS, Android and the web at no cost.
                    ➤Realtime Database-The firebase database is a cloud-hosted NoSql database that enables data to be stored and synced between users in real time.
                    ➤Test Lab- Firebase test lab is a cloud based app testing infrastructure.
                </p>

            </div>
        </div>
    );
};

export default Blog;