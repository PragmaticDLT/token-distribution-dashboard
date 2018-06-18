import styled from "styled-components";
import { palette } from 'static/theme';

export const MenuLabel = styled.div`
  margin-top: 18px;
  margin-left: 45px;
  white-space:nowrap;
  font-family: Montserrat;
  font-size: 13px;
  text-align: left;
  color: ${palette.white};
`;

export const MenuIcon = styled.div`
  background-repeat: no-repeat;
  background-position: center center;

  width: 24px;
  height: 24px;
 
  position:absolute;
  z-index: 2; 
    
  margin-top: 14px;
  
  mask: url(${props => props.url});
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center center;
  
  background-color: ${palette.white};
`;

export const Wrapper = styled.div`
  font-size: 18px;
  height: 48px;
  width: 100%;
  display: inline-block;
  border-left: ${props => props.active ? '2px' : '0px'} solid ${palette.white};
  padding-left: ${props => props.active ? '17px' : '19px'};
  cursor: pointer;

  &:hover {
    background-color: ${palette.white};;
    
    ${MenuLabel} {
      color: ${palette.darkGray};
    }
    
    ${MenuIcon} {
      background-color: ${palette.darkGray};;
    }
`;

