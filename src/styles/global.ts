import { globalCss } from ".";

export const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0,

    },

    body: {
        '-webkit-font-smoothing': 'antialiased',
        backgroundColor: '$black',
    },

    'body, input textarea, button': {
        fontFamily: 'Raleway',
        fontWeight: 500
    },

    a: {
        color: '$black'
    },

    'a:link': {
        textDecoration: 'none'
    },
      
    'a:visited': {
        textDecoration: 'none'
      }
})