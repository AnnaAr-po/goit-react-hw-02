import css from './Notification.module.css'

function Notification({ message }) {
  return <p className={css.notification}>{message}</p>;
}

export default Notification;