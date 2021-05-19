import React from 'react'; // a ideia é usar a biblioteca React-Router para mudar de pagina do site sem realizar uma atualização !
import { Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Login from './Pages/Login';
export default () => {

    return (
        <Switch>
            <Route exact path="/">
                <Home/>
             </Route>

             <Route exact path="/login">
                <Login/>
             </Route>


        </Switch>

    
    )

}