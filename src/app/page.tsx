import styles from "./page.module.css";
import Dummy from "@/data/dummy.json";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>AGENTE SECRETO</h1>
      <h2>Bloco de notas</h2>
      {Object.entries(Dummy).map(([nome, valores]) => (
        <div key={nome}>
          <h4>{nome}</h4>
          {valores.map((valor) => (
            <div key={valor}>
              <input type="checkbox" name={valor} id={valor} />
              <label htmlFor={valor}>{valor}</label>
            </div>
          ))}
        </div>
      ))}
    </main>
  );
}
