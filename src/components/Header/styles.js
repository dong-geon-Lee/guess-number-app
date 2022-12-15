import styled from "styled-components";
import { device } from "../../styles/GlobalStyle";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2.6rem;

  @media ${device.mobile} {
    flex-direction: column;
    text-align: center;
    padding: 0;

    & button {
      font-size: 1.2rem;
    }

    & h3 {
      display: none;
    }
  }
`;

export const Button = styled.button`
  border: none;
  border-radius: 0.4rem;
  font-family: inherit;
  font-size: 1.6rem;
  padding: 1.6rem 2rem;
  background-color: #fff;
  cursor: pointer;
  letter-spacing: 1px;

  &:hover {
    background-color: #f1f3f5;
  }
`;

export const Text = styled.h3`
  color: #fff;
`;
