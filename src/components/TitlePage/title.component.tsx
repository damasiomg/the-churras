import { Title } from "../../styles/components/title.style";

interface TitlePageProps {
    title: string,
}

export function TitlePage({ title }: TitlePageProps){
    return(
        <Title>
            {title}
        </Title>
    )
}