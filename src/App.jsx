import { Header } from "./components/Header/index"
import { Sidebar } from "./components/Sidebar/index"
import { Post } from "./components/Post/index"

import styles from "./App.module.css"

import "./global.css"

//author: { avatar_url = "", name = "", role = "" }
//publishedAt: Date
//contnet: string

const posts = [
  {
    id: 0,
    author: {
      avatar_url: "https://pps.whatsapp.net/v/t61.24694-24/289083108_3034353910208607_8513411991021710622_n.jpg?ccb=11-4&oh=01_AdTHg2WFNhGBJfq1z9La6k5jxT3EjyLRZC_mZzqy5ucH0A&oe=63A57020",
      name: "Fabrício Magnus",
      role: "Eterna Saudade"
    },
    publishedAt: new Date('2021-08-26 14:38:00'),
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
      avatar_url: "https://avatars.githubusercontent.com/u/26612513?v=4",
      name: "Felipe Duarte",
      role: "Bem Certinho"
    },
    publishedAt: new Date('2021-10-06 18:31:49'),
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