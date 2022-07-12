import React from 'react';
interface IMyButton{
    className: string
    children?: string
    onClick?:(e: React.MouseEvent<HTMLButtonElement>) => void
}
export const MyButton:React.FC<IMyButton> =
    ({children,...rest}) => <button {...rest}>{children}</button>

