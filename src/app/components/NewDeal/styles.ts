import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    padding: 1rem;
    font-size: 1rem;
    margin-top: .4rem;

    form {
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid #979797;
    }
    form span {
        margin-bottom: 0.4rem;
    }
    form select, input, button {
        height: 2rem;
        margin-bottom: 1.2rem;
        text-indent: 0.4rem;
        border-radius: 0.3rem;
        background: transparent;
        border: 1px solid #979797;
    }
    form button {
        color: #FFFFFF;
        background-color: #333333;
        border: none;
        margin-bottom: 1.5rem;
    }
    form select, button {
        cursor: pointer;
    }
`;