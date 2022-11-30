import styled from "styled-components";

export const Container = styled.div`
  background-color: #222;
  width: 100vw;
  height: 100vh;
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2.6rem;
`;

export const Button = styled.button`
  border: none;
  border-radius: 0.4rem;
  font-family: inherit;
  font-size: 1.6rem;
  padding: 1.6rem 2rem;
  background-color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #f1f3f5;
  }
`;

export const Text = styled.h3`
  color: #fff;
`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const Title = styled.h1`
  color: #fff;
  text-align: center;
  font-size: 3rem;
  letter-spacing: 0.3rem;
  margin-top: 3rem;
`;

export const Box = styled.div`
  width: 12rem;
  height: 10rem;
  background-color: #fff;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8rem 0;
  border-radius: 0.4rem;
  position: relative;

  &::before {
  }
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
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem 0;
  padding-right: 1rem;
`;

export const Input = styled.input`
  background-color: #222;
  border: 2px solid #fff;
  height: 9rem;
  font-size: 3.6rem;
  width: 45%;
  text-align: center;
  color: #fff;
  font-family: inherit;
  margin: 3rem 0;

  &[type="number"]::-webkit-inner-spin-button,
  &[type="number"]::-webkit-outer-spin-button {
    /* -webkit-appearance: none; */
    margin-right: 1rem;
    margin-left: -3rem;
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding: 10rem 4rem 10rem 10rem;
`;

export const H2 = styled.h2`
  color: #fff;
`;

export const Content = styled.div`
  color: #fff;
  margin-top: 2rem;
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  margin: 1.6rem 0;

  &:first-child {
    margin-top: 3rem;
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
