import React from 'react'
import './group.css'
import styled from 'styled-components';

const GroupMessage = styled.div`
    height: 100%;
`
const Block = styled.div`
    width: 171px;
    height: 48px;
    margin: 10px;
    padding: 5px;
    background: #d9bc7f;
    border-radius: 7px;
    cursor: pointer;
`

export const GroupsBlock = ({ groups, onSelect, selectedChat }) => {
    return(
        <GroupMessage>
           {groups.map(group =>
            <Block key={group.id} className={group.id === selectedChat ? 'active-block block':'block'} onClick={() => onSelect(group.id)}>
              <label>{group.name}</label>
            </Block>
            )}
        </GroupMessage>
    )
}