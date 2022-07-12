import React, {useState} from 'react';
import {MyInput} from "../../UI/MyInput";
import st from './CreatePost.module.css'
import {MyButton} from "../../UI/MyButton";

interface IPostInputForm {
    handlerOnClickAddPost: (text: string, userName: string) => void
}

export const CreatePost:React.FC<IPostInputForm> = (props) => {
    const [inputValue, setInputValue] = useState<string>('')
    const handlerOnChangeGetInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    }
    const handlerOnClickSendPost = () => {
        props.handlerOnClickAddPost(inputValue, 'Gordon Freeman')
    }
    return (
        <div className={st.postInputForm}>
            <MyInput
                type={'text'}
                value={inputValue}
                className={st.postInput}
                onChange={handlerOnChangeGetInputValue}
            />
            <MyButton
                className={st.postButton}
                onClick={handlerOnClickSendPost}
            >Отправить</MyButton>
        </div>
    );
};