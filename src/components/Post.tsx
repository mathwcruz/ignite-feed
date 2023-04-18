import { FormEvent, useState } from "react";
import { format, formatDistanceToNow } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

import styles from "./Post.module.css";
import { ArrowSquareDownRight } from "phosphor-react";

interface PostProps {
  author: { avatarUrl: string; name: string; role: string };
  content: { type: string; content: string }[];
  initialComments: string[];
  publishedAt: Date;
}

export function Post({
  author,
  content,
  initialComments,
  publishedAt,
}: PostProps) {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState<string>("");

  const publishedDateFormatted: string = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBr }
  );

  const publishedDateRelativeToNow: string = formatDistanceToNow(publishedAt, {
    locale: ptBr,
    addSuffix: true,
  });

  const handleCreateNewComment = (e: FormEvent) => {
    e.preventDefault();

    setComments((old) => [...old, newComment?.trim()]);
    setNewComment("");
  };

  const handleDeleteComment = (content: string) => {
    if (!content) {
      return
    }

    const commentsUpdatedAfterDeletion: string[] = comments?.filter((comment) => comment !== content)
    setComments(commentsUpdatedAfterDeletion);
  }

  const isNewCommentEmpty: boolean = !newComment?.trim();

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar avatarUrl={author?.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author?.name}</strong>
            <span>{author?.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          Publicado {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content?.map((line) => {
          if (line?.type === "paragraph") {
            return <p key={line?.content}>{line?.content}</p>;
          }

          if (line?.type === "link") {
            return (
              <p key={line?.content}>
                <a href="#">{line?.content}</a>
              </p>
            );
          }

          return <></>;
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Deixe um comentário"
        />
        <footer>
          <button disabled={isNewCommentEmpty} type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments?.map((comment, index) => (
          <Comment key={`${comment}-${index}`} content={comment} onDeleteComment={handleDeleteComment} />
        ))}
      </div>
    </article>
  );
}
