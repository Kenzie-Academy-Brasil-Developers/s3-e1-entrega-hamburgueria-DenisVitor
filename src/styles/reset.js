import { createGlobalStyle } from "styled-components";

export const GlobalResetStyle = createGlobalStyle`
    * {    
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    ol, ul{
        list-style: none;
    }
    button{
        cursor: pointer;
    }
   
`;
