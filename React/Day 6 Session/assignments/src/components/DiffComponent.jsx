export default function DiffComponent() {
  const age = 13;

  return <strong>{age >= 18 ? <Adult /> : <Minor />}</strong>;

  if (age >= 18) {
    return <Adult />;
  } else {
    return <Minor />;
  }
}

function Adult() {
  return <strong>You are a Man grown now</strong>;
}

function Minor() {
  return <strong>You have to wait till you get of age</strong>;
}
