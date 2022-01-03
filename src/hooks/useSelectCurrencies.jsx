import {useState} from 'react';
import styled from '@emotion/styled/';

const Label = styled.label`
background:#111F2E;
color:#fff; 
font-family: 'Play', sans-serif;
display:block;
font-size:1.5rem;
font-weight:700;
text-transform:uppercase;
margin: 1.3rem 0;
padding: .8rem 0;
border-radius: 10px;
text-align: center;
`;
const Select = styled.select`
width:100%;
font-size:1.2rem;
padding:1rem;
border-radius:10px;
display:block;
-webkit-appearannce:none;
border:none;
`
const useSelectCurrencies = (label, options) => {

    const [state, setState] = useState('')

    const SelectCurrencias = () => (

        <>
            <Label>{label}</Label>
            <Select
                value={state}
                onChange={(e)=>setState(e.target.value)}
            >
                <option value="">Selection</option>

                {options.map(option => (

                    <option
                        key={option.id}
                        value={option.id}
                    >{option.name}</option>

                ))}
            </Select>
        </>
    )
    return [state, SelectCurrencias];
}

export default useSelectCurrencies;
