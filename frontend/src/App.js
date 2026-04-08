import "./App.css";

function App() {
  const ambulances = [
    { name: "Ambulance 1", status: "Available" },
    { name: "Ambulance 2", status: "Busy" }
  ];

  return (
    <div className="container">
      <h1>🚑 HelpLink</h1>
      <p className="subtitle">
        Find and book the nearest ambulance in real-time
      </p>

      <input type="text" placeholder="Enter your location" />
      <button className="search-btn">Search</button>

      <div className="card-container">
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
    </div>
  );
}

export default App;
