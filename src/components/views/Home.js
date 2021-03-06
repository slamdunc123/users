import React from 'react';

const Home = () => {
    return(
        <div>
            <br/>
            <h5>Git URL</h5>
            <ul>
                <li>
                    <a href="https://github.com/slamdunc123/users" target="_blank" rel="noopener noreferrer">https://github.com/slamdunc123/users</a>
                </li>
            </ul>

            <h5>Features:</h5>
            <ul>
                <li>Show all users</li>
                <li>Show single user info</li>
                <li>Add user</li>
                <li>Edit user</li>
                <li>Delete user</li>
            </ul>
            <br/>
            <h5>Tech:</h5>
            <ul>
                <li>bootstrap - styling and tables</li>
                <li>reactstrap - modals</li>
                <li>react-router - routing</li>
                <li>axios - get initial data from api</li>
                <li>redux - state management</li>
                <li>redux-thunk - middleware</li>
            </ul>
            <br/>
            <h5>Notes:</h5>
            <ul>
                <li>no persistent state</li>
                <li>no form validation</li>
            </ul>
        </div>


    )
}

export default Home;