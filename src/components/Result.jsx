import React from 'react'
import styled from '@emotion/styled';

const Container = styled.div`
background:#111F2E;
margin-top: 80px;
color:#fff;
font-family: lato,  sans-serif;
text-align: center;
border-radius: 15px;
padding: 1.5rem;
margin-bottom: -18rem;
`;
const ContainerFlex = styled.div`
display: flex;
flex-direction:column;

`;
const Imagen=styled.img`
margin-top: 20rem;
width: 100%;
justify-content: center;
`;

const Text = styled.p`
 font-size:18px;
    span{
        font-weight:bold;
    }

`;
const Precio = styled.p`
 font-size:30px;
 font-weight: bold;
span{
        font-weight:bold;
    }

`;

const Result = ({ result }) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = result;

    return (
        <ContainerFlex>            
            <Container>
                <Precio>The price of the day is :<span> {PRICE} </span></Precio>
                <Text>The highest price of the day is :<span> {HIGHDAY} </span></Text>
                <Text>The lowest price of the day is :<span> {LOWDAY} </span></Text>
                <Text>Variation last 24 hours :<span> {CHANGEPCT24HOUR} </span></Text>
                <Text>The price is :<span> {IMAGEURL} </span></Text>
                <Text>Last update :<span> {LASTUPDATE} </span></Text>
            </Container>
            <Imagen src={`https://cryptocompare.com/${IMAGEURL}`}
                alt='Image Crypto'
                />           

        </ContainerFlex>
    )
}

export default Result
