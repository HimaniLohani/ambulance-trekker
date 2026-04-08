import "./App.css";
function App() {

  const ambulances = [
    { name: "Ambulance 1", status: "Available" },
    { name: "Ambulance 2", status: "Busy" }
  ];

  return (
    <div>
      <h1>🚑 HelpLink</h1>
      <p>Find and book ambulance</p>

      <input type="text" placeholder="Enter your location" />
      <br /><br />

      <button>Find Ambulance</button>

      <h2>Available Ambulances</h2>

      {ambulances.map((item, index) => (
        <div className="card" key={index}>
          <h3>🚑 {item.name}</h3>
          <p>
            Status:{" "}
            <span className={item.status === "Available" ? "available" : "busy"}>
              {item.status}
            </span>
          </p>
          <button disabled={item.status === "Busy"}>
            {item.status === "Available" ? "Book Now" : "Unavailable"}
          </button>
        </div>
      ))}

    </div>
  );
}

export default App;
