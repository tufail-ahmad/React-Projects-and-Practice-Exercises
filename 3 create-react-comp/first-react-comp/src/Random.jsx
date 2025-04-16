function Random() {
  let number = Math.random() * 100;
  return (
    <h3 style={{ backgroundColor: "#776345" }}>
      Random number is: {Math.round(number)}
    </h3>
  );
}

export default Random;
