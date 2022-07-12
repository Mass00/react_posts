import React, {useMemo, useState} from 'react';

import './App.css';
import {CreatePost} from "./component/Post/CreatePost/CreatePost";
import {PostList} from "./component/PostList";
import {MyModal} from "./component/UI/MyModal";
import {MyButton} from "./component/UI/MyButton";
import {MyInput} from "./component/UI/MyInput";
export type postsTypes = {
    id: number
    text: string
    userName: string
    date: Date
}
function App() {
    const [posts, setPosts] = useState<postsTypes[]>([
        {
            id: 1,
            text: 'JavaScript — мультипарадигменный язык программирования. ' +
                'Поддерживает объектно-ориентированный, императивный и функциональный стили. ' +
                'Является реализацией спецификации ECMAScript. ',
            userName: 'Gordon Freeman',
            date: new Date()},
        {
            id: 2,
            text: "TypeScript — язык программирования, представленный Microsoft в 2012 году и позиционируемый как средство " +
                "разработки веб-приложений, расширяющее возможности JavaScript.",
            userName: 'Mormon Freeman',
            date: new Date()},
        {
            id: 3,
            text: 'React — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. ' +
                'React разрабатывается и поддерживается Facebook, Instagram',
            userName: 'Ratikaka',
            date: new Date()},

    ])
    const [searchQ, setSearchQ] = useState<string>('')
    const [active, setActive]= useState<boolean>(false)
    const filtredPosts = useMemo( () => posts.filter((i) => i.userName.includes(searchQ)),[searchQ, posts])
    const handlerOnChangeGetSearchQ = (e: React.ChangeEvent<HTMLInputElement>) =>
        setSearchQ(e.currentTarget.value.trim())
    const handlerOnClickActiveModal = () => setActive(true)
    const handlerOnClickDisableModal = () => setActive(false)
    const handlerOnClickAddPost = (text: string, userName: string) => {
        setPosts(prev => [...prev,{id: Date.now(),text, userName, date: new Date()}])
        setActive(false)
    }
    const handlerOnClickRemovePost = (id: number) => setPosts(prev => [...prev].filter(i => i.id !== id))
    const handlerOnClickSavePost = (id: number, text: string) => {
        console.log(text)
        setPosts(prev => [...prev].map(i => i.id === id ? {...i,text: text} : i))
        console.log(posts)
    }

  return (
    <div className="App">
        <div>
            <MyButton
                onClick={handlerOnClickActiveModal}
                className={'Btn'}
            >Создать пост
            </MyButton>
            <MyInput value={searchQ} onChange={handlerOnChangeGetSearchQ}></MyInput>
        </div>
        <MyModal
            active={active}
            handlerOnClickDisableModal={handlerOnClickDisableModal}
        >
            <CreatePost handlerOnClickAddPost={handlerOnClickAddPost}/>
        </MyModal>

        <PostList
            posts={filtredPosts}
            handlerOnClickRemovePost={handlerOnClickRemovePost}
            handlerOnClickSavePost={handlerOnClickSavePost}
        />
    </div>
  );
}

export default App;
