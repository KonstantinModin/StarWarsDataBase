import React, {Component} from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';
import { SwapiServiceProvider } from '../swapi-service-context';
import { PeoplePage, PlanetsPage, StarshipsPage, LoginPage, SecretPage } from '../pages';
import ErrorBoundry from '../error-boundry';
import './app.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { StarshipDetails } from '../sw-components';

export default class App extends Component {    
    state = {
        swapiService: new SwapiService(),
        isloggedIn: false        
    };

    onLogin = () => {
        this.setState({
            isloggedIn: true
        });
    };
    
    onServiceChange = () => {
        this.setState(({ swapiService }) => {
            const Service = swapiService instanceof SwapiService ? 
                                DummySwapiService : SwapiService;
            console.log('switched to ', Service.name);
            return {
                swapiService: new Service()
            };
        });
    };
    
    render() {     
        const { isloggedIn } = this.state;
        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <Router>
                        <div className="stardb-app">
                            <Header onServiceChange={this.onServiceChange}/>
                            <RandomPlanet />
                            <Switch>
                                <Route 
                                    path="/" 
                                    render={ () => <h2>Welcome to StarDB!</h2> }
                                    exact />                               
                                <Route path="/people/:id?" component={PeoplePage} />                                
                                <Route path="/planets/" component={PlanetsPage} />                               
                                <Route path="/starships/" exact component={StarshipsPage} />
                                <Route  path="/starships/:id" 
                                        render={({ match }) => {
                                            const { id } = match.params;                                        
                                            return <StarshipDetails item={id} />
                                        }} />
                                <Route path="/login"
                                        render={() => (
                                            <LoginPage
                                                isloggedIn={isloggedIn}
                                                onLogin={this.onLogin} />
                                        )} />
                                <Route path="/secret"
                                        render={() => isloggedIn ? 
                                                    <SecretPage isloggedIn={isloggedIn} /> :
                                                    <Redirect to="/login" />}/>
                                {/* <Redirect to="/"/> */}
                                <Route render={() => <h2>Page not Found</h2>} />
                            </Switch>                            
                            <div className="copyright">Copyright © 2019 Konstantin Modin 
                            All Rights Reserved. Designed with React</div>
                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundry>
        )        
    };
};