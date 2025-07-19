import styles from './Input.module.css';

const Input = () => {
    return (
        <input className={styles.input}
            type="text"
            placeholder='Type here' />
    )
}

export default Input