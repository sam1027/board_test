import Board from "../components/Board";
import styled from 'styled-components';

const MainDiv = styled.div`
    height: 80%;
    display: flex;
    align-items: center;
`;

export default function Main(){
    return (
        <MainDiv>
            <Board />
        </MainDiv>
    );
}