/* Import statements */
import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Hero from './components/Hero';

/* App component */
class App extends Component {
    render() {
        return (
            <div>
                <Route path="/" component={Hero} />
            </div>
        )
    }
}

export default App;