import { styled } from "..";

export const CheckboxContainer = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottom: '1px solid $another',
    paddingTop: 10,


    label: {
        display: 'flex',
        position: 'relative',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 40,
        marginBottom: 12,
        cursor: 'pointer',
        '-webkit-user-select': 'none',
        '-moz-user-select': 'none',
        '-ms-user-select': 'none',
        'user-select': 'none'
    },

    input: {
        position: 'absolute',
        opacity: 0,
        cursor: 'pointer',
        height: 0,
        width: 0
    },

    span: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: 25,
        width: 25,
        backgroundColor: '$white',
        border: '3px solid $auxiliar',
        borderRadius: '50%',
        'box-sizing': 'border-box',
        '-moz-box-sizing': 'border-box',
        '-webkit-box-sizing': 'border-box',


    },


    'label input:checked ~ span': {
        backgroundColor: '$primary',
        border: 'none'
    },

    'span:after': {
        content: '',
        position: 'absolute',
        display: 'none'
    },


    'label input:checked ~ span:after': {
        display: 'block'
    },

    'label input:checked ~ p': {
        textDecoration: 'line-through'    
    }

 });

 