import styles from './styles.module.css';

function ChatItem({ item }) {
  return (
    <div className={`${styles.ChatItem}`}>
      { item.message }
    </div>
  )
}

export default ChatItem;