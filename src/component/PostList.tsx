import React from 'react';
import {postsTypes} from "../App";
import st from './PostList.module.css'
import {Post} from "./Post/Post";
interface IPostList {
    posts: postsTypes[]
    handlerOnClickRemovePost: (id: number) => void
    handlerOnClickSavePost: (id: number, text: string) => void
}
export const PostList:React.FC<IPostList> = (props) => {
    return (
        <div className={st.postList}>
            <ul>
                {props.posts.map(i => <Post
                    key={i.id}
                    id={i.id}
                    text={i.text}
                    userName={i.userName}
                    handlerOnClickRemovePost={props.handlerOnClickRemovePost}
                    handlerOnClickSavePost={props.handlerOnClickSavePost}
                />)}
            </ul>
        </div>
    );
};
