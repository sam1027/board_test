import { useState } from 'react';
import styled from 'styled-components';
import ContentList from './CotentList';
import RegistBox from './RegistBox';
import SearchBar from './SearchBar';

const BoardDiv = styled.div`
    border: 1px solid gray;
    border-radius: 15px;
    radius: 1px;
    width: 40%;
    height: calc(100% - 50px);
    margin: auto;
    padding: 10px 10px;
`;

export interface IContent{
    id: number,
    text: string,
}

export interface IContents extends Array<IContent> {}

export default function Board () {
    const [list, setList] = useState<IContents>([
        {
            id: 0,
            text: 'test 1',
        },
        {
            id: 1,
            text: 'testaaa  2',
        },
        {
            id: 2,
            text: 'testbbb 3',
        },
    ]);

    let nextIdx = list.length + 1;

    function handleClickAdd (newText: string) {
        if(newText === "") return ;

        setList([...list, {
            id: nextIdx,
            text: newText,
        }]);
    }

    function handleClickDel (id: number){
        const delList = list.filter(item => item.id !== id);
        setList(delList);
    }

    function handleClickMod (id: number, newText: string){
        const modList = list.map(item => {
            if(item.id === id) item.text = newText;
            return item;
        })
        setList(modList);
    }

    function handleClickSearch (searchText: string) {
        if(searchText === "") return ;

        const searchedList = list.filter(item => item.text.includes(searchText));
        setList(searchedList);
    }

    return (
        <BoardDiv>
            <SearchBar clickSearchEvent={handleClickSearch}/>
            <ContentList 
                list={list} 
                clickDelEvent={handleClickDel} 
                clickModEvent={handleClickMod} 
            />
            <RegistBox clickEvent={handleClickAdd}/>
        </BoardDiv>
    );
}