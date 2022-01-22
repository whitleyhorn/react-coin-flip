import React, { Component } from 'react';
import Coin from './Coin';
import headsImg from './assets/heads.jpg';
import tailsImg from './assets/tails.jpg';

class Flipper extends Component {
    constructor(props){
        super(props);
        this.state = {
            heads: 0,
            tails: 0,
            currentSide: '' // heads, tails, or initial ''
        }; 
        // Bind our methods
        this.flip = this.flip.bind(this);
    }

    flip(){
        let res = Math.round(Math.random()); // heads 0, tails 1

        this.setState(curSt => {
            return (res === 0) 
                ? {heads: curSt.heads + 1, currentSide: 'heads'}
                : {tails: curSt.tails + 1, currentSide: 'tails'};
        });
    }

    render(){
        const {heads, tails, currentSide} = this.state;

        return (
            <div className="Flipper">
                {/* String literal because apostrophe breaks JSX Syntax*/}
                <h1>{"Let's flip a coin!"}</h1>
                {/* There should be no img by default, on page load */}
                {currentSide === 'heads' && <Coin img={headsImg} />}
                {currentSide === 'tails' && <Coin img={tailsImg} />}
                <button onClick={this.flip}>FLIP MEEEE</button>
                <p>Out of {heads + tails} flips, there have been {heads} heads and {tails} tails.</p>
            </div>
        );
    }
}

export default Flipper;
