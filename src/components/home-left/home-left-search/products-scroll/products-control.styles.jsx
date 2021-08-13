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
            background:#533687;
            border-radius:25px;
            background: rgba(255, 255, 255, 0.2);
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
            border: 1px solid rgba(255, 255, 255, 0.3);
         }
`