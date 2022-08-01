import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 3.5rem;
    padding: 1rem;
    font-size: 1rem;
    margin-top: .6rem;
    color: #000000;
    flex: 1;

    #title {
        font-size: 1.2rem;
        text-align: center;
    }
    .table-titles {
        margin-top: 1rem;
        display: flex;
        justify-content: space-between;
        padding: 0 2rem;
        margin-bottom: .3rem;
    }
    .deal-line {
        width: 100%;
        display: flex;
        font-size: 1rem;
        padding: .4rem .82rem;
        border-top: 1px solid #979797;
        border-bottom: 1px solid #979797;
    }
    .symbol {
        margin-right: .82rem;
    }
    .deal-title {
        flex: 1;
    }
    .total-line {
        display: flex;
        justify-content: space-between;
        padding: .5rem .82rem .5rem 2rem;
        margin-top: 2px;
        border-top: 1px solid #979797;
        margin-bottom: 3rem;
    }
    .total-amount {
        display: flex;
        flex-direction: column;
        text-align: right;
    }
    #win-loss {
        font-size: 0.625rem;
    }
`;