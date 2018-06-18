import styled from 'styled-components';
import { palette } from 'static/theme';

export const Wrapper = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: flex-start;
   align-items: stretch;
   
   width: 100%;
   height: 100%;
`;

export const Dashboard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  width: 100%;
  height: 100%;
  margin-left: 15px;
  margin-right: 5px;
`;

export const Heading = styled.div`
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  font-size: 16px;
  color: ${palette.darkGray};
  margin: 3px;
`;

export const ScrollingContainer = styled.div`
  overflow: scroll;
  height: 300px;
  margin-bottom: 20px;
`;

export const Green = styled.div`
  color: ${palette.green};
  margin-left: 3px;
  margin-right: 3px;
  text-transform: uppercase;
  font-size: 16px;
`;

