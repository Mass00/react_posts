import React from 'react';
import st from "./PostHeader.module.css";
import {MyButton} from "../../UI/MyButton";

interface IPostSettings {
    id: number
    userName: string
    handlerOnClickEdit: () => void
    handlerOnClickRemovePost: (id: number) => void
}

export const PostHeader: React.FC<IPostSettings> = (props) => {
    const onClickEdit = () => {
        props.handlerOnClickEdit()
    }
    const onClickRemovePost = () => {
        props.handlerOnClickRemovePost(props.id)
    }
    return (
        <div className={st.postHeader}>
            <div className={st.userName}>{props.userName}</div>
            <div className={st.postSettings}>
                <div>
                    <MyButton className={st.Btn} onClick={onClickRemovePost}>Delete</MyButton>
                </div>
                <div>
                    <MyButton className={st.Btn} onClick={onClickEdit}>Edit</MyButton>
                </div>
            </div>
        </div>
    );
};