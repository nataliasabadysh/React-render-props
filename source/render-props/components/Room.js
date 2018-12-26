// Core
import React from 'react';

//Components
import Tracker from './Tracker';
import Animals from './Animals';

const Content = ( props ) => {
    return (
        <>
            <Animals.Tile { ...props } />
            <Animals.Cat { ...props } />
            <Animals.Mouse { ...props } />
        </>
    )
}

export default class Room extends Component {
    render () {
        return (
            <div className = 'room'>
                <h1>Поиграем в кошки-мышки!</h1>
                <Tracker component = { Content } />
            </div>
        );
    }
}