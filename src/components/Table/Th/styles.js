import styled from 'styled-components';
import { palette } from 'static/theme';

export const Wrapper = styled.th`
  text-transform: uppercase;
  padding: 8px;
  user-select: none;
  border-bottom: 2px solid ${palette.lightGray};
  background-color: ${palette.white};
  font-family: OpenSansBold;
`;
