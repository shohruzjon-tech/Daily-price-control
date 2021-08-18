import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HeaderComponent from './components/header-component/header.component';
import HomePage from './pages/home/home.component';
import RegisterPage from './pages/register/register.component';
import AccountPage from './pages/account/account.component'
import FooterComponent from './components/footer-component/footer.component';
import NewsPage from './pages/news/news.component';


const  App=()=> {


  return (
         <React.Fragment>
               <Switch>
                   <Route exact path="/">
                         <HeaderComponent/>
                         <HomePage/>
                    </Route> 
                    <Route exact path="/account">
                          <HeaderComponent/>
                               <AccountPage/>
                          <FooterComponent/>
                    </Route> 
                    <Route exact path="/news">
                          <HeaderComponent/>
                               <NewsPage/>
                          <FooterComponent/>
                    </Route> 
                   <Route exact path="/register" component={RegisterPage}/> 
               </Switch>
         </React.Fragment>
  );
}

export default App;
