export default function Props() {
  return (
    <>
    <h1>React Props</h1>
      <Greeting name="Jay" age={26} />
      <UserCard name="Aayush" age={30} place="Pune" />
      {/* if you true/false prop is not given then it will set as false */}
      <Active /> 
      <Numbers nums={[10, 20, 30, 40]} />
      <User info={{ name: "Jay", age: 26, place: "Pune" }} />
    </>
  );
}

function Greeting(props) {
  return (
    <h2>
      Hello {props.name} Age: {props.age}
    </h2>
  );
}

function UserCard(props) {
  return (
    <div>
      <p>{props.name}</p>
      <p>Age: {props.age}</p>
      <p>Place: {props.place}</p>
    </div>
  );
}

function Active(props) {
    console.log(props);
    console.log(props.isActive);
  return (
    <div>
      {props.isActive ? <h2>You are active</h2> : <h2>You are not active</h2>}
    </div>
  );
}

function Numbers(props) {
  return (
    <div>
      {props.nums.map((n, i) => (
        <li key={i}>{n}</li>
      ))}
    </div>
  );
}

function User(props) {
  return (
    <div>
      <p>{props.info.name}</p>
      <p>{props.info.age}</p>
      <p>{props.info.place}</p>
    </div>
  );
}
