import styles from "./Post.module.css"

import { Comment } from "./Comment";

export function Post() {
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://pps.whatsapp.net/v/t61.24694-24/289083108_3034353910208607_8513411991021710622_n.jpg?ccb=11-4&oh=01_AdTHg2WFNhGBJfq1z9La6k5jxT3EjyLRZC_mZzqy5ucH0A&oe=63A57020" />
                    <div className={styles.authorInfo}>
                        <strong>Fabrício Magnus</strong>
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
                    <button type="submit">Publicar</button>
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