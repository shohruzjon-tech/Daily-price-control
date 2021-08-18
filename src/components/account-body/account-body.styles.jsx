import styled from "styled-components";


export const AccountBodyContainer=styled.div`
       width:100vw;
       
`

export const AccountBodyInfo=styled.div`
       width:800px;
       margin:0 auto;
       background:#ddd;
`

export const AccountProfile=styled.div`
        background:#fff;
        display:grid;
        grid-template-columns:${props=>props.full};
        grid-gap:10px;
`
export const AccountProfileImageBox=styled.div`
       width:max-content;
`
export const AccountProfileImage=styled.img`
        width:190px;
        height:200px;
`
export const AccountProfileImageActions=styled.div`
        display:flex;
        width:100%;
        justify-content:space-between;
        padding:7px 18px;
        font-size:12px;
        
`
export const AccountProfileImageUpdate=styled.span`
       cursor:pointer;
       color:#0e57b3;
`
export const AccountProfileImageDelete=styled.span`
       color:#c5c5c5;
       transition:color 450ms;
       cursor:pointer;
       display:flex;
       align-items:center;
       &:hover{
           color:red;
       }
`

export const AccountProfileUpdate=styled.div`
       display:grid;
       grid-template-columns:1fr 1fr;
       grid-gap:20px;   
`
export const AccountProfileUpdateButtons=styled.div`
        display:flex;
        justify-content:flex-end;   
`


export const AccountContactUpdate=styled.div`
       display:grid;
       grid-template-columns:1fr 1fr;
       grid-gap:20px;          
`





























export const AccountNamePlate=styled.div`
       height:75%;
       margin:auto;
       width:90%;
`
export const AccountNameLine=styled.h3`
       font-size:32.5px;
       color:#259dd2;
`
export const AccountLocation=styled.p`
       font-size:32.5px;
       color:#333;
       font-size:15px;
       display:flex;
       align-tems:center;
`

export const AccountEditButton=styled.div`
      padding:40px 0;
`

export const AccountContentDevider=styled.div`
      display:flex;
      justify-content:space-between;
      padding:16px 20px 1px 20px;
      background:#ffffffab;
`

export const AccountDividerName=styled.h3`
      font-size:18px;
      color:#1d3866;
      font-family:sans-serif;
`


export const AccountDividerEdit=styled.div`
       font-size:12px;
       color:#222222;
       cursor:pointer;
`

export const AccountContact=styled.div`
       background:#fff;
       display:grid;
       grid-template-columns:${props=>props.contact? "1fr" : "1fr 1fr"};
       grid-gap:20px;
       padding:25px;
       margin-bottm:20px;
`

export const AccountContactDetailContainer=styled.div`
       display:flex;
       flex-direction:column;
       align-items:flex-start;
`
export const AccountContactDetail=styled.h3`
      font-size:18px;
      font-family:sans-serif;
      color:2c2c2c;
      
`
export const AccountContactDetailInfo=styled.span`
          
`