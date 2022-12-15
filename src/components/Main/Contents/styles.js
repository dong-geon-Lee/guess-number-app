import styled from "styled-components";
import { device } from "../../../styles/GlobalStyle";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding: 10rem 4rem 10rem 4rem;

  @media ${device.mobile} {
    padding: 0rem;

    & .media__h2 {
      margin-top: 4rem;
      margin-bottom: 2rem;
      text-align: center;
    }
  }
`;

export const Text = styled.p`
  color: #fff;
  font-size: 2rem;
  font-weight: 600;
`;

export const Content = styled.div`
  color: #fff;
  margin-top: 2rem;

  @media ${device.mobile} {
    margin-top: 0rem;
  }
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin: 1.6rem 0;

  &:first-child {
    margin-top: 3rem;
  }

  @media ${device.mobile} {
    justify-content: center;
  }
`;

export const Icon = styled.span`
  font-size: 2rem;
  line-height: 1.7;
`;

export const Label = styled.label`
  font-size: 1.8rem;
  font-weight: 400;
`;
