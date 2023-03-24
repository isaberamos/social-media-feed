import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css'

import { Avatar } from './Avatar'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover}
            src="https://images.unsplash.com/photo-1516534775068-ba3e7458af70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=470&q=60" alt="" />

            <div className={styles.profile}>
                <Avatar src="https://avatars.githubusercontent.com/u/90662086?v=4"/>
                <strong>Ana Luiza</strong>
                <span>Developer @ Go Technology</span>
                <footer>
                    <a href="#">
                        <PencilLine size={20}/>
                        Editar seu perfil
                    </a>
                </footer>
            </div>
        </aside>
    )
}