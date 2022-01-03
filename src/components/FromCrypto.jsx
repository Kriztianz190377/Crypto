import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import useSelectCurrencies from '../hooks/useSelectCurrencies';
import Error from './Error';
import { currencies } from '../data/courrencies';


const InputSubmit = styled.input`
    background-color: #66a2fe;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-weight: bold;
    text-transform: uppercase;
    margin-top: 30px;
    font-size: 20px;
    border-radius: 10px;
    transition: background-color .3s ease;

    &:hover {
        background-color: #326AC0;
        cursor:pointer;
        }
`;

const FromCrypto = ({ setCoins}) => {

    const [cryptos, setCryptos] = useState([]);
    const [error, setError] = useState(false);

    const [currencie, SelectCurrencies] = useSelectCurrencies('Choose Your Currency', currencies);
    const [cryptoCurrency, SelectCryptoCurrency] = useSelectCurrencies('Choose Your Cryptocurrency', cryptos);

    useEffect(() => {

        const consultAPI = async () => {

            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
            const reponse = await fetch(url);
            const result = await reponse.json();

            const arrayCrypto = result.Data.map(crypto => {

                const objet = {
                    id: crypto.CoinInfo.Name,
                    name: crypto.CoinInfo.FullName
                }
                return objet;
            })
            setCryptos(arrayCrypto);
        }
        consultAPI();
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();

        if ([currencie, cryptoCurrency].includes('')) {
            setError(true);
            return;
        }
        setError(false);
        setCoins({
            currencie,
            cryptoCurrency
        })
    }
    

    return (
        <form
            onSubmit={handleSubmit}
        >

            {error ? <Error><p>All fields are required</p></Error> : null}

            < SelectCurrencies />
            <SelectCryptoCurrency />

            <InputSubmit
                type="submit"
                value="Calculate" />

        </form>
    )
}

export default FromCrypto;
