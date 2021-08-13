import React from 'react';
import { HomeLeftContainer } from './home-left.styles';
import LeftSearch from './home-left-search/left-search.component';
import HomeLeftSearch from './home-left-search/search-header/search-header.component';
import ChatUsComponent from '../chat-us/chat-us.component';
import MessagingBar from '../messaging-bar/messaging-bar.component';
import FooterComponent from '../footer-component/footer.component';

const HomeLeftComponent = () => {



    return (
        <HomeLeftContainer>
               <ChatUsComponent/>
               <MessagingBar/>
               <HomeLeftSearch/>
               <LeftSearch/>
               <FooterComponent/>
        </HomeLeftContainer>
    );
}

export default HomeLeftComponent;
