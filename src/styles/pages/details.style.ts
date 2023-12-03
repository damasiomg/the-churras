import { styled } from "..";

export const DetailsInner = styled('div', {
    background: '$white',
    height: 'calc(100vh + 140px)',
    position: 'relative',
    top: -140,
    padding: '20px 0 '
});

export const DetailsInnerContent = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: 'flex-start',
    background: 'transparent',
    position: 'relative',
    top: -120,
    padding: '0 50px'
});

export const DetailsTable = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '$white',
    padding: 25,
    boxShadow: 'rgba(0, 0, 0, 0.09) 0px 1px 6px',
    width: '100%',
    maxWidth: 580,
    paddingBottom: 30

});

export const DetailsTableTh = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'

});

export const DetailsTableThItem = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: 10
});

export const DetailsTableThItemDate = styled('label', {
    fontSize: 28,
    fontWeight: 800,
    '@media screen and (max-width: 600px)': {
        fontSize: 18,
    }
    
});

export const DetailsTableThItemDescription = styled('label', {
    fontSize: 36,
    fontWeight: 700,
    '@media screen and (max-width: 600px)': {
        fontSize: 21,
    }
});

export const DetailsTableThItemNumber = styled('div', {
    fontSize: 21,
    fontWeight: 500,
    display: 'grid',
    gridTemplateColumns: '20px 1fr',
    gap: 10,
    alignItems: 'center',

    '@media screen and (max-width: 600px)': {
        fontSize: 18,
    }

});

export const DetailsTableBody = styled('div', {
    fontSize: 21,
    fontWeight: 700,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginTop: 35,
    '@media screen and (max-width: 600px)': {
        fontSize: 18,
    }
});