import React from 'react'
import './group.css'

export const GroupsBlock = ({groups,onSelect}) =>{
    return(
        <div className="message-block">
           {groups.map(group =>
            <div key={group.id} className="block" onClick={() => onSelect(group.id)}>
              <label>{group.name}</label>
            </div>
            )}
        </div>
    )
}