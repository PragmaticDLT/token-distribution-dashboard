import styled from 'styled-components';
import { palette } from 'static/theme';

export const Wrapper = styled.div`
  margin: 0 auto;
  background-color: ${palette.green};
  opacity: ${props => props.disabled ? '0.5' : '1'};
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  user-select: none;
  
  &:active {
    box-shadow: 0 0px 2px ${palette.green};
  }
`;