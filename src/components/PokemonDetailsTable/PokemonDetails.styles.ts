import { CSSProperties } from 'react';

export const row: CSSProperties = {
    borderTop: '1px solid #ccc',
};

export const tableStyle: CSSProperties = {
    width: 250,
    borderCollapse: 'collapse',
    marginTop: '10px',
};

const baseTdStyle: CSSProperties = {
    padding: '15px',
    textAlign: 'center',
    verticalAlign: 'middle',
    borderBottom: '1px solid #ddd',
};

export const firstTdStyle: CSSProperties = {
    ...baseTdStyle,
    fontWeight: 'bold',
    width: '40%',
};

export const secondTdStyle: CSSProperties = {
    ...baseTdStyle,
    width: '60%',
};