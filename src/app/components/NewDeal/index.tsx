import { FormEvent, useState } from "react";
import { IDeal } from "../../types/Deal";
import { InputCurrency } from "./InputCurrency";
import { Container } from "./styles";

type Props = {
    dealData: IDeal[];
    setDealData: (dealData: IDeal[]) => void;
}

export const NewDeal = ({ dealData, setDealData }: Props) => {

    const [dealType, setDealType] = useState('buy')
    const [dealName, setDealName] = useState('');
    const [dealValue, setDealValue] = useState('');

    const addDeal = (event: FormEvent) => {
        event.preventDefault();

        let newList = [...dealData];
        newList.push({
            dealType: dealType,
            dealName: dealName,
            dealValue: dealValue
        });

        setDealData(newList);

        const deal = JSON.parse(localStorage.getItem('deal') || '[]');
        deal.push({
            dealType: dealType,
            dealName: dealName,
            dealValue: dealValue
        });
        localStorage.setItem('deal', JSON.stringify(deal));
    }

    return (
        <Container>
            <form onSubmit={addDeal}>
                <span>Tipo de transação</span>
                <select
                    id="deal-type"
                    value={dealType}
                    onChange={e => setDealType(e.target.value)}
                >
                    <option value="buy">Compra</option>
                    <option value="sell">Venda</option>
                </select>
                <span>Nome da mercadoria</span>
                <input
                    type="text"
                    placeholder="Nome da mercadoria"
                    required={true}
                    autoComplete="off"
                    onChange={e => setDealName(e.target.value)}
                />
                <span>Valor</span>
                <InputCurrency dealValue={dealValue} setDealValue={setDealValue} />
                <button type="submit">Adicionar transação</button>
            </form>
        </Container>
    );
}