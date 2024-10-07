import { Header } from './components/Header/Header';
import { Post, PostType } from './components/Post/Post';
import { Sidebar } from './components/Sidebar/Sidebar';

import styles from './App.module.css';
import './global.css';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diegolimaramos.png',
      name: 'Diego Ramos',
      role: 'Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraaa' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare.' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2024-02-10 13:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator and Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala meus jovens' },
      { type: 'paragraph', content: 'Acabei encontrar um BUG no REACT. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare.' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2024-02-10 13:05:00')
  },
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
