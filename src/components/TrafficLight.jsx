function TrafficLight(color) {
  return (
    <div>
      <div
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: color === "red" ? "red" : "gray",
        }}
      ></div>

      <div
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: color === "yellow" ? "yellow" : "gray",
        }}
      ></div>

      <div
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: color === "green" ? "green" : "gray",
        }}
      ></div>
    </div>
  );
}

export default TrafficLight;
