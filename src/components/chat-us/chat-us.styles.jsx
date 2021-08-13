import styled from "styled-components";



export const ChatUsContainer=styled.div`
       position:fixed;
       left:0;
       bottom:45%;
       display:flex;
       flex-direction:column;
       align-items:flex-start;
`

export const ChatUsContainerList=styled.ul`
       display:flex;
       flex-direction:column;
       align-items:flex-start;
       list-style:none;
       width:max-content;
       padding:0;
       margin:0;

`

export const ChatUsContainerListItem=styled.li`
      cursor:pointer;
      width:50px;
      font-size:36px;
      display:flex;
      align-tems:center;
      justify-content:center;
      padding:15px 0;
      color:#fff;
      margin:1px 0;
      &:hover{
          box-sizing:content-box;
          padding-left:10px;
      }
`


export const ChatUsTrigger=styled.div`
      width:max-content;
      cursor:pointer;
`