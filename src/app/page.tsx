import Dummy from "@/data/dummy.json";

export default function Home() {
  return (
    <main className="main">
      <h1>AGENTE SECRETO</h1>
      <h2>Bloco de notas</h2>
      <div className="card">
        {Object.entries(Dummy).map(([nome, valores]) => (
          <div key={nome} className="section">
            <h4>{nome}</h4>
            {valores.map((valor) => (
              <div key={valor} className="values">
                <input type="checkbox" name={nome} id={valor} />
                <label htmlFor={valor}>{valor}</label>
              </div>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}
