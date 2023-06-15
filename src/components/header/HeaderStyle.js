import styled from "styled-components";
import burgerLogo from "../../assets/Burger-logo.png";

export const logo = burgerLogo;

export const StyledHeaderImg = styled.img`
  width: 12rem;
  cursor: pointer;
`;
export const StyledHeaderSection = styled.section`
  justify-content: space-between;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-grow: 1;
`;
export const StyledHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1rem 10vw;
  background-color: var(--grey-0);
  gap: 1rem;
`;
export const StyledHeaderForm = styled.form`
  display: flex;
  justify-content: space-between;
  width: clamp(13rem, 80vw, 25rem);
  white-space: nowrap;
  border: 1px solid var(--grey-100);
  background-color: #fff;
  margin-left: 0.7rem;
  padding: 0.3rem 1rem;
  border-radius: 0.5rem;
  &:focus {
    border: 2px solid var(--grey-300);
  }
  input[type="text"] {
    font-size: 16px;
    min-width: 5rem;
    color: var(--grey-300);
    border: none;
    outline: none;
    &::placeholder {
      color: var(--grey-100);
    }
  }
  button {
    width: 3.3125rem;
    height: 2.5rem;
    background-color: var(--color-primary);
    border: none;
    border-radius: 0.5rem;
  }
  @media screen and (max-width: 805px) {
    flex-grow: 1;
  }
`;
export const StyledHeaderInput = styled.input`
  font-family: var(--font-family);
`;
export const StyledHeaderCounter = styled.div`
  display: flex;
  position: relative;
  p {
    color: var(--grey-0);
    font-size: 11px;
    font-weight: 600;
    border-radius: 8px;
    position: absolute;
    top: -1rem;
    left: 80%;
    background-color: var(--color-primary);
    padding: 0.3rem;
    font-family: var(--font-family);
  }
`;
