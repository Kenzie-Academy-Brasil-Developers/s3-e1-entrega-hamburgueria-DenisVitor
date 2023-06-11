import { useState } from "react"
import { FaShoppingCart } from "react-icons/fa"
import { SlMagnifier } from "react-icons/sl"
import { StyledHeader, StyledHeaderCounter, StyledHeaderForm, StyledHeaderImg, StyledHeaderInput, StyledHeaderSection, logo } from './HeaderStyle'

// eslint-disable-next-line react/prop-types
export function BurgerHeader({ searchValue, modal, setModal, counter }) {
    const styleCartLogo = { color: "#BDBDBD", fontSize: "25px"}
    const styleMagnifierLogo = { color: "#FFFFFF", fontSize: "16px", "strokeWidth": "5rem"}
    const [searchItem, setSearchItem] = useState('')

    const foodSearch = (evt) => {
        evt.preventDefault()
        searchValue(searchItem)
        
    }

    return(
        <StyledHeader>
            <StyledHeaderSection>
                <StyledHeaderImg src={logo} alt="Burger Kenzie" />
                <StyledHeaderCounter onClick={() => setModal(!modal)}>
                    <FaShoppingCart style={styleCartLogo}/>
                    <p>{counter}</p>
                </StyledHeaderCounter>
            </StyledHeaderSection>
            <StyledHeaderForm onSubmit={foodSearch}>
                <StyledHeaderInput placeholder="Digitar pesquisa" type='text' onChange={(evt) => setSearchItem(evt.target.value)} />
                <button type="submit"><SlMagnifier style={styleMagnifierLogo}/></button>
            </StyledHeaderForm>
        </StyledHeader>
    )
}