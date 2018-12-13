import React from 'react'
import {ListGroupItem,FormControl} from 'react-bootstrap'

export const EditForm = ({bot,editName,value,onSave,onCancel,onChange,onDelete,onEditMode}) => {
    return (
    <ListGroupItem>
        {bot.name === editName
        ?
        <div>
            <FormControl style={{width:'94%',display:'inline-block'}}
                type="text"
                value={value}
                placeholder="Enter text"
                onChange={onChange}/>
            <span style={{ fontSize:'18px', float:'right', padding:'10px 0'}}>
                <span className='color-edit' onClick={onSave}>
                    <i className="far fa-save"></i>
                </span>
                <span className='color-cancel' onClick={() => onCancel('')}>
                    <i className="fas fa-ban"></i>
                </span>
            </span>
        </div>

        :<div>
            <span>
                {bot.name}
            </span>
            {/* <span style={{position:'relative', float:'right'}}>
                <span className='color-edit' onClick={() => onEditMode(bot.name)}>
                    <i className="fas fa-pen"></i> 
                </span> 
                <span className='color-cancel' onClick={onDelete}>
                    <i className="far fa-trash-alt"></i>
                </span>
            </span> */}
        </div>}

    </ListGroupItem>
    )
}