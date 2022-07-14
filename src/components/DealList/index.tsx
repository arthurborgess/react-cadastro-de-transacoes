import React, { useEffect, useState } from "react";
import { Container } from "./styles";

interface Deal {
    dealType: string;
    dealName: string;
    dealValue: string;
}

export const DealList: React.FC = () => {
    const [dealList, setDealList] = useState([]);

    React.useEffect(() => {
        const deals = JSON.parse(localStorage.getItem('deal') || '[]');
        { deals && setDealList(deals) };
    }, []);

    return (
        <Container>
            <div id="title">
                <span><strong>Extrato de transações</strong></span>
            </div>
            <div className="deal-list-table">
                <div className="table-titles">
                    <span><strong>Mercadoria</strong></span>
                    <span><strong>Valor</strong></span>
                </div>
                {dealList.map((deal: Deal, index: number) => (
                    <div className="deal-line" key={index}>
                        <span className="symbol">{deal.dealType === 'Compra' ? '-' : '+'}</span>
                        <span className="deal-title">{deal.dealName}</span>
                        <span className="deal-value">{deal.dealValue}</span>
                    </div>
                ))}
                {dealList !== [] ?
                    (<div className="total-line">
                        <span><strong>Total</strong></span>
                        <div className="total-amount">
                            <span><strong>R$ 12.999,99</strong></span>
                            <span id="win-loss">[LUCRO]</span>
                        </div>
                    </div>) :
                    (<span>Nenhuma transação cadastrada</span>)
                }
            </div>
        </Container>
    );
}