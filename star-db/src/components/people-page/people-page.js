import React, { Component } from 'react';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import ErrorIndicator from '../error-indicator';

import './people-page.css';
import SwapiService from '../../services/swapi-service';
import Row from '../row';
import ErrorBoundry from '../error-boundry';



export default class PeoplePage extends Component {
    swapiService = new SwapiService();

    state = {
        selectedPerson: 3
    };

    onPersonSelected = (selectedPerson) => {
        this.setState({
            selectedPerson: selectedPerson
        });
    };

    render() {

        if(this.state.hasError) {
            return <ErrorIndicator />;
        };

        const itemList = (
            <ItemList 
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPeople} 
                renderItem={({name, gender, birthYear}) => `${name} (${gender}, ${birthYear})`} />
        );

        const personDetails = (
            <ItemDetails itemId={this.state.selectedPerson}/>
        );

        return(
            <ErrorBoundry>
            <Row left={itemList} right={personDetails} />
            </ErrorBoundry>
        );
    };
};