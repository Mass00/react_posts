import React, {useState} from 'react';

import './App.css';
import {CreatePost} from "./component/Post/CreatePost/CreatePost";
import {PostList} from "./component/PostList";
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
    const handlerOnClickAddPost = (text: string, userName: string) => {
        setPosts(prev => [...prev,{id: Date.now(),text, userName, date: new Date()}])
    }
    const handlerOnClickRemovePost = (id: number) => {
        setPosts(prev => [...prev].filter(i => i.id !== id))
    }
    const handlerOnClickSavePost = (id: number, text: string) => {
        console.log(text)
        setPosts(prev => [...prev].map(i => i.id === id ? {...i,text: text} : i))
        console.log(posts)
    }
  return (
    <div className="App">
        <CreatePost handlerOnClickAddPost={handlerOnClickAddPost}/>
        <PostList
            posts={posts}
            handlerOnClickRemovePost={handlerOnClickRemovePost}
            handlerOnClickSavePost={handlerOnClickSavePost}
        />
    </div>
  );
}

export default App;
