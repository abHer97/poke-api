import React from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { PokemonsPage } from '../pages/Pokemons/PokemonsPage';

export const AppRouter = (): JSX.Element => {
   return (
      <Router>
         <div className='container'>
            <Switch>
               <Route exact path='/pokemones' component={PokemonsPage} />

               <Redirect to='/pokemones' />
            </Switch>
         </div>
      </Router>
   );
};
