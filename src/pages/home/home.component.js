import React from 'react';
import { HomeContainer, HomeContainerBgc } from './home.styles';
import HomeRightComponent from '../../components/home-right/home-right.component';
import HomeLeftComponent from '../../components/home-left/home-left.component';
import Canvasresize from '../../components/canvas-bgc/canvas-resize';



const HomePage = () => {



    return (
        <HomeContainer>
              <Canvasresize/>
              <HomeContainerBgc>
                     <HomeLeftComponent/>
                     <HomeRightComponent/>
              </HomeContainerBgc>
        </HomeContainer>
    );
}

export default HomePage;
