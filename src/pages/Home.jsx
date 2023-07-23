// import { Container } from 'components/Container/Container';
import css from './Home.module.css'
// const styles = {
  // container: {
  //   minHeight: 'calc(100vh - 50px)',
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // title: {
  //   fontWeight: 500,
  //   fontSize: 28,
  //   textAlign: 'center',
  // },
// };

// export default function Home() {
//   return (
//     <div style={styles.container}>
//       <h1 style={styles.title}>
//         Phonebook welcome page{' '}
//         <span role="img" aria-label="Greeting icon">
//           💁‍♀️
//         </span>
//       </h1>
//     </div>
//   );
//

export default function Home() {
  return (
    <div className={css.wrap}>
      <h1 className={css.title}>
        Phonebook welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1>
    </div>
  );
}
