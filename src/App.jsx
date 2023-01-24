import { Header } from "./components/Header/index"
import { Sidebar } from "./components/Sidebar/index"
import { Post } from "./components/Post/index"

import styles from "./App.module.css"

import "./global.css"

//author: { avatarUrl = "", name = "", role = "" }
//publishedAt: Date
//contnet: string

const posts = [
  {
    id: 0,
    author: {
      avatarUrl: "https://media.licdn.com/dms/image/D4D03AQEoydOEH1IM6Q/profile-displayphoto-shrink_800_800/0/1666622863828?e=1680134400&v=beta&t=EiyyhHEDz7ciOrmpNpOB3OGJQJFHScGZ0fKNvHP-F1g",
      name: "Fabrício Magnus",
      role: "Eterna Saudade"
    },
    publishedAt: new Date('2022-08-26 14:38:00'),
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa.' },
      {type: 'paragraph', content: 'É um projeto que fiz no NLW Return, evento da Rocketseat.' },
      {type: 'paragraph', content: 'O nome do projeto é DoctorCare 🚀' },
      {type: 'link', content: '👉 https://jane.design/doctorcare' },
        
    ],
  },
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/26612513?v=4",
      name: "Felipe Duarte",
      role: "Bem Certinho"
    },
    publishedAt: new Date('2022-10-06 18:31:49'),
    content: [
      { type: 'paragraph', content: 'E aii pessoal, beleza?', },
      { type: 'paragraph', content: 'Comecei hoje um curso na Rocketseat sobre Node.js, muito top.', },
      { type: 'paragraph', content: 'Super recomendo!', },
    ]
  }
]

export function App() {
  return (
    <div className="App">
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (<Post
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />)
          })}
        </main>
      </div>
    </div>
  )
}