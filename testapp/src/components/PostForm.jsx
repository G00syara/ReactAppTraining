import React, { useState } from 'react';
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ tittle: '', body: '' });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ tittle: '', body: '' });
  };

  return (
    <form>
      {/* Управляемый компонент */}
      <MyInput
        value={post.tittle}
        onChange={(e) => setPost({ ...post, tittle: e.target.value })}
        type="text"
        placeholder=" Название поста"
      />
      <MyInput
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        type="text"
        placeholder=" Название поста"
      />
      <MyButton onClick={addNewPost}> Создать Пост</MyButton>
    </form>
  );
};

export default PostForm;
