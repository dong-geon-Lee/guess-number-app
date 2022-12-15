import styled from "styled-components";
import { device } from "../../styles/GlobalStyle";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  @media ${device.mobile} {
    & h1 {
      font-size: 2.4rem;
      line-height: 2;
    }

    & .media__box {
      width: 10rem;
      height: 8rem;
      margin: 2rem auto;
    }

    & div:last-child {
      top: 66%;
    }
  }
`;

export const Box = styled.div`
  width: ${(props) => (props.check ? "24rem" : "12rem")};
  height: 10rem;
  background-color: #fff;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8rem 0;
  border-radius: 0.4rem;
  position: relative;
`;

export const Title = styled.h1`
  color: #fff;
  text-align: center;
  font-size: 3.6rem;
  letter-spacing: 0.3rem;
  margin-top: 3rem;
`;

export const SubText = styled.h2`
  font-size: 4.6rem;
  z-index: 3;
`;

export const Line = styled.div`
  content: "";
  position: absolute;
  top: 55%;
  left: 50%;
  background-color: #ced4da;
  width: 100%;
  height: 0.6rem;
  transform: translate(-50%, 255%);
  z-index: 1;

  @media ${device.mobile} {
    display: none;
  }
`;
