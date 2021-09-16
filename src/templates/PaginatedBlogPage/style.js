import styled from "styled-components";

export const Content = styled.div`
    max-width: 1000px;
    margin: 0 auto;
`;

export const Post = styled.div`
    margin: 20px 0;
    a {
        font-weight: bold;
        font-size: 20px;
    }
`;

export const Pagination = styled.div`
    text-align: center;
    a {
        padding: 20px;
    }
`;

export const PageNumber = styled.div`
    width: 50px;
    height: 50px;
    background: ${({ isActive }) => (isActive ? "#333" : "black")};
    color: white;
    cursor: pointer;
    display: flex;
    font-size: ${({ isActive }) => (isActive ? "20px" : "16px")};
    font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};
    > a {
        color: white;
        text-align: center;
        line-height: 50px;
        text-decoration: none;
        display: block;
        height: 100%;
        width: 100%;
    }
    &:first-child {
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }
    &:last-child {
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }
    &:hover {
        background: #333;
    }
`;