import { ButtonContainer, ButtonInner } from "../../styles/components/button.style";

interface ButtonProps {
    label: string;
    action?: () => void;
}

export function Button({ label, action }: ButtonProps){
    return (
        <ButtonContainer>
            <ButtonInner onClick={action}>
                {label}
            </ButtonInner>
        </ButtonContainer>
        
    )
}