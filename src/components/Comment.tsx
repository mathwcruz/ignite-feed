import { ThumbsUp, Trash } from 'phosphor-react'

import { Avatar } from './Avatar'

import styles from "./Comment.module.css"
import { useState } from 'react';

interface CommentProps {
  content: string;
  onDeleteComment: (content: string) => void
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [applauseCount, setApplauseCount] = useState<number>(0);

  const handleApplauseComment = () => {
    setApplauseCount((old) => old + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} avatarUrl='https://github.com/mathwcruz.png' />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Matheus Cruz</strong>
              <time title="18 de abril às 22:03" dateTime="2023-04-18 22:03:17">
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={() => onDeleteComment(content)} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleApplauseComment}>
            <ThumbsUp />
            Aplaudir <span>{applauseCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}