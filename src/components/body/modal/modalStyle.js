import styled from "styled-components";

export const StyledTitle = styled.section`
  display: flex;
  padding: 0.7rem 0.5rem;
  justify-content: space-between;
  background-color: var(--color-primary);
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
`;
export const StyledCloseButton = styled.button`
  font-family: var(--font-family);
  font-size: 1.0625rem;
  font-weight: 100;
  outline: none;
  border: none;
  background-color: transparent;
  color: var(--grey-100);
  cursor: pointer;
`;
export const StyledFoodList = styled.ul`
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 13.125rem;
  overflow-y: auto;
  overflow-x: hidden;
`;
export const StyledFoodItem = styled.li`
  display: flex;
  img {
    width: 7.5rem;
    height: 7.5rem;
    background-color: var(--grey-100);
    padding: 0.3125rem;
    border-radius: 0.9375rem;
    margin-right: 0.4rem;
    @media screen and (max-width: 29.5rem) {
      width: 3.75rem;
      height: 3.75rem;
    }
  }
`;
export const StyledFoodText = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  flex-wrap: wrap;
`;
export const StyledFoodPurchase = styled.section`
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
  border-top: 3px solid var(--grey-100);
  margin: 1.5rem 1rem;
`;
export const StyledMoney = styled.p`
  font-family: var(--font-family);
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--grey-300);
`;
export const StyledRemoveButton = styled.button`
  display: flex;
  height: fit-content;
  background-color: transparent;
  outline: transparent;
  border: transparent;
`;
export const StyledClearButton = styled.button`
  margin: 0 1rem;
  outline: none;
  height: 3.75rem;
  border: none;
  border-radius: 0.5rem;
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 1rem;
  background-color: var(--grey-100);
  color: var(--grey-300);
  transition: 0.2s ease-in-out;
  &:hover {
    background-color: var(--grey-300);
    color: var(--grey-100);
  }
`;
