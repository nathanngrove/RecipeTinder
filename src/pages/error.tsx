import Link from 'next/link';
import { useRouter, withRouter } from 'next/router';
import styles from '../styles/Error.module.css';

const Error = () => {

  const router = useRouter();

  return (
    <div className={styles.container}>
      <h2>Oh no!</h2>
      <h3 className={styles.h3}>You’ve encountered an error. Go back to the previous page and try again or click <Link href="/">here</Link> to go back home!</h3>
      <p className={styles.p}></p>
      <p>Error message:</p>
      <p>{router.query.errorMessage}</p>
      <img className={styles.img} src="icons/error-icon.svg" alt="error-icon" />
    </div>
  );
  
}

export default withRouter(Error);