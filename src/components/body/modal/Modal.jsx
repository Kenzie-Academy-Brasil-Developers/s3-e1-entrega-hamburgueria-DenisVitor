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
import { useRef, useEffect } from "react";
import { StyledModal } from "../cards/styleCards";

export function Modal({setModal, modal, foodlist, setFoodList}){
    const totalValue = foodlist.reduce((acc, value) => acc + value.price, 0)
    const monetaryValue = totalValue.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
    const modalKey = useRef(null)
    const modalClose = useRef(null)
    
    useEffect(() => {
        const ClickOut = (e) => {
            if(!modalClose.current?.contains(e.target)){
                setModal(false)
            }
        }
        window.addEventListener('mousedown', ClickOut)
        return () => {
            window.removeEventListener('mousedown', ClickOut)
            
        }
    }, [])
    
    useEffect(()=> {
        const PressOut = (e) => {
            if(e.key === 'Escape'){
                setModal(false)
            }
        }
        window.addEventListener('keydown', PressOut)

        return() => {
            window.removeEventListener('keydown', PressOut)
        }

    },[])
    
    const removeItem = (productID) => {
        const itensToStay = foodlist.filter(item => item.id !== productID)
        setFoodList(itensToStay)
    }
    
    return(
        <StyledModal ref={modalClose}>
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
                                    <StyledRemoveButton ref={modalKey} onClick={()=> removeItem(food.id)}><FaTrash/></StyledRemoveButton>
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
        </StyledModal>
    )
}
