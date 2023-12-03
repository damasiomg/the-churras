import { useRouter } from 'next/router';
import { DetailsInner, DetailsInnerContent, DetailsTable, DetailsTableBody, DetailsTableTh, DetailsTableThItem, DetailsTableThItemDate, DetailsTableThItemDescription, DetailsTableThItemNumber } from '../../styles/pages/details.style';
import { TitlePage } from '../../components/Title/title.component';
import Image from 'next/image';
import peopleIcon  from '../../assets/icon_people.svg';
import moneyIcon  from '../../assets/icon_money.svg';
import { Checkbox } from '../../components/Checkbox/checkbox.component';

export default function Details(){
    const { query } = useRouter();
    return (
        <DetailsInner>
            <DetailsInnerContent>
                <TitlePage title='Detalhes do item'/>
                <DetailsTable>
                    <DetailsTableTh>
                        <DetailsTableThItem>
                            <DetailsTableThItemDate>01/12</DetailsTableThItemDate>
                            <DetailsTableThItemDescription>Niver do Gui</DetailsTableThItemDescription>
                        </DetailsTableThItem>
                        <DetailsTableThItem>
                            <DetailsTableThItemNumber>
                                <Image src={peopleIcon.src} height={peopleIcon.height} width={peopleIcon.width} alt=''/>
                                <label>15</label>
                            </DetailsTableThItemNumber>                            
                            <DetailsTableThItemNumber>
                                <Image src={moneyIcon.src} height={moneyIcon.height} width={moneyIcon.width} alt=''/>
                                <label>R$280</label>
                            </DetailsTableThItemNumber>
                        </DetailsTableThItem>
                    </DetailsTableTh>
                    <DetailsTableBody>
                        <Checkbox label='Alice Lima da Rocha Moreira' unitAmount={23} />
                    </DetailsTableBody>
                </DetailsTable>
            </DetailsInnerContent>
        </DetailsInner>
    )
}