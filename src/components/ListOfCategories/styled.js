import styled, { css } from "styled-components";
export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  ${props =>
    props.fixed &&
    css`
       {
        background: #fff;
        border-radius: 60px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
        left: 0;
        margin: 0 auto;
        right: 0;
        max-width: 400px;
        padding: 5px;
        top: -20px;
        transform: scale(0.5);
        position: fixed;
        z-index: 1;
      }
    `}
`;

export const Item = styled.li`
  padding: 0 8px;
`;
