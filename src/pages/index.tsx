import { FormEvent } from "react";
import { Button } from "../components/Button/button.component";
import { Input } from "../components/Input/input.component";
import { TitlePage } from "../components/Title/title.component";
import { AppInner, AppInnerContent } from "../styles/pages/app.style";

export default function Home() {

  async function handleSubmit(e: FormEvent<HTMLFormElement>){
    e.preventDefault();
    console.log('login');
  }

  return (
    <AppInner>
      <AppInnerContent onSubmit={handleSubmit} >
        <TitlePage title='Agenda de Churras'/>
        <Input label='Login' type='email' placeholder='e-mail' isRequired/>
        <Input label='Senha' type='password' placeholder='senha' isRequired/>
        <Button label='Entrar'/>
      </AppInnerContent>
    </AppInner>
  )
}
 