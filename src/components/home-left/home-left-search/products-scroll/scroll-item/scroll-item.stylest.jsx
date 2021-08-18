import styled from "styled-components";



export const ScrollItemContainer=styled.div`
       display:grid;
       grid-template-columns:1fr 2fr 1fr;
       background:none;
       border-bottom:1px solid #ddd;
       border:${props=>props?.index? "1px solid red" : "1px"};
       padding:20px 10px;
       cursor:pointer;
       position:relative;
       color:rgb(30,14,98);
       &:before{
        content:"";
        width:10px;
        height:96%;
        margin-top:0.8%;
        border-radius:4px;
        background-color:${props=>props?.index? "red" : "none"};
        position:absolute;
        margin-left:2px;
    }
       &:hover{
           border:1px solid;
           border-color:rgba(255, 255, 255, 0.8);
           background: rgba(255, 255, 255, 0.44);
           box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
           backdrop-filter: blur(5px);
           -webkit-backdrop-filter: blur(5px);
           border: ${props=>props?.index? "1px solid red":"1px solid rgba(255, 255, 255, 0.3)"};
           &:before{
               content:"";
               width:10px;
               height:96%;
               border-radius:4px;
               background-color:${props=>props?.index? "red" : "none"};
               position:absolute;
               margin-left:2px;
           }
       }
`

export const ProductImage=styled.div`
      display:flex;
      align-items:center;
`

export const ProductImageOnly=styled.img`
     max-width:40px;
     max-height:40px;
`
export const ProductInfo=styled.div`
         
`
export const ProductTitle=styled.h3`

`
export const ProductAdded=styled.span`

`
export const ProductPriceBox=styled.div`

`