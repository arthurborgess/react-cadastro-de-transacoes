import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 80%;
    background-color: #333333;
    font-size: 1rem;

    .close {
        font-size: 2rem;
        color: #FFFFFF;
        margin: .5rem 1rem;
    }
    .navbar {
        margin-top: 3rem;
        height: 4.5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-align: right;
    }
    .navbar span {
        width: 100%;
        height: 2rem;
        text-decoration: none;
        padding-right: 1.5rem;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .navbar span:hover {
        background-color: #C4C4C4;
    }
    .navbar span a {
        text-decoration: none;
        color: #FFFFFF;
    }
    .navbar span a:hover {
        color: #333333;
    }
`;