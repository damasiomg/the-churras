import { styled } from "..";

export const CardContainer = styled('a', {
    display: 'flex',
    flexDirection: 'column',
    width: 220,
    height: 140,
    backgroundColor: '$white',
    padding: 25,
    boxShadow: 'rgba(0, 0, 0, 0.09) 0px 1px 6px',
    borderRadius: 2,
    transition: 'filter .5s',
    '&:hover': {
        filter: 'brightness(.98)',
    }
});

export const DateItem = styled('label', {
    fontSize: 28,
    fontWeight: 800,     
});

export const DescriptionItem = styled('label', {
    fontSize: 21,
    fontWeight: 700,
    marginTop: 5  
});

export const DetailsCardContainer = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 55,
    justifyContent: 'space-between'
    
});

export const DetailItem = styled('div', {
    display: 'grid',
    gridTemplateColumns: '15px 1fr',
    alignItems: 'center',
    fontSize: 21,
    fontWeight: 500,
    gap: 10
});


export const CardAddDescription = styled('label', {
    fontSize: 21,
    fontWeight: 700,
    marginTop: 10  
});