import React, {useRef, useState} from 'react';
import st from "./Post.module.css";
import {MyButton} from "../UI/MyButton";
import {MyInput} from "../UI/MyInput";
import {PostHeader} from "./PostHeader/PostHeader";
import {PostContent} from "./PostContent/PostContent";

interface IPostListItem {
    id: number
    text: string
    userName: string
    handlerOnClickRemovePost: (id: number) => void
    handlerOnClickSavePost: (id: number, text: string) => void

}

export const Post: React.FC<IPostListItem> =
    ({id, text, userName, handlerOnClickRemovePost, handlerOnClickSavePost}) => {
    const [edit, setEdit] = useState<boolean>(false)

    const handlerOnClickEdit = () => {
        setEdit(true)
    }
    const handlerOnClickEndEdit = () => {
        setEdit(false)
    }

    return (
        <li>
            <div className={st.post}>
                <PostHeader
                    id={id}
                    userName={userName}
                    handlerOnClickEdit={handlerOnClickEdit}
                    handlerOnClickRemovePost={handlerOnClickRemovePost}
                />
                <PostContent
                    id={id}
                    edit={edit}
                    text={text}
                    handlerOnClickEndEdit={handlerOnClickEndEdit}
                    handlerOnClickSavePost={handlerOnClickSavePost}
                />
            </div>
        </li>
    );
};
