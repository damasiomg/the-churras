import { styled } from "..";

export const ListInner = styled('div', {
    background: '$white',
    height: 'calc(100vh + 140px)',
    position: 'relative',
    top: -140,
    padding: '20px 0'
});

export const ListInnerContent = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: 'flex-start',
    background: 'transparent',
    position: 'relative',
    top: -120,
});

export const GroupCards = styled('div', {
    display: 'grid',
    flexDirection: 'column',
    gridTemplateColumns: '1fr 1fr',
    gap: 30,
    '@media screen and (max-width: 600px)': {
        gridTemplateColumns: '1fr',
    }
});



