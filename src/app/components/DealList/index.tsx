import { useEffect, useState } from "react";
import { IDeal } from "../../types/Deal";
import { Container } from "./styles";

type Props = {
    dealData: IDeal[];
    setDealData: (dealData: IDeal[]) => void;
}

export const DealList = ({ dealData, setDealData }: Props) => {

    const [total, setTotal] = useState(0);
    const [profitOrLoss, setProfitOrLoss] = useState('');

    useEffect(() => {
        const deals = JSON.parse(localStorage.getItem('deal') || '[]');
        { deals && setDealData(deals) };
    }, []);

    useEffect(() => {
        var purchase = 0;
        var sell = 0;
        var total = 0;
        for (let i in dealData) {
            if (dealData[i].dealType === 'buy') {
                purchase += Number.parseFloat(dealData[i].dealValue.replace(/[^0-9]/g, ''));
            } else {
                sell += Number.parseFloat(dealData[i].dealValue.replace(/[^0-9]/g, ''))
            }
        }
        setTotal(sell - purchase);
        if (total > 0) {
            setProfitOrLoss('[LUCRO]');
        }
        if (total < 0) {
            setProfitOrLoss('[PREJUÍZO]');
        }
    }, [dealData, setDealData]);

    const moneyFormat = (amount: number) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(amount);
    }

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
                {dealData.map((deal: IDeal, index: number) => (
                    <div className="deal-line" key={index}>
                        <span className="symbol">{deal.dealType === 'buy' ? '–' : '+'}</span>
                        <span className="deal-title">{deal.dealName}</span>
                        <span className="deal-value">{deal.dealValue}</span>
                    </div>
                ))}

                <div className="total-line">
                    <span><strong>{dealData.length > 0 ? 'Total' : 'Nenhuma transação cadastrada'}</strong></span>
                    <div className="total-amount">
                        <span><strong>{dealData.length > 0 ? moneyFormat(total / 100) : ''}</strong></span>
                        <span id="win-loss">{profitOrLoss}</span>
                    </div>
                </div>
            </div>
        </Container>
    );
}