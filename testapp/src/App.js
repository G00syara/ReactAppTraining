import React, { useState, useRef } from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';
import PostForm from './components/PostForm';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import MySelect from './components/UI/Select/MySelect';
import './css/app.scss';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, tittle: 'аффф', body: 'а' },
    { id: 2, tittle: 'аавввфыв 2', body: 'ф2' },
    { id: 3, tittle: 'бвв 3', body: 'у' },
  ]);

  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  function getSortedPosts() {
    console.log('Я работаю');
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
    }
    return posts;
  }

  const sortedPosts = getSortedPosts();

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
  };

  return (
    <>
      <div className="App">
        <PostForm create={createPost} />
        <hr style={{ margin: '15px 0' }} />
        <div>
          <MyInput value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Поиск..." />
          <MySelect
            value={selectedSort}
            onChange={sortPosts}
            defaultValue="Сортировка"
            options={[
              { value: 'tittle', name: 'По названию' },
              { value: 'body', name: 'По описанию' },
            ]}
          />
        </div>

        {posts.length !== 0 ? (
          <PostList remove={removePost} posts={sortedPosts} tittle="Список постов" />
        ) : (
          <h1 style={{ textAlign: 'center' }}>Постов не найдено </h1>
        )}
      </div>
    </>
  );
}

export default App;
