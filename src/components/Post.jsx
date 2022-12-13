import styles from "./Post.module.css"

import { Comment } from "./Comment";
import { Avatar } from "./Avatar";

export function Post(props) {
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={props.src} />
                    <div className={styles.authorInfo}>
                        <strong>{props.user}</strong>
                        <span>{props.profession}</span>
                    </div>
                </div>

                <time title="26 de agosto às 14:38" dateTime="2022-08-26 14:38:00">Publicado há 1h</time>
            </header>

            <div className={styles.content}>{props.postContent}</div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder="Deixe um comentário" />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
            </div>
        </article>
    );
}