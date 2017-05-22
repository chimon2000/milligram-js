import { CSSProperties } from 'react';

export const bold: CSSProperties = {
    fontWeight: 'bold'
}

export const paragraph: CSSProperties = {
    marginTop: 0
}

const headerStyles: CSSProperties = {
    fontWeight: 300,
    letterSpacing: '-1.rem',
    marginBottom: '2.0rem',
    marginTop: 0
}

export const h1: CSSProperties = {
    ...headerStyles,
    fontSize: '4.6rem',
    lineHeight: 1.2
}

export const h2: CSSProperties = {
    ...headerStyles,
    fontSize: '3.6rem',
    lineHeight: 1.25
}

export const h3: CSSProperties = {
    ...headerStyles,
    fontSize: '2.8rem',
    lineHeight: 1.3
}

export const h4: CSSProperties = {
    ...headerStyles,
    fontSize: '2.2rem',
    letterSpacing: '.08rem',
    lineHeight: 1.35
}

export const h5: CSSProperties = {
    ...headerStyles,
    fontSize: '1.8rem',
    letterSpacing: '.05rem',
    lineHeight: 1.5
}

export const h6: CSSProperties = {
    ...headerStyles,
    fontSize: '1.6rem',
    letterSpacing: 0,
    lineHeight: 1.4
}