import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from "./Sidebar.module.css"

export function Sidebar() {
    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1587202372616-b43abea06c2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" />
            <div className={styles.profile}>
                <a target="blank" href="https://www.linkedin.com/in/leonardo-ramos-322a76180/">
                    <Avatar src="https://avatars.githubusercontent.com/u/74800280?v=4"/>
                </a>
                <strong>
                    Leonardo Ramos
                </strong>
                <span>
                    Dev Front-End
                </span>
            </div>
        <footer>
            <a href="#EditarSeuPerfil">
                <PencilLine size={20} /> 
                Editar seu perfil
            </a>
        </footer>
        </aside>
    );
}