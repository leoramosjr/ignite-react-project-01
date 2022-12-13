import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"

import styles from "./App.module.css"

import "./global.css"

export function App() {
  return (
    <div className="App">
      <Header />

      <div className={styles.wrapper}>

        <Sidebar />

        <div>
          <Post
            user="Fabrício Magnus"
            profession="Eterna Saudade"
            postContent={<>
                <div>
                  Fala galeraa 👋
                </div>
                <div>
                  Acabei de subir mais um projeto no meu portifa. 
                  É um projeto que fiz no NLW Return, evento da Rocketseat. 
                  O nome do projeto é DoctorCare 🚀
                </div>
                <div>👉 <a>https://jane.design/doctorcare</a> <a>#novoprojeto</a> 
                <a> #nlw</a> <a>#rocketsea</a>
                </div>
            </>}
            src="https://pps.whatsapp.net/v/t61.24694-24/289083108_3034353910208607_8513411991021710622_n.jpg?ccb=11-4&oh=01_AdTHg2WFNhGBJfq1z9La6k5jxT3EjyLRZC_mZzqy5ucH0A&oe=63A57020"
          />
          <Post
            user="Felipe Duarte"
            profession="Bem Certinho"
            postContent={<>
                <div>E aii pessoal, beleza?</div>
                <div>Comecei hoje um curso na Rocketseat sobre Node.js, muito top.</div>
                <div>Super recomendo!</div>
              </>}
            src="https://avatars.githubusercontent.com/u/26612513?v=4"
          />
        </div>

      </div>

    </div>
  )
}