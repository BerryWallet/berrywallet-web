import React from 'react';
import {NavLink} from 'react-router-dom';

export function Navbar(): JSX.Element {
    const languages = [{
        name: 'All',
        param: 'all'
    }, {
        name: 'JavaScript',
        param: 'javascript',
    }, {
        name: 'Ruby',
        param: 'ruby',
    }, {
        name: 'Python',
        param: 'python',
    }, {
        name: 'Java',
        param: 'java',
    }];

    return (
        <ul>
            <li>
                <NavLink to="/" activeStyle={{fontWeight: 'bold'}}>HOME</NavLink>
            </li>

            {languages.map(({name, param}) => (
                <li key={param}>
                    <NavLink activeStyle={{fontWeight: 'bold'}} to={`/popular/${param}`}>{name}</NavLink>
                </li>
            ))}
        </ul>
    );
}
