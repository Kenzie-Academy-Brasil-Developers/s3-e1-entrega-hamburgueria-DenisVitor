import styled from 'styled-components';
export const StyledListSection = styled.section`
    position: relative;
`
export const StyledList = styled.ul`
    margin-top: 2rem;
    padding-left: 10vw;
    padding-right: 10vw;
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    @media screen and (max-width: 1245px) {
        flex-wrap: nowrap;
        overflow-y: auto;
    }
`
export const StyledImgDivision = styled.figure`
    background-color: var(--grey-100);
    display: flex;
    justify-content: center;
    align-items: center;
    
`
export const StyledDetailsDivision = styled.figcaption`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
`
export const StyledImg = styled.img`
    background-color: var(--grey-100);
    background-size: cover;
    width: 177px;
    height: 177px;
`
export const StyledItem = styled.li`
    display: flex;
    flex-direction: column;
    min-width: 18.75rem;
    gap: 1rem;
    border: 2px solid var(--grey-100);
    border-radius: 8px;
    margin-bottom: 1rem;
    &:focus-within{
        border: 2px solid var(--color-primary);
        button{
            background-color: var(--color-primary);
            transition: 0.2s ease;
            &:hover{
                background-color: #93D7AF;
            }
        }
    }
`
export const StyledModal = styled.dialog`
    border: none;
    width: clamp(15rem, 80vw, 31.25rem);
    height: 27rem;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 8px;
    margin: 0 auto;
`
export const StyledModalSection = styled.section`
    height: 100vh;
    width: 100vw;
    background-color: rgba(0,0,0,0.6);
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
`