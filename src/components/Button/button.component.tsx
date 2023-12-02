import { ButtonContainer, ButtonInner } from "../../styles/components/button.style";

interface ButtonProps {
    label: string;
    action?: () => void;
}

export function Button({ label }: ButtonProps){
    return (
        <ButtonContainer>
            <ButtonInner>
                {label}
            </ButtonInner>
        </ButtonContainer>
        
    )
}