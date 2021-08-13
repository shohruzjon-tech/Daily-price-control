import React from 'react';
import { HomeContainer} from './home.styles';
import HomeRightComponent from '../../components/home-right/home-right.component';
import HomeLeftComponent from '../../components/home-left/home-left.component';



const HomePage = () => {



    return (
        <HomeContainer>
            <HomeLeftComponent/>
            <HomeRightComponent/>
        </HomeContainer>
    );
}

export default HomePage;
