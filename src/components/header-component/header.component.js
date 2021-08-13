import React from 'react';
import { HeaderContainer } from './header.styles';
import HeaderTopComponent from './header-top/header-top.component';
import HeaderBottom from './header-bottom/header-bottom.component';


const HeaderComponent = () => {

    const topBarRef=React.useRef();

  React.useEffect(()=>{
    window.addEventListener('scroll', () => {
        if(window.scrollY >= 60){
             topBarRef.current.style.transform="translateY(-45px)"
             topBarRef.current.style.transition="1s"
             topBarRef.current.style.boxShadow="0 20px 30px 0 rgb(28 9 80 / 5%)"
        }else if(window.scrollY <= 60){
            topBarRef.current.style.transform="translateY(0)"
            topBarRef.current.style.transition="1s"
            topBarRef.current.style.boxShadow="none"
        } 
     });
  },[])
    return (
        <HeaderContainer ref={topBarRef}>
            <HeaderTopComponent/>
            <HeaderBottom/>
        </HeaderContainer>
    );
}

export default HeaderComponent;
