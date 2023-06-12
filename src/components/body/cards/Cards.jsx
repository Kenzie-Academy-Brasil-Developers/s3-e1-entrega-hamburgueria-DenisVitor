import axios  from "axios";
import { useState, useEffect, useRef } from "react";
import { StyledDetailsDivision, StyledImg, StyledImgDivision, StyledItem, StyledList, StyledListSection, StyledModal, StyledModalSection } from "./styleCards";
import { Caption, HeadingThree, StyledPrice } from "../../../styles/typography";
import { StyledGreyMedium } from "../../../styles/buttons";
import { BurgerHeader } from "../../header/BurgerHeader";
import { Modal } from "../modal/Modal";
import { toast } from "react-toastify";

const foodItensApi = axios.create({
    baseURL: 'https://hamburgueria-kenzie-json-serve.herokuapp.com'
})

// eslint-disable-next-line react/prop-types
export function RenderCards(){
    const [foodCards, setFoodCards] = useState([])
    const [searchItem, setSearchItem] = useState('')
    const [modal, setModal] = useState(false)
    const [foodlist, setFoodList] = useState([])
    
    const addNewItem = (item) => {
        const filteredItens = foodlist.filter((food) => food.id !== item.id )
        toast.info('O item foi adicionado ao carrinho')
        setFoodList([...filteredItens, item])
        
    }
    useEffect(() => {
       const getFoodItens = async () => {
            try{
                const res = await foodItensApi.get('/products', {
                    params: {
                        name_like: searchItem 
                    }
                })
                setFoodCards(res.data)
            } catch(error) {
                console.error(error)
            }
        } 
        getFoodItens()
       
    }, [searchItem])
    const searchForItens = (searchItem) => {
        setSearchItem(searchItem)
    }
    

    return (
    <>
        <BurgerHeader counter={foodlist.length} searchValue={searchForItens} modal={modal} setModal={setModal} />
        <StyledListSection>
            <StyledList>
                {foodCards.map((card) => 
                    <StyledItem key={card.id}>
                        <StyledImgDivision>
                            <StyledImg src={card.img} alt={card.name} />
                        </StyledImgDivision>
                        <StyledDetailsDivision>
                            <HeadingThree>{card.name}</HeadingThree>
                            <Caption>{card.category}</Caption>
                            <StyledPrice>{card.price.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</StyledPrice>
                            <StyledGreyMedium onClick={() => addNewItem(card)}>Adicionar</StyledGreyMedium>
                        </StyledDetailsDivision>
                    </StyledItem>
                )}
            </StyledList>
        </StyledListSection>
                {modal ? ( 
                            <StyledModalSection>
                                <StyledModal>
                                    <Modal setFoodList={setFoodList} foodlist={foodlist} setModal={setModal} modal={modal}/>
                                </StyledModal>
                            </StyledModalSection>
                     )
                    : (null)}
    </>
    )
}
