import styles from "./App.module.css";
function App() {
  return (
    <>
      <div>
        <header className={styles.header}>
          <h1>Welcome</h1>
        </header>
        <main className={styles.main}>
          <div className={styles.box}>
            {" "}
            Lorem ipsum dolor sit amet consecteturexs velit aperiam sequi
            repudiandae!{" "}
          </div>
        </main>
        <footer className={styles.footer}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. rerum
            cupiditate ad odit similique error dolor, iste eos, natus minima
            maxime hic officia debitis?
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
