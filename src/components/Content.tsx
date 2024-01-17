import { useState } from 'react';
import styled from 'styled-components';
import { IContent } from './Board';

const ContentDiv = styled.div`
    border: 3px solid pink;
    display: flex;
    align-items: center;
    padding: 0px 5px;
    margin-bottom: 3px;
`;

const ContentText = styled.p`
    font-style: italic;
`;

const Button = styled.button<{$ml: string}>`
    margin-left: ${(props) => props.$ml};
`;

const ContentTextarea = styled.textarea`
    width: 85%;
    height: 50px;
    resize: none;
`;

interface IItem{
    item: IContent
    clickModEvent: (id: number, newText: string) => void
    clickDelEvent: (id: number) => void
}

export default function Content({item, clickDelEvent, clickModEvent}: IItem){
    const [isModifying, setIsModifying] = useState(false);
    const [newText, setNewText] = useState("");

    function clickModifyButton(id: number){
        setIsModifying(!isModifying);

        if(!isModifying){
            setNewText(item.text);
        }else{
            clickModEvent(id, newText);
        }
    }

    function handleChangeText (newText: string) {
        setNewText(newText);
    }

    return(
        <ContentDiv>
            { isModifying ? <ContentTextarea value={newText} onChange={(e) => handleChangeText(e.target.value)} /> : <ContentText>{item.text}</ContentText> }
            <Button $ml="auto" onClick={() => clickModifyButton(item.id)}>{isModifying? "완료" : "수정"}</Button>
            <Button $ml="5px" onClick={() => clickDelEvent(item.id)}>삭제</Button>
        </ContentDiv>
    );
}