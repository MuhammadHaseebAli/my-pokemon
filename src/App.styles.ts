import { CSSProperties } from 'react';

export const container: CSSProperties = {
    width: 'fit-content'
}

export const heading: CSSProperties = {
    backgroundColor: 'rgba(46,124,246,255)',
    color: 'white',
    height: 45,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 0,
    padding: 5,
    textTransform: 'capitalize',
};

export const loaderOverride: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };