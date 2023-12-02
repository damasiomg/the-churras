import { InputContainer, InputField, InputLabel } from "../../styles/components/input.style";

interface InputProps {
    placeholder?: string,
    label: string,
    type: 'password' | 'number' | 'text' | 'email',
    isRequired?: boolean;
}

export function Input({ placeholder, label, type='text', isRequired = false }: InputProps){
    return (
        <InputContainer>        
            <InputLabel>{label}</InputLabel>
            <InputField type={type} placeholder={placeholder} required={isRequired}/>
        </InputContainer>
        
    )
}