import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

import './global.css'
import styles from './App.module.css'

// 🗂️🛢️ From a super especial database 😅
import { posts } from './db.js'

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              tags={post.tags}
              publishedAt={post.publishedAt}
              comments={post.comments}
            />
          ))}
        </main>
      </div>
    </>
  )
}

export default App
