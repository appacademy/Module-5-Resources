import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ThemeProvider from './context/ThemeContext.jsx'
import PostsProvider from './context/PostsContext.jsx'
import Post from './components/Post.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <PostsProvider>
        <App />
      </PostsProvider>
    </ThemeProvider>
  </React.StrictMode>,
)


