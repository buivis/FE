import React from 'react';
import '../../App.css';
import './CreateTickets.css'
import SearchBar from '../SearchBar/SearchBar';
import TextBoxes from '../SearchBar/TextBoxes';
import Forms from '../SearchBar/Forms';
function CreateTicket() {
    return (
        <div class='CreateTickets'>
            <SearchBar placeholder="Enter customer search string" />
            <TextBoxes />
            <Forms />
        </div>
    );
}

export default CreateTicket