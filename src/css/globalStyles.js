import {injectGlobal} from 'styled-components';

import fontRobotoLight from 'static/fonts/Roboto-Light.ttf';
import fontRobotoRegular from 'static/fonts/Roboto-Regular.ttf';
import fontMontserratBold from 'static/fonts/Montserrat-SemiBold.otf';
import fontMontserrat from 'static/fonts/Montserrat-Regular.ttf';
import fontOpenSansRegular from 'static/fonts/OpenSans-Regular.ttf';
import fontOpenSansSemiBold from 'static/fonts/OpenSans-Semibold.ttf';

export default () => {
  injectGlobal`
    @font-face {
      font-family: RobotoRegular;
      src: url(${fontRobotoRegular});
    }   
    
    @font-face {
      font-family: RobotoLight;
      src: url(${fontRobotoLight});
    }  
    
    @font-face {
      font-family: Montserrat;
      src: url(${fontMontserrat});
    }   
    
    @font-face {
      font-family: MontserratBold;
      src: url(${fontMontserratBold});
    }   
    
    @font-face {
      font-family: OpenSansRegular;
      src: url(${fontOpenSansRegular});
    }
    
    @font-face {
      font-family: OpenSansBold;
      src: url(${fontOpenSansSemiBold});
    }
    
    * {
      user-select: none;
    }
    
    html {
      height: 100%;
    }
    
    body {
      height: 100%;
      padding: 0;
      margin: 0;
      overflow: hidden;
      font-size: 0;
      font-family: Montserrat;
    }
    
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
    }
    
    #root {
      height: 100%;
    }
    
    p, a {
      font-size: 14px;
      color: #333333;
    }
  `;
};
