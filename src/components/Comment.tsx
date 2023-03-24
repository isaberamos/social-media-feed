import { useState } from 'react';
import { Avatar } from './Avatar'
import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

interface commentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment( {content, onDeleteComment }: commentProps ) {

    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        /* console.log('Deletando... - vindo do comment'); */

        onDeleteComment(content);
    }

    return (
        <div className={styles.comment}>
            <Avatar 
                hasBorder={false} 
                src="https://avatars.githubusercontent.com/u/90662086?v=4" 
                alt=""
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Ana Luiza</strong>
                        <time title="08 de março de 2023 às 09:26h" dateTime="2023-08-03 09:26:03">Publicado há 1h</time>
                    </div>

                    <button onClick={handleDeleteComment} title="Deletar comentário">
                        <Trash size={24}/>
                    </button>
                </header>
                <p>{content}</p>
                </div>

                <footer>
                    <button onClick={() => setLikeCount(likeCount + 1)}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}