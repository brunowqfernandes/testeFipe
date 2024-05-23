import { Roboto } from 'next/font/google';

const roboto = Roboto({ 
    weight: [ '400', '500', '700'],
    subsets: ['latin']
})


export const globalStyles = {
    body: {
        '-webkit-font-smoothing': 'antialiased',
        backgroundColor: '#f9f6fc',
        color: '#424242',
        margin: 0,
        padding: 0
    },
    'body, input, textarea, button': {
        fontFamily: roboto.style.fontFamily,
        fontWeight: 400
    }
}