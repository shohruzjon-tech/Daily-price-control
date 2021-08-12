import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HeaderComponent from './components/header-component/header.component';
import HomePage from './pages/home/home.component';
import RegisterPage from './pages/register/register.component';




const  App=()=> {


  return (
         <React.Fragment>
               <Switch>
                   <Route exact path="/">
                          <HeaderComponent/>
                          <HomePage/>
                    </Route> 
                   <Route exact path="/register" component={RegisterPage}/> 
               </Switch>
         </React.Fragment>
  );
}

export default App;
