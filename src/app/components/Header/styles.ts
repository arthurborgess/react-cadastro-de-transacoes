import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 3.5rem;
    background-color: #E0E0E0;
    padding: 1rem;

    nav {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1.3rem;
    }
    #menu-icon {
        width: 1.2rem;
        height: 0.8rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    #menu-icon div {
        width: 100%;
        height: 2px;
        background: #333333;
    }
`;