import { CheckboxContainer } from "../../styles/components/checkbox.style";
import { convertToBrl } from "../../utils/numberCurrence";

interface CheckboxProps {
    label: string;
    unitAmount: number;
}

export function Checkbox({ label, unitAmount }: CheckboxProps){
    return (

        <div>
            <CheckboxContainer>
                <label>{label}
                    <input type="checkbox"/>
                    <span></span>
                    <p>{convertToBrl(unitAmount)}</p>
                </label>
            </CheckboxContainer>

            <CheckboxContainer>
                <label>{label}
                    <input type="checkbox"/>
                    <span></span>
                    <p>{convertToBrl(unitAmount)}</p>
                </label>
            </CheckboxContainer>
        </div> 
    )
}