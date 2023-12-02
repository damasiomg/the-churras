import { useRouter } from 'next/router';
export default function Details(){
    const { query } = useRouter();
    return (
        <h1>Details...{ JSON.stringify(query)}</h1>
    )
}