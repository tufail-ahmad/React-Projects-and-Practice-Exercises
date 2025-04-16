export function MyName() {
  function fullName() {
    return "Tufail Ahmad";
  }
  return <h3>My name is {fullName()}.</h3>;
}

export function Learning() {
  let mySirName = "Prashant Jain";
  return <h3>I am learning React with {mySirName} Sir.</h3>;
}

export function Age() {
  return <h4>My age is 23.</h4>;
}
