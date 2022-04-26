import React from 'react';
import notfound from "../../images/notFound/notFound.jpg"

const NotFound = () => {
    return (
        <div>
            <div><img src={notfound} alt="" /></div>
            <div>
                <h3>The Page Your Are Looking Invalid</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dolore ab molestias reprehenderit incidunt dignissimos error atque cumque dolores eveniet aut mollitia animi quisquam, nam voluptatem minus sint exercitationem similique.</p>
            </div>
        </div>
    );
};

export default NotFound;