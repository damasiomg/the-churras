import { styled } from "..";

export const InputContainer = styled('div', {
    display: 'grid',
    gap: 15,
    marginBottom: 35,
 });

export const InputLabel = styled('label', {
   fontSize: 21,
   fontWeight: 'bold' 
});

export const InputField= styled('input', {
    height: 50,
    width: 280,
    borderRadius: 2,
    backgroundColor: '$white',
    border: 0,
    padding: '0 20px',
    fontSize: 18,
    fontStyle: 'italic',

    '&::placeholder': {
        color: '$black',
    }
});

