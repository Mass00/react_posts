import React from 'react';
interface IMyInput{
    type: string
    className: string
    value?: string
    onChange?:(e: React.ChangeEvent<HTMLInputElement>) => void
}
export const MyInput:React.FC<IMyInput> = ({...props}) => <input  {...props}/>

