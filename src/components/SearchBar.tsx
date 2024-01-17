import { useState } from 'react';
import styled from 'styled-components';

const SearchBarDiv = styled.div`
    // border: 1px solid black;
    height: 50px;
    display: flex;
    align-items: center;
`;

const SearchBarInput = styled.input`
    width: 100%;
    height: 50%;
    font-size: large;
    margin-right: 10px;
`;

const SearchBarBtn = styled.button`
    margin-left: auto;
    width: 50px;
`;

interface SearchBarProps{
    clickSearchEvent: (text: string) => void,
}

export default function SearchBar({clickSearchEvent} : SearchBarProps){
    const [searchText, setSearchText] = useState("");

    function changeSearchText (text: string) {
        setSearchText(text);
    }

    return (
        <SearchBarDiv>
            <SearchBarInput type="text" onChange={(e) => changeSearchText(e.target.value)}/>
            <SearchBarBtn onClick={() => clickSearchEvent(searchText)}>검색</SearchBarBtn>
        </SearchBarDiv>
    );
}