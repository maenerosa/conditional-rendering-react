function Temperature(temperature) {
  let message;

  if (temperature >= 90) {
    message = "Temperature is hot";
  } else if (temperature >= 70) {
    message = "Temperature is warm";
  } else {
    message = "Temperature is cool";
  }
  return <div>{message}</div>;
}

export default Temperature;
