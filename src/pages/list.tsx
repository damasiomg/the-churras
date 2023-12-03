import { GetServerSideProps } from "next";
import { Card } from "../components/Card/card.component";
import { TitlePage } from "../components/Title/title.component";
import {  GroupCards, ListInner, ListInnerContent } from "../styles/pages/list.style";
import { getChurras } from "../services/getChurras";
import { ChurrasItem } from "../dtos/churrasDtos";

interface ListProps {
  churrasList: ChurrasItem[],
  total: number
}
export default function List({ churrasList, total }: ListProps) {


  return (
    <ListInner>
      <ListInnerContent>
        <TitlePage title='Lista de Churras'/>
        <GroupCards>

          {churrasList.map(churras => {
            return(
              <Card 
                key={churras.id}
                id={churras.id}
                description={churras.description}
                guestsAmount={churras.guestsAmount}
                date={churras.date}
                totalAmount={churras.totalAmount}
                goTo={`/details/${churras.id}`}
              />
            )
          })}
          <Card 
            id={2}
            isAddCard
            addLabel='Adicionar Churras'
          />
        </GroupCards>
      </ListInnerContent>
    </ListInner>
  )
}

export const getServerSideProps: GetServerSideProps = async function(){

  try {
    const { data } = await getChurras();
    return {
      props: {
        churrasList: data.data,
        total: data.meta.resultCount
      }
    }

  } catch(error){
    return { props: null }
  }
}