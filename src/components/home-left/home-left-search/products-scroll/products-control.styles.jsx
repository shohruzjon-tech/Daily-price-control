import styled from "styled-components";


export const ProductControlContainer=styled.div`
      width:40%;
      height:100%;
      overflow-y: scroll;

      &::-webkit-scrollbar {
            width: 5px;
            height: 8px;
            background:#fff;
         }
         &::-webkit-scrollbar-thumb {
            background:#1976d2;
            border-radius:25px;
            background-image: linear-gradient(135deg, #b3ffab 10%, #12fff7 100%);
         }
`