import styled from "styled-components";

export const Container = styled.div`
    @media(max-width: 1111px) {
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
    }
    @media(min-width: 1112px) {
        height: 4.5rem;
        background-color: #E0E0E0;
        padding: 1rem;

        nav {
            max-width: 1112px;
            height: 100%;
            margin auto;
            display: flex;
            align-items: center;
            font-size: 1.3rem;
        }
        span {
            margin-left: 1.5rem;
            flex: 1;
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
        #menu-icon {
            display: none;
        }
    }
`;