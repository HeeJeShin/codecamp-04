import { css } from "@emotion/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const globalStyles = css`
    *{
        margin: 0px;
        box-sizing: border-box;
        
        font-family: "myFonteng","myFontkr";
        

    }

    @font-face {
        font-family: "myFontkr";
        src: url('/fonts/NanumGothicCoding-Regular.ttf');
        //src: url('/fonts/NanumGothicCoding-Regular.ttf');
        unicode-range: U+AC00-D7A3;
    }
    
    /* @font-face {
        font-family: "myFonteng"
        src: url('font/Gugi-Regular')
        unicode-range: U+0041-005A,U+0061-007A
    } */

`;