import Image from "next/image";
import peopleIcon  from '../../assets/icon_people.svg';
import moneyIcon  from '../../assets/icon_money.svg';
import addIcon from '../../assets/add_icon.svg';
import { CardAddDescription, CardContainer, DateItem, DescriptionItem, DetailItem, DetailsCardContainer } from "../../styles/components/card.style";
import { theme } from "../../styles";

interface CardProps {
    id: number,
    date?: string,
    description?: string,
    guestsAmount?: number,
    totalAmount?: number,
    isAddCard?: boolean,
    addLabel?: string
}

export function Card({ id, date, description, guestsAmount, totalAmount, isAddCard = false, addLabel }: CardProps){

    return(
        isAddCard ? (
            <CardContainer style={{ backgroundColor: `${theme.colors.terciary}`, justifyContent: 'center', alignItems: 'center'}}>
                <Image src={addIcon.src} height={addIcon.height} width={addIcon.width} alt=''/>
                <CardAddDescription>{addLabel}</CardAddDescription>
            </CardContainer>
        ) : (
            <CardContainer>
                <DateItem>{date}</DateItem>
                <DescriptionItem>{description}</DescriptionItem>
                <DetailsCardContainer>
                    <DetailItem>
                        <Image src={peopleIcon.src} height={peopleIcon.height} width={peopleIcon.width} alt=''/>
                        <label>{guestsAmount}</label>

                    </DetailItem>
                    <DetailItem>
                        <Image src={moneyIcon.src} height={moneyIcon.height} width={moneyIcon.width} alt=''/>
                        <label>R${totalAmount}</label>
                    </DetailItem>
                </DetailsCardContainer>
            </CardContainer>
        )

    )
}