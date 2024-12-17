import { useState } from "react";

function App() {
  const [menu, setMenu] = useState([]);

  // Le variabili per gli input
  const [pizzaName, setPizzaName] = useState("");
  const [pizzaDescription, setPizzaDescription] = useState("");

  const handlePizzaForm = (event) => {
    event.preventDefault();

    // 1 creo l'oggetto della nuova pizza
    const newPizza = {
      id: Date.now(),
      title: pizzaName,
      description: pizzaDescription,
    };

    console.log(newPizza);

    // 2 creo la copia dell'array menu precedente, aggiungendo la nuova pizza
    const newArray = [...menu, newPizza];

    // 3. aggiorno lo stato del menu
    setMenu(newArray);

    // 4. Ripulisco i campi del form
    setPizzaName("");
    setPizzaDescription("");
  };

  const cancella = (idDaCancellare) => {
    const newArray = menu.filter(curPizza => curPizza.id !== idDaCancellare);
    setMenu(newArray);
  }

  return (
    <>
      <div className="container">
        <section>
          <h2>Le nostre pizze</h2>

          {menu.length > 0 ? (
            <div className="row row-cols-2 row-cols-lg-3">
              {menu.map((curItem) => (
                <div className="col" key={curItem.id}>
                  <div className="card">
                    <div className="card-body">
                      <h4>{curItem.title}</h4>
                      <p>{curItem.description}</p>
                      <button onClick={() => cancella(curItem.id)} className="btn btn-danger">Cancella</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>Nessuna pizza presente</p>
          )}
        </section>

        <section>
          <h3>Aggiungi una nuova pizza</h3>
          <form onSubmit={handlePizzaForm}>
            <div className="mb-3">
              <label htmlFor="pizzaName">Nome della pizza</label>
              <input
                type="text"
                className="form-control"
                id="pizzaName"
                value={pizzaName}
                onChange={(event) => setPizzaName(event.target.value)}
              />
            </div>

            <div>
              <label htmlFor="pizzaDescription">Decrizione</label>
              <textarea
                name=""
                id="pizzaDescription"
                className="form-control"
                value={pizzaDescription}
                onChange={(event) => setPizzaDescription(event.target.value)}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Salva
            </button>
          </form>
        </section>
        <p>{pizzaName}</p>
        <p>{pizzaDescription}</p>
      </div>
    </>
  );
}

export default App;
