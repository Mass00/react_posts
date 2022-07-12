import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react';
import  st from './MyInput.module.css'
type defaultInputPropsTypes = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type customInputPropsTypes = defaultInputPropsTypes & {
    error?: string
}

export const MyInput:React.FC<customInputPropsTypes> = (
    {
        error, className, type,
        onChange,  ...rest
    }) => {

    const handlerOnChangeSetValue = (e:React.ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
    }

    const finalClassName = `${error ? st.error : st.default} ${className}`

    return <input
        type={type}
        className={finalClassName}
        onChange={handlerOnChangeSetValue}

        {...rest}
    />
}

