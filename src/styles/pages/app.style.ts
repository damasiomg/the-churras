import { styled } from "..";

export const Container =  styled('div', {
    maxWidth: 636,
    margin: '0 auto',
    height: '100vh',
    alignItems: 'center',


});

export const AppInner = styled('div', {
    background: '$primary',
    height: 'calc(100vh - 334px)',

});

export const AppInnerContent = styled('form', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: 'flex-start',
    background: 'transparent',
    position: 'relative',
    top: '-265px',
});

export const Header = styled('header', {
    backgroundColor: '$primary',
    height: 334,
});

