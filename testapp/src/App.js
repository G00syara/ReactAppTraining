import React, { useState, useRef } from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import './css/app.scss';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, tittle: 'Javascript', body: 'Description' },
    { id: 2, tittle: 'Javascript 2', body: 'Description' },
    { id: 3, tittle: 'Javascript 3', body: 'Description' },
  ]);

  const [tittle, setTittle] = useState('');

  const bodyInputRef = useRef();

  const addNewPost = (e) => {
    e.preventDefault();
    console.log(tittle);
    console.log(bodyInputRef.current.value);
  };

  return (
    <>
      <div className="App">
        <form>
          {/* Управляемый компонент */}
          <MyInput
            value={tittle}
            onChange={(e) => setTittle(e.target.value)}
            type="text"
            placeholder=" Название поста"
          />
          {/* Неуправляемый компонент */}
          <MyInput ref={bodyInputRef} type="text" placeholder="Описание поста" />
          <MyButton onClick={addNewPost}> Создать Пост</MyButton>
        </form>
        <PostList posts={posts} tittle="Список постов 1" />
      </div>
    </>
  );
}

export default App;
