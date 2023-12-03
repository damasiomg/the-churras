/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';
import { DetailsInner, DetailsInnerContent, DetailsTable, DetailsTableBody, DetailsTableTh, DetailsTableThItem, DetailsTableThItemDate, DetailsTableThItemDescription, DetailsTableThItemNumber } from '../../styles/pages/details.style';
import { TitlePage } from '../../components/Title/title.component';
import Image from 'next/image';
import peopleIcon  from '../../assets/icon_people.svg';
import moneyIcon  from '../../assets/icon_money.svg';
import { Checkbox } from '../../components/Checkbox/checkbox.component';
import { ChurrasItemDetails } from '../../dtos/churrasDtos';
import { getDetails } from '../../services/getDetails';
import { useEffect, useState } from 'react';

interface DetailsProps extends ChurrasItemDetails {}


export default function Details(){

    const { query } = useRouter();
    const [detailsData, setDetailsData] = useState({} as DetailsProps)

    const getDataProps = async function(){

        try {
            const { data } = await getDetails(query?.id as string);
            setDetailsData(data.data[0]);
        } catch(error){
            throw(error)
        }
    }


    useEffect(() => {
        getDataProps();
    }, []);

    return (
        <DetailsInner>
            <DetailsInnerContent>
                <TitlePage title='Detalhes do evento'/>
                {!!detailsData && detailsData?.guests?.length && <DetailsTable>
                    <DetailsTableTh>
                        <DetailsTableThItem>
                            <DetailsTableThItemDate>{detailsData.date}</DetailsTableThItemDate>
                            <DetailsTableThItemDescription>{detailsData.description}</DetailsTableThItemDescription>
                        </DetailsTableThItem>
                        <DetailsTableThItem>
                            <DetailsTableThItemNumber>
                                <Image src={peopleIcon.src} height={peopleIcon.height} width={peopleIcon.width} alt=''/>
                                <label>{detailsData.guestsAmount}</label>
                            </DetailsTableThItemNumber>                            
                            <DetailsTableThItemNumber>
                                <Image src={moneyIcon.src} height={moneyIcon.height} width={moneyIcon.width} alt=''/>
                                <label>R${detailsData.totalAmount}</label>
                            </DetailsTableThItemNumber>
                        </DetailsTableThItem>
                    </DetailsTableTh>
                    <DetailsTableBody>
                        {detailsData?.guests?.map((item, index) => (<Checkbox key={index} label={item.name} unitAmount={item.amount} />))}
                    </DetailsTableBody>
                </DetailsTable>}
            </DetailsInnerContent>
        </DetailsInner>
    )
}