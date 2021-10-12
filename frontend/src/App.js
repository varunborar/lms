import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import jwt_decode from 'jwt-decode';

import Public from './components/public/Public';
import Private from './components/private/Private';
import PrivateRoute from './components/PrivateRoute';

import { Provider } from 'react-redux';
import store from './State/Store';
import setAuthToken from './State/utils/setAuthToken';
import { setCurrentUser, logoutUser } from './State/actions/authActions';
import { setUserDetails } from './State/actions/userActions';


// Checking auth session
if (localStorage.USER) {
    const USER = JSON.parse(localStorage.USER);
    const token = USER['accessToken'];
    
    setAuthToken(token);
    
    const decoded = jwt_decode(token);

    store.dispatch(setCurrentUser(USER));
    store.dispatch(setUserDetails(decoded));

    const currentTime = Date.now() / 1000;

    if (decoded.exp < currentTime) {
        store.dispatch(logoutUser());
        window.location.href = "./login";
    }
}


function App() {

    return (
        <div className="App">
            <Provider store={store}>
                <Router>
                    <Switch>
                        <PrivateRoute path="/app" component={Private} />
                        <Route path="/" component={Public} />
                    </Switch>
                </Router>
            </Provider>
        </div>
    );
}

export default App;