import React from 'react';

import Header from '../header';
import RandomPlanet from '../rendom-planet';
import PersonDetails from '../person-details';
import ItemList from '../item-list';

import './app.css';


const App = () => {
    return(
        <div>
            <Header />
            <RandomPlanet />
            
            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList />
                </div>
                <div className="col-md-6">
                    <PersonDetails />
                </div>
            </div>
        </div>
    );
};

export default App;