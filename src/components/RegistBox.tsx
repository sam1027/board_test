import { useRef, useState } from 'react';
import styled from 'styled-components';

const RegistBoxDiv = styled.div`
    // border: 1px solid black;
    height: 100px;
    display: flex;
    align-items: center;
`;

const RegistTextarea = styled.textarea`
    width: 100%;
    height: 100%;
    margin-right: 10px;
    resize: none;
`;

const AddBtn = styled.button`
    margin-left: auto;
    width: 50px;
    height: 50px;
`;

interface ItemProps {
    clickEvent: (newText: string) => void,
}

export default function RegistBox ({clickEvent}: ItemProps){
    const [text, setText] = useState<string>("");

    function clickAddButton (){
        clickEvent(text);
        setText("");
    }

    return(
        <RegistBoxDiv>
            <RegistTextarea onChange={(e) => setText(e.target.value)} value={text} />
            <AddBtn onClick={() => clickAddButton()}>추가</AddBtn>
        </RegistBoxDiv>
    );
}