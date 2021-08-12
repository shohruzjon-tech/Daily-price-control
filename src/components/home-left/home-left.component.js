import React from 'react';
import { HomeLeftContainer } from './home-left.styles';
import LeftSearch from './home-left-search/left-search.component';
import HomeLeftSearch from './home-left-search/search-header/search-header.component';


const HomeLeftComponent = () => {



    return (
        <HomeLeftContainer>
               <HomeLeftSearch/>
               <LeftSearch/>
        </HomeLeftContainer>
    );
}

export default HomeLeftComponent;
