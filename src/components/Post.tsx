import { formatDistanceToNow } from 'date-fns'
import pt from 'date-fns/locale/pt'
import { ChangeEvent, FormEvent, useState } from 'react'
import { v4 } from 'uuid'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

type Props = {
  author: {
    name: string
    role: string
    avatar_url: string
  }
  content: {
    type: string
    content: string
    url?: string
  }[]
  tags: string[]
  publishedAt: Date
  comments: {
    id: string
    author: {
      name: string
      role: string
      avatar_url: string
    }
    comment: string
    likes: number
    publishedAt: Date
  }[]
}

export function Post({ author, content, tags, publishedAt, comments }: Props) {
  const [_comments, _setComments] = useState([...comments])

  const [newCommentText, setNewCommentText] = useState('')

  const isNewCommentEmpty = !newCommentText.length

  // another option is to use the 'date-fns' library
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

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  function handleCreateNewComment(event: FormEvent) {
    event?.preventDefault()

    const newComment = {
      id: v4(),
      author: {
        name: author.name,
        role: author.role,
        avatar_url: author.avatar_url
      },
      comment: newCommentText,
      likes: 20,
      publishedAt: new Date()
    }

    _setComments([..._comments, newComment])
    setNewCommentText('')
  }

  function handleNewCommentInvalid(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity(
      'Please write a comment first. This field is mandatory.'
    )
  }

  function deleteComment(id: string): void {
    const filteredComments = _comments.filter(comment => comment.id !== id)
    _setComments(filteredComments)
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatar_url} alt="user avatar" />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          Posted {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content
          .filter(post => post.type === 'paragraph')
          .map((post, index) => (
            <p key={index}>{post.content}</p>
          ))}

        {content
          .filter(post => post.type === 'link')
          .map((post, index) => (
            <p key={index}>
              <a href={post.url} target="_blank">
                {post.content}
              </a>
            </p>
          ))}

        <p>
          {tags.map((tag, index) => (
            <a key={index} href="#">
              {tag}
            </a>
          ))}
        </p>
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Please write your feedback. Thank You ! 💚 </strong>
        <textarea
          name="comment"
          onChange={handleNewCommentChange}
          value={newCommentText}
          placeholder="Please write your feedback."
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publish
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {_comments?.map(comment => (
          <Comment
            key={comment.id}
            id={comment.id}
            author={comment.author}
            comment={comment.comment}
            likes={comment.likes}
            publishedAt={comment.publishedAt}
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  )
}
