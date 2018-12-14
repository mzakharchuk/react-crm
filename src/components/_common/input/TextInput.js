import React from 'react'

export const TextInput = ({name,label,value,onChange,error,placeholder,password = false,disabled = false}) =>{
    let wrapperClass = 'form-group'
    if(error && error.length>0)
        wrapperClass += ' '+ 'has-error'

    return(
        <div className={wrapperClass}>
            <label htmlFor={name}>{label}</label>
            <div className="field">
                <input
                    type={password?'password':'text'}
                    name={name}
                    disabled={disabled}
                    className="form-control"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}/>
                {error && <div className="alert alert-danger">{error}</div>}
            </div>
        </div>
    )
}