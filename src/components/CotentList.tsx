import styled from 'styled-components';
import { IContent, IContents } from './Board';
import Content from './Content';

const ContentListDiv = styled.div`
    // border: 1px solid black;
    height: 500px;
    margin: 10px 0px;
`;

interface IList{
    list: IContents,
    clickModEvent: (id: number, newText: string) => void
    clickDelEvent: (id: number) => void
}

export default function ContentList({list, clickDelEvent, clickModEvent}: IList){
    return (
        <ContentListDiv>
            {
                list.map((item: IContent) => (
                    <Content 
                        key={item.id} 
                        item={item}
                        clickModEvent={clickModEvent}
                        clickDelEvent={clickDelEvent}
                    />
                ))
            }
        </ContentListDiv>
    );
}