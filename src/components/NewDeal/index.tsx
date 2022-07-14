import React, { useState } from "react";
import { InputCurrency } from "./InputCurrency";
import { Container } from "./styles";

export const NewDeal: React.FC = () => {

    const formSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formSubmitData = new FormData(event.currentTarget);

        const dealType = formSubmitData.get('dealType');
        const dealName = formSubmitData.get('dealName');
        const dealValue = formSubmitData.get('dealValue');

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
            <form onSubmit={formSubmit}>
                <span>Tipo de transação</span>
                <select name="dealType" id="deal-type">
                    <option value="buy">Compra</option>
                    <option value="sell">Venda</option>
                </select>
                <span>Nome da mercadoria</span>
                <input name="dealName" type="text" placeholder="Nome da mercadoria" required autoComplete="off" />
                <span>Valor</span>
                <InputCurrency />
                <button type="submit">Adicionar transação</button>
            </form>
        </Container>
    );
}