import styles from "./Comment.module.css"
import { Trash, ThumbsUp} from "phosphor-react"

export function Comment() {
    return(
        <div className={styles.comment}>
            <img src="https://pps.whatsapp.net/v/t61.24694-24/264169808_296672149272068_9207870978196966687_n.jpg?ccb=11-4&oh=01_AdTTTwgatyfxXUmhj26qd6eskjq2C-LldrfjmTo6kCGK0w&oe=63A55A78" />
        
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Sopiha Furini</strong>
                            <time title="26 de agosto às 14:38" dateTime="2022-08-26 14:38:00">Publicado há 1h atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>
                        Muito bom Fafa, parabéns! 👋
                    </p>
                </div>

                <footer>
                    <button title="Aplaudir">
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}