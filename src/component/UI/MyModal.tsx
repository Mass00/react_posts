import React, {useState} from 'react';
import st from './MyModal.module.css'
interface IMyModal {
    children: React.ReactNode
    active: boolean
    handlerOnClickDisableModal: () => void
}
export const MyModal:React.FC<IMyModal> = (
    {
        children,active,
        handlerOnClickDisableModal
    }) => {

    const finalStyle = active ? [st.myModal, st.active].join(' ') : st.myModal
    return (
        <div className={finalStyle} onClick={handlerOnClickDisableModal}>
            <div className={st.myModalContent} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

