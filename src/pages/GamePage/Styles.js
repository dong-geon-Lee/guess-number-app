import styled from "styled-components";
import { device } from "../../styles/GlobalStyle";

export const Container = styled.div`
  background-color: ${(props) => (props.check ? "#60b347" : "#222")};
  width: 100vw;
  height: 100vh;

  @media ${device.mobileL} {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2.6rem;

  @media ${device.mobileL} {
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

export const BtnBox = styled.div`
  display: flex;
  gap: 1.4rem;
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

export const UpBtn = styled(Button)`
  cursor: ${(props) =>
    props.check || !props.play ? "not-allowed" : "pointer"};
`;

export const DownBtn = styled(Button)`
  cursor: ${(props) =>
    props.check || !props.play ? "not-allowed" : "pointer"};
`;

export const CheckBtn = styled(Button)`
  cursor: ${(props) =>
    props.check || !props.play ? "not-allowed" : "pointer"};
`;

export const Text = styled.h3`
  color: #fff;
`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  @media ${device.mobileL} {
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

export const Title = styled.h1`
  color: #fff;
  text-align: center;
  font-size: 3rem;
  letter-spacing: 0.3rem;
  margin-top: 3rem;
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

  @media ${device.mobileL} {
    display: none;
  }
`;

export const SubText = styled.h2`
  font-size: 4.6rem;
  z-index: 3;
`;

export const Bottom = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 80%;
  margin: 8rem auto;

  @media ${device.mobileL} {
    margin-top: 2rem;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(1, 1fr);
    margin: 0rem auto;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem 0;
  padding-right: 1rem;

  @media ${device.mobileL} {
    padding: 0rem;
    padding-right: 0;
  }
`;

export const Input = styled.input``;

export const Border = styled.div`
  background-color: inherit;
  border: 3px solid #fff;
  font-size: 3.6rem;
  width: 60%;
  text-align: center;
  color: #fff;
  font-family: inherit;
  margin: 3rem 0;
  padding: 1.2rem 0;

  @media ${device.mobileL} {
    width: 20%;
    margin-top: 1rem;
    margin-bottom: 3rem;
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding: 10rem 4rem 10rem 4rem;

  @media ${device.mobileL} {
    padding: 0rem;

    & .media__h2 {
      margin-top: 4rem;
      margin-bottom: 2rem;
      text-align: center;
    }
  }
`;

export const H2 = styled.h2`
  color: #fff;
`;

export const Content = styled.div`
  color: #fff;
  margin-top: 2rem;

  @media ${device.mobileL} {
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

  @media ${device.mobileL} {
    justify-content: center;
  }
`;

export const Icon = styled.span`
  font-size: 1.4rem;
  line-height: 1.7;
`;

export const Label = styled.label`
  font-size: 1.4rem;
`;

export const Span = styled.span``;
