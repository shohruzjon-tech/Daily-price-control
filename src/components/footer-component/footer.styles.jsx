import styled from "styled-components";


export const FooterContainer=styled.div`
     background: linear-gradient(to bottom,#150a33 0%,#1c0950 100%);
     display:flex;
     flex-direction:column;
     justify-content:flex-end;
`

export const FooterBottom=styled.div`
     background:#5e35b1;
     display:flex;
     justify-content:flex-end;
     padding:15px 10px;
     color:#fff;
     font-size:15px;
`

export const FooterList=styled.ul`
    color:#fff;
    list-style:none;
    padding:20px 0;
    width:30%;
    display:flex;
    flex-direction:column;
    align-items:center;
`
export const FooterListItem=styled.li`
    margin:6px 0;
    padding:5px;
    cursor:pointer;
    color:#a08fc3;
    transition:400ms;
    font-size:15px;
    width:40%;
    &:hover{
        color:#a08fc3c3;
    }
`
export const FooterListItemHead=styled.li`
    margin:6px 0;
    padding:5px;
    width:40%;
    font-size:15px;
`