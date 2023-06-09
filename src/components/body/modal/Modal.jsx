/* eslint-disable react/prop-types */
import { FaTrash } from "react-icons/fa";
import { HeadingFour, HeadingThree, Headline } from "../../../styles/typography";
import { StyledClearButton, 
         StyledCloseButton, 
         StyledFoodItem, 
         StyledFoodList, 
         StyledFoodPurchase, 
         StyledFoodText, 
         StyledMoney, 
         StyledRemoveButton, 
         StyledTitle 
    } from "./modalStyle";


export function Modal({setModal, modal, foodlist, setFoodList}){
    const totalValue = foodlist.reduce((acc, value) => acc + value.price, 0)
    const monetaryValue = totalValue.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})

    const removeItem = (productID) => {
        const itensToStay = foodlist.filter(item => item.id !== productID)
        setFoodList(itensToStay)
    }
    

    return(
        <>
            <StyledTitle>
                <HeadingFour>Carrinho de compras</HeadingFour>
                <StyledCloseButton onClick={() => setModal(!modal)}>X</StyledCloseButton>
            </StyledTitle>
            <section>
                <StyledFoodList >
                    {
                        foodlist.map((food)=>  
                            <StyledFoodItem key={food.id}>
                                <img src={food.img} alt={food.name} />
                                <StyledFoodText>
                                    <HeadingThree>{food.name}</HeadingThree>
                                    <StyledRemoveButton onClick={()=> removeItem(food.id)}><FaTrash/></StyledRemoveButton>
                                </StyledFoodText>
                            </StyledFoodItem >
                        )
                    }
                </StyledFoodList>
            </section>
            <StyledFoodPurchase>
                <Headline>Total</Headline>
                <StyledMoney>{monetaryValue}</StyledMoney>
            </StyledFoodPurchase>
                <StyledClearButton onClick={()=> setFoodList([])}>Remover todos</StyledClearButton>
        </>
    )
}
