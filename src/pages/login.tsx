import Link from 'next/link';
import styles from '../styles/Login.module.css';

const Login = () => {

  return (
    <div className={styles.container}>
      <h2>Login</h2>
      <div className={styles.inputContainer}>
        <label htmlFor="emailInput" className={styles.label}>Email </label>
        <input id="emailInput" type="email" placeholder='email@email.com' className={styles.input}></input>
      </div>
      <button>Login / Sign Up</button>
    </div>
  );
  
}

export default Login;