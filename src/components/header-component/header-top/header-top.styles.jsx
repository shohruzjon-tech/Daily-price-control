import styled from "styled-components";

export const HeaderTopContainer=styled.div`
      background-image:linear-gradient(to right,#82009f 0%,#5d34af 50%,#00ceab 100%);
`

export const HeaderTopData=styled.div`
       width:1000px;
       margin:auto;
       display:flex;
       padding:10px 20px;
       justify-content:space-between;
       align-items:center;
`

export const HeaderTopDivision=styled.div`
      display:flex;
      align-items:center;
`

export const HeaderTopdataText=styled.p`
       color:#fff;
       margin:0 10px;
`
export const HeaderTopDataBtn=styled.button`
     background:#00ceab;
     border:none;
     outline:none;
     border-radius:25px;
     padding:2px 15px;
     color:#fff;
     transition: 400ms ease-in-out;
     margin:0 10px;
     &:hover{
         background-color:#269bd1;
     }
`

export const HeaderTopContact=styled.div`
      display:flex;
      align-items:center;
      color:#fff;
      font-size:14px;
      cursor:pointer;
`