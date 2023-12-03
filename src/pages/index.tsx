import { FormEvent } from "react";
import { Button } from "../components/Button/button.component";
import { Input } from "../components/Input/input.component";
import { TitlePage } from "../components/Title/title.component";
import { AppInner, AppInnerContent } from "../styles/pages/app.style";
import { useRouter } from 'next/navigation'

export default function Home() {

  const router = useRouter();

  async function handleSubmit(e: FormEvent<HTMLFormElement>){
    e.preventDefault();
    return router.push('/list');
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
 