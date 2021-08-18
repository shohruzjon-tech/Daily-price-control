import styled from "styled-components";


export const HeaderBottomContainer=styled.div`
     width:1200px;
     margin:auto;
     padding:15px 20px;
     display:flex;
     justify-content:space-between;
     align-items:center;
     position:relative;
`

export const HeaderBottomLogo=styled.div`
      width:45px;
      height:40px;
      background:#492792; 
      color:#fff;
      font-size:46px;
      display:flex;
      align-items:center;
      justify-content:center;
      padding:6px 4px;
      border-radius:4px;
`
export const HeaderBottomLogoCon=styled.div`
      display:flex;
      justify-content:space-between;
      align-items:center;
      width:130px;    
      cursor:pointer;
`
export const HeaderBottomLogoTextBox=styled.div`
      display:flex;
      flex-direction:column;
      justify-content:center;    
      color:rgb(30, 14, 98); 
`
export const HeaderBottomLogoTextHead=styled.h3`
        margin:0;
        padding:0;
        font-size:18px;
        font-weight:bold;
        font-family:'Roboto';
`
export const HeaderBottomLogoTexDes=styled.span`
        margin:0;
`
export const HeaderBottomRight=styled.div`
        display:flex;
        align-items:center;
        justify-content:space-between;
`

export const HeaderBottomRightMenu=styled.ul`
       list-style:none;
       display:flex;
       align-items:center;
       padding:0;
       margin:0;
       color:#1c0950;
       position:relative;
`
export const SubList=styled.ul`
       position:absolute;
       display:none;
       list-style:none;
       background:rgb(255, 255, 255);
       box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
       padding:0;
       margin:0;
       width:200px;
`


export const HeaderBottomListItem=styled.li`
      margin:0 10px;
      padding:0 10px;
      &:hover{
            ${SubList}{
                  display:block;
            }
      }
`
export const SubListItem=styled.li`
      padding:10px 15px;
      cursor:pointer;
      width:100%;
      &:hover{
            background: rgba(255, 255, 255, 0.2);
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.3);
      }
`

export const HeadertextHover=styled.span`
     margin:0 10px;
     padding:0 10px;
     cursor: pointer;
     transition:color 300ms;
     &:hover{
    color:#1c095099;
}
`
