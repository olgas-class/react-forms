function UserFormComponent() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // const handleInputChange = (event) => {
  //   // event è l'evento del cambiamento dell'input
  //   console.log(event);
  //
  //   const newValue = event.target.value;
  //   console.log(newValue);
  //   setFirstName(newValue);
  // }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Ciao ${firstName} ${lastName}`);
  };

  return (
    <form onSubmit={handleSubmit} className="my-5 container">
      <div>
        <label htmlFor="firstName">Nome utente</label>
        <input
          className="form-control"
          type="text"
          id="firstName"
          value={firstName}
          onChange={(event) => {
            setFirstName(event.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="lastName">Cognome utente</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(event) => {
            setLastName(event.target.value);
          }}
        />
      </div>

      <button type="submit">Invia</button>
    </form>
  );
}

export default UserFormComponent;
