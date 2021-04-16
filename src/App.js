import React from 'react';
import Dropdown from './components/countryDropdown';
import Navbar from './components/header';

const App = () => {
    return (
        <div>
            <Navbar />
            <Dropdown />
        </div>
    )
}

export default App;