import React, { useState, useRef, useMemo } from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import MyModal from './components/UI/MyModal/MyModal';
import MySelect from './components/UI/Select/MySelect';
import './css/app.scss';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, tittle: 'аффф', body: 'а' },
    { id: 2, tittle: 'аавввфыв 2', body: 'ф2' },
    { id: 3, tittle: 'бвв 3', body: 'у' },
  ]);

  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);

  const sortedPosts = useMemo(() => {
    console.log('Я работаю');
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) => post.tittle.toLowerCase().includes(filter.query.toLowerCase()));
  }, [filter.query, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <>
      <div className="App">
        <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
          Создать пользователя
        </MyButton>
        <MyModal visible={modal} setVisible={setModal}>
          <PostForm create={createPost} />
        </MyModal>
        <hr style={{ margin: '15px 0' }} />
        <PostFilter filter={filter} setFilter={setFilter} />
        <PostList remove={removePost} posts={sortedAndSearchedPosts} tittle="Список постов" />
      </div>
    </>
  );
}

export default App;
