import { Card } from "../components/Card/card.component";
import { TitlePage } from "../components/Title/title.component";
import {  GroupCards, ListInner, ListInnerContent } from "../styles/pages/list.style";

export default function List() {

  return (
    <ListInner>
      <ListInnerContent>
        <TitlePage title='Lista de Churras'/>
        <GroupCards>

          <Card 
            id={1}
            description='Niver do Gui'
            guestsAmount={6}
            date='01/12'
            totalAmount={280}
          />
          <Card 
            id={2}
            description='Niver do Gui'
            guestsAmount={6}
            date='01/12'
            totalAmount={280}
          />

          <Card 
            id={3}
            description='Niver do Gui'
            guestsAmount={6}
            date='01/12'
            totalAmount={280}
          />

          <Card 
            id={4}
            isAddCard
            addLabel='Adicionar Churras'
          />
        </GroupCards>
      </ListInnerContent>
    </ListInner>
  )
}
 