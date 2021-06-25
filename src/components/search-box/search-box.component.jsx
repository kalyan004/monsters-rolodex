import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({placeholder,fnChange}) => (
    <input
    className = 'search'
    type ='search'
    placeholder = {placeholder}
    onChange ={fnChange}/>
)
