import React, {useState} from 'react';
import st from "../Post.module.css";
import {MyButton} from "../../UI/MyButton";
interface IPostContent{
    id: number
    edit: boolean
    text: string
    handlerOnClickEndEdit: () => void
    handlerOnClickSavePost: (id: number, text: string) => void
}

export const PostContent:React.FC<IPostContent> =
    ({id, edit, text, handlerOnClickEndEdit, handlerOnClickSavePost}) => {
    const [postText, setPostText] = useState<string>(text)
    const handlerOnChangeSetPost = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        setPostText(e.currentTarget.value)
    }
    const handlerOnClickSendSavedPost = () => {
        handlerOnClickSavePost(id,postText)
        handlerOnClickEndEdit()

    }
    return (
        <>
        {edit ?
                <>
                    <div className={st.content}>
                        <textarea value={postText} onChange={handlerOnChangeSetPost}><span>{postText}</span></textarea>
                    </div>
                    <MyButton
                        className={st.postBtn}
                        onClick={handlerOnClickEndEdit}
                    >Cancel
                    </MyButton>
                    <MyButton
                        className={st.postBtn}
                        onClick={handlerOnClickSendSavedPost}
                    >Save
                    </MyButton>
                </>
                :
                <>
                    <div className={st.content}>
                        <span>{text}</span>
                    </div>
                    <div className={st.footer}>
                        <span>Like</span>
                    </div>
                </>
        }
        </>
    );
};

