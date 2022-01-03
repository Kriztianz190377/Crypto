import React from 'react';
import styled from '@emotion/styled';


const MensajeError = styled.div`
background-color:#b7322c;
color:#fff;
padding:10px 5px;
font-size:25px;
text-transform:uppercase;
font-family:'Lato', sans-serif;
font-weight:bold;
text-align:center;
border-radius:10px;
letter-spacing: 1.5px;
`

const Error = ({children}) => {
    return (
        <MensajeError>
            {children}
        </MensajeError>
    )
}

export default Error;
