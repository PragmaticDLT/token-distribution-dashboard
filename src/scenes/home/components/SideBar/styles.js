import styled from 'styled-components';

import { palette } from 'static/theme';

export const Overlay = styled.div`
    position: fixed; 
    width: 100%; 
    height: 100%;
    top: 0px; 
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 100; 
    cursor: pointer;
`;

export const Wrapper = styled.div`
    height: 100%;
    width: ${props => props.open ? '500px' : '0px'};
    background-color: white;
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    border-right: 10px solid ${palette.green};
    overflow-x: hidden;
    transition: 0.3s; 
    user-select: none;
`;

export const MetaMaskRemainder = styled.p`
  text-align: center;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  border-top: 1px solid ${palette.green};
  border-bottom: 1px solid ${palette.green};
  box-sizing: border-box;
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const Heading = styled.h1`
  text-align: center;
  text-transform: uppercase;
  font-size: ${props => props.big ? '16px': '12px'};
  color: ${palette.darkGray};
`;

export const Input = styled.input`
  border: none;  
  border-radius: 2px;
  background-color: #f3f4f6;
  opacity: 0.9;
  z-index: 100;
  margin-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  
  width: 400px;
  height: 40px;

  font-family: Montserrat;
  font-size: 15px;
  text-align: left;
  color: #5f5d70;
`;

