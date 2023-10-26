import React from 'react';
import {useAppSelector} from "../../../hooks/redux";

const Tickets = () => {

    const tickets = useAppSelector(state => state.mainReducer.tickets)

    return (
        <div>
            {JSON.stringify(tickets)}
        </div>
    );
};

export default Tickets;