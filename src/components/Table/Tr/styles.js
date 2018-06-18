import styled from 'styled-components';
import { palette } from 'static/theme';

export const Wrapper = styled.tr`
  &:nth-child(odd) {
    background-color: ${palette.white};
  }

  &:nth-child(even) {
    background-color: ${palette.lightGray};
  }

  &:hover {
    /* opacity: 0.8; */
    cursor: pointer;

    &:nth-child(odd) {
      background-color: ${palette.veryLightGray};
    }

    &:nth-child(even) {
      background-color: ${palette.lightGray};
    }
  } 
`;
