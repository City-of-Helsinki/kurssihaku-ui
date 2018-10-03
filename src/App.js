import React, {Component} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/home'

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route path="/" exact component={Home} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;
