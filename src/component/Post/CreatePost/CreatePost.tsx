import React, {useState} from 'react';
import {MyInput} from "../../UI/MyInput";
import st from './CreatePost.module.css'
import {MyButton} from "../../UI/MyButton";

interface IPostInputForm {
    handlerOnClickAddPost: (text: string, userName: string) => void
}

export const CreatePost:React.FC<IPostInputForm> = (props) => {
    const [inputValue, setInputValue] = useState<string>('')
    const [error, setError] = useState<string>('')
    const handlerOnChangeGetInputValue = (e: React.ChangeEvent<HTMLInputElement>) =>
            e.currentTarget.value.trim() && setInputValue(e.currentTarget.value.trim())

    const handlerOnClickSendPost = () => {
        if(inputValue) {
            props.handlerOnClickAddPost(inputValue, 'Gordon Freeman')
            setInputValue('')
            setError('')
        }else {
            setError('Title is required')
        }

    }
    return (
        <>
        <div className={st.postInputForm}>
            <MyInput
                type={'text'}
                value={inputValue}
                error={error}
                className={!error ? st.postInput : st.errorInput}
                onChange={handlerOnChangeGetInputValue}
            />
            <MyButton
                className={st.postButton}
                onClick={handlerOnClickSendPost}
            >Отправить</MyButton>

        </div>
            {error ? <div style={{padding: '5px', color: 'red'}}><span>{error}</span></div> : <></>}
        </>
    );
};