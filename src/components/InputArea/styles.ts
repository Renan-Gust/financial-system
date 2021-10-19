import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    background-color: #FFF;
    box-shadow: 0 0 5px #CCC;
    border-radius: 10px;

    padding: 20px;
    margin-top: 20px;
`;

export const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const BlockInput = styled.div`
    display: flex;
    flex-direction: column;
    width: 220px;

    input{
        width: 100%;
        height: 30px;

        padding: 0 5px;

        border: 1px solid lightblue;
        border-radius: 5px;
    }
`;

export const Label = styled.label`
    margin-bottom: 10px;
`;

export const Select = styled.select`
    width: 100%;
    height: 30px;

    padding: 0 5px;

    border: 1px solid lightblue;
    border-radius: 5px;
`;

export const Button = styled.button`
    width: 50%;
    height: 30px;

    padding: 0 5px;
    margin: 20px auto;

    border: 1px solid lightblue;
    border-radius: 5px;

    background-color: lightblue;
    color: black;
    cursor: pointer;

    &:hover {
        background-color: blue;
        color: white;
    }
`;