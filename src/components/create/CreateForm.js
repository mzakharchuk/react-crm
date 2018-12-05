import React from 'react'
import { TextInput } from "../_common"

const CreateForm = ({onChange,onSave,onCancel}) => {
    return (
        <div className="jumbotron">
            <TextInput
                name={'name'}
                label={'Name bot'}
                onChange={onChange}
                />
            <TextInput
                name={'token'}
                label={'Token'}
                onChange={onChange}
                /> 
            <div className="button-cancel-save">
                <input 
                    type="submit" 
                    value="Cancel" 
                    className="btn btn-primary cancel"
                    onClick={onCancel}/>
                <input 
                    type="submit" 
                    value="Save" 
                    className="btn btn-primary save"
                    onClick={onSave}/>
            </div>       
        </div>
    )
}

export default CreateForm