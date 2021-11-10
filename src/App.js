import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import { Navbar } from './components/NavBar';
import ItemList from "./components/ItemList";
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
    return ( <div className = "App">
        <BrowserRouter >
        <Navbar/>
        <Switch>
            <Route exact path = "/">

        <ItemList/>
        </Route>

        <Route exact path = "/detail/:id">

        <ItemDetailContainer/>
        </Route>

        </Switch>  
        </BrowserRouter>  
        </div>
    );
}

export default App;