import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://picsum.photos/300/100.webp"
        alt="user cover image"
      />
      <div className={styles.profile}>
        <Avatar src="https://i.pravatar.cc/128" alt="user avatar" />

        <strong>Jane Doe</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#" aria-label="profile editor">
          <PencilLine size={20} />
          Edit your profile
        </a>
      </footer>
    </aside>
  )
}
