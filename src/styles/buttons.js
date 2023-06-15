import styled from "styled-components";

export const StyledGreenLarge = styled.button`
  font-family: var(--font-family);
  width: 8.125rem;
  height: 3.75rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0rem 1.25rem;
  gap: 0.625rem;
  background-color: var(--color-primary);
  border-radius: 0.5rem;
  transition: 0.2s ease-in-out;
  :hover {
    background-color: #93d7af;
  }
`;
export const StyledGreenMedium = styled.button`
  font-family: var(--font-family);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0rem 1.25rem;
  gap: 0.625rem;
  width: 8.125rem;
  height: 2.5rem;
  background-color: var(--color-primary);
  border-radius: 0.5rem;
  transition: 0.2s ease-in-out;
  :hover {
    background-color: #93d7af;
  }
`;
export const StyledGreyLarge = styled.button`
  font-family: var(--font-family);
  color: var(--grey-0);
  font-weight: 600;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0rem 1.25rem;
  gap: 0.625rem;
  width: 8.125rem;
  height: 3.75rem;
  background: var(--grey-300);
  border-radius: 0.5rem;
  transition: 0.2s ease-in-out;
  :hover {
    background-color: var(--grey-100);
  }
  outline: none;
  border: none;
`;
export const StyledGreyMedium = styled.button`
  font-family: var(--font-family);
  color: var(--grey-0);
  font-weight: 600;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0rem 1.25rem;
  gap: 0.625rem;
  width: 8.125rem;
  height: 2.5rem;
  background: var(--grey-400);
  border-radius: 0.5rem;
  transition: 0.2s ease-in-out;
  outline: none;
  border: none;
  &:hover {
    background-color: var(--grey-300);
  }
  &:active {
    background-color: #fff;
    color: #000000;
  }
`;
