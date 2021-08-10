import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HeaderComponent from './components/header-component/header.component';
import HomePage from './pages/home/home.component';


const  App=()=> {


  return (
         <React.Fragment>
              <HeaderComponent/>
               <Switch>
                   <Route exact path="/" component={HomePage}/> 
               </Switch>
         </React.Fragment>
  );
}

export default App;
