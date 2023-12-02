import { styled } from "..";

export const ButtonContainer = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 30

 });

 export const ButtonInner = styled('button', {
    width: 325,
    height: 50,
    padding: '0 5',
    backgroundColor: '$black',
    fontSize: 18,
    fontWeight: 'bold',
    color: '$white',
    border: 'none',
    borderRadius: 18,

    transition: 'background-color .5s',
    '&:hover': {
        filter: 'opacity(.85)',
    }
 });
