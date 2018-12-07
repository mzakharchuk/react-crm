import React from 'react'
import {TextInput} from '../_common'

const RegisterForm = ({onChange,onSave}) => {

    return <form>
            <TextInput
                name='firstName'
                label='First Name'
                onChange={onChange}
            />
            <TextInput
                name='lastName'
                label='Last Name'
                onChange={onChange}
            />
            <TextInput
                name='username'
                label='User Name'
                onChange={onChange}
            />
            <TextInput
                name='password'
                label='Password'
                password={true}
                onChange={onChange}
            />
        <input 
            type="submit" 
            value="Save" 
            className="btn btn-primary"
            onClick={onSave}/>
        </form>
}

export default RegisterForm