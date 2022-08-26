import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'
import { formatDistanceToNow } from 'date-fns'
import pt from 'date-fns/locale/pt'
import { useState } from 'react'

type Props = {
  id: string
  author: {
    name: string
    role: string
    avatar_url: string
  }
  comment: string
  likes: number
  publishedAt: Date
  onDeleteComment: (id: string) => void
}

export function Comment({
  id,
  author,
  comment,
  likes,
  publishedAt,
  onDeleteComment
}: Props) {
  const publishedDateFormatted = new Intl.DateTimeFormat('default', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(publishedAt)

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: pt,
    addSuffix: true
  })

  const [likeCount, setLikeCount] = useState(likes)

  function handleDeleteComment() {
    onDeleteComment(id)
  }

  function handleLikeComment() {
    setLikeCount(state => state + 1)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src={author.avatar_url} alt="user avatar" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{author.name}</strong>

              <time
                title={publishedDateFormatted}
                dateTime={publishedAt.toISOString()}
              >
                Posted {publishedDateRelativeToNow}
              </time>
            </div>

            <button onClick={handleDeleteComment} title="remove comment">
              <Trash size={24} />
            </button>
          </header>

          <p> {comment} </p>
        </div>

        <footer>
          <button title="applaud this comment" onClick={handleLikeComment}>
            <ThumbsUp />
            Applaud <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
