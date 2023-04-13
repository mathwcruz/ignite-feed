import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar avatarUrl='https://github.com/mathwcruz.png' />
          <div className={styles.authorInfo}>
            <strong>Matheus Cruz</strong>
            <span>Front End Developer</span>
          </div>
        </div>

        <time title="13 de abril às 13:34" dateTime="2023-04-13 13:34:00">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galera 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉{" "}<a href="#">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="#">#novoprojeto</a>{" "}
          <a href="#">#nlw</a>{" "}
          <a href="#">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder='Deixe um comentário' />
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
