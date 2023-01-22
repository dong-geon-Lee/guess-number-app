import styled from "styled-components";
import { device } from "../../../styles/GlobalStyle";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem 0;
  padding-right: 1rem;

  @media ${device.mobile} {
    padding: 0rem;
    padding-right: 0;
  }
`;

export const Border = styled.div`
  background-color: inherit;
  border: 3px solid #fff;
  font-size: 3.6rem;
  width: 28rem;
  text-align: center;
  color: #fff;
  font-family: inherit;
  margin: 3rem 0;
  padding: 1.2rem 0;

  @media ${device.mobile} {
    width: 20%;
    margin-top: 1rem;
    margin-bottom: 3rem;
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

export const UpBtn = styled(Button)`
  cursor: ${(props) =>
    props.check || !props.play ? "not-allowed" : "pointer"};
`;

export const DownBtn = styled(UpBtn)``;

export const CheckBtn = styled(UpBtn)``;

export const BtnBox = styled.div`
  display: flex;
  gap: 1.4rem;
`;
