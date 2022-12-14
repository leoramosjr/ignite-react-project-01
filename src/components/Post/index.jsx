import styles from "./Post.module.css"

import { Comment } from "../Comment/index";
import { Avatar } from "../Avatar/index";

export function Post(props) {
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={props.author.avatar_url} />
                    <div className={styles.authorInfo}>
                        <strong>{props.author.name}</strong>
                        <span>{props.author.role}</span>
                    </div>
                </div>
                <time title={props.publishedAt} dateTime={props.publishedAt}>Publicado há 1h</time>
            </header>
            <div className={styles.content}>
                {props.content.map((content) => {
                    switch(content.type) {
                        case "paragraph":
                            return <p>{content.content}</p>
                        case "link":
                            return <a>{content.content}</a>
                        default: return null;
                    }
                })}
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
            </div>
        </article>
    );
}