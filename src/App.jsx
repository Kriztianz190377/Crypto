import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import FromCrypto from './components/FromCrypto';
import Result from './components/Result';
import Spiner from './components/Spiner';
import ImageCripto from './img/crypto1.gif'


const Container = styled.div`
max-width:900px;
margin: 0 auto;
width:90%;
@media (min-width:992px){
  display:grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap:2rem;
}`;
const Image = styled.img`
max-width:400px;
width:100%;
margin: 0 auto;
margin-top: 15rem;
border-radius:50px;
 opacity:0;
 transition:all 0.5s; 
 &:hover{opacity:1};
`;
const Heading = styled.h1`
font-family: 'Play', sans-serif;
color:#fff;
background:#111F2E;
border-radius:10px;
text-align:centre;
font-weight:700;
font-size:40px;
letter-spacing:1.1px;
text-align: center;
margin-bottom:50px;
margin-top:80px;
&::after{
  content: '';
  margin-top:1rem;
  width:100%;
  height:10px;
  background-color:#66A2FE;
  display:block;
}`;
const Spinner = styled.div`
display: flex;
width: 100%;
margin:0 auto;
justify-content: center;
margin-top: 10rem;
transform: scale(5);
`;
function App() {
  const [coins, setCoins] = useState({});
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(true);

  useEffect(() => {
    if (Object.keys(coins).length > 0) {
      const quoteCrypto = async () => {
        setLoading(true);
        setResult({});

        const { currencie, cryptoCurrency } = coins;

        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCurrency}&tsyms=${currencie}`

        const reponse = await fetch(url);
        const result = await reponse.json();

        setResult(result.DISPLAY[cryptoCurrency][currencie]);
        setImage(false);
        setLoading(false);
      }
      quoteCrypto()
    }
  }, [coins])

  return (
    <Container>
      <div>

        {result.PRICE && <Result
          result={result}
        />}

        <Spinner>
          {loading && <Spiner />}
        </Spinner>
        {image ? <Image
          src={ImageCripto}
          alt="Crypto Logo"
        /> : null}

      </div>
      <div>
        <Heading>Cryptocurrency Quote at the Moment</Heading>
        <FromCrypto
          setCoins={setCoins}
        />

      </div>

    </Container>
  )
}

export default App
