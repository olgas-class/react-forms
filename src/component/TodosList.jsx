function TodosList() {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState("");

  const handleNewTaskSubmit = (event) => {
    event.preventDefault();
    // Devo ggiornare l'array dei task
    // Per farlo devo creare la copia dell'array corrente e aggingere il nuovo task alla copia
    const newArray = [...tasks, newTask];
    setTasks(newArray);
    setNewTask("");
  };

  const removeElemen = (elementToRemove) => {
    const newArray = tasks.filter((curTask) => curTask !== elementToRemove);
    setTasks(newArray);
  };

  return (
    <>
      <main className="container my-5">
        <h2 className="text-center mb-3">Todos</h2>

        <div className="mb-3">
          <form action="" className="d-flex" onSubmit={handleNewTaskSubmit}>
            <input
              type="text"
              placeholder="Scrivi nuovo todo"
              className="form-control"
              value={newTask}
              onChange={(event) => setNewTask(event.target.value)}
            />
            <button type="submit" className="btn btn-primary">
              Aggiungi
            </button>
          </form>
          <div>Test: {newTask}</div>
        </div>

        {tasks.length > 0 ? (
          <ul className="list-group">
            {tasks.map((curTask, index) => (
              <li key={index} className="list-group-item">
                <span>{curTask}</span>
                <button
                  onClick={() => {
                    removeElemen(curTask);
                  }}
                >
                  🗑️
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>Bello! Non c'è niente da fare</p>
        )}
      </main>
    </>
  );
}

export default TodosList;
