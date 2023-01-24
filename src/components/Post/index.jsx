import styles from "./Post.module.css"

import { Comment } from "../Comment/index";
import { Avatar } from "../Avatar/index";
import {
    format,
    formatDistanceToNow,
} from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export function Post({ author, publishedAt, content }) {
    const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormated} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>
            <div className={styles.content}>
                {content.map((content) => {
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