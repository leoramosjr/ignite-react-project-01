import styles from "./Post.module.css"

import { Comment } from "./Comment";

export function Post() {
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://media-exp1.licdn.com/dms/image/C4E03AQFQhvUxAZt2vQ/profile-displayphoto-shrink_800_800/0/1643718428366?e=1666828800&v=beta&t=ottiIiJJt1HxoXKTR7WZvo8Qrdfdx0tPG72brz65mDk" />
                    <div className={styles.authorInfo}>
                        <strong>Guilherme Carvalho</strong>
                        <span>Dev Front-End Senior</span>
                    </div>
                </div>

                <time title="26 de agosto às 14:38" dateTime="2022-08-26 14:38:00">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉 <a href="">jane.design/doctorcare</a></p>
                <p><a href="">#novoprojeto</a> <a href="">#nlw</a> <a href="">#rocketseat</a></p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder="Deixe um comentário" />
                <footer>
                    <button type="submit">Comentar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    );
}