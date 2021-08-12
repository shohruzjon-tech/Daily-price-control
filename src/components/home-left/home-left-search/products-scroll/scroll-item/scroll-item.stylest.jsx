import styled from "styled-components";



export const ScrollItemContainer=styled.div`
       display:grid;
       grid-template-columns:1fr 2fr 1fr;
       background:#fff;
       border:1px solid #ddd;
       padding:20px 10px;
       cursor:pointer;
       position:relative;
       color:rgb(30,14,98);
       &:hover{
           border-color:#12FFF7;
           &:before{
               content:"";
               width:10px;
               height:100%;
               background-color:#12FFF7;
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