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
    
    @media(min-width: 1112px) {
        width: 22rem;
        position: initial;
        background-color: #FFF;

        .close {
            display: none;
        }
        .navbar {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }
        .navbar span {
            margin: 0;
            padding: 0 1.2rem;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;

            &:hover {
                background-color: initial;
            }
        }
        .navbar span a {
            color: #333;
        }
        .line {
            height: 50%;
            border: 1px solid #979797;
        }

    }
`;