import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [post, setPost] = useState<string[]>([]);
  const handleClick = () => {
    if(value !== '') {
      setPost([...post, value]);
    }
  };

  const handleRemoveItem = React.useCallback((posts) => {
    let newPost = [...post];
    newPost.splice(post.indexOf(posts), 1)
    setPost(newPost);
  }, [post]);

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(post));
  }, [post])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className='PostsActions'> 
        <input 
        type='text'
        onChange={event => setValue(event.target.value)} 
        value={value} 
        />
        <button onClick={handleClick}>Add Post</button>
        <button onClick={e => handleRemoveItem(post)}>Remover</button>

        </div>
        <div>
           <ol>
             {post.map(posts => (
              <li>{posts}</li>))}
           </ol>
        
        </div>
        
      </header>
    </div>
  );
}

export default App;
