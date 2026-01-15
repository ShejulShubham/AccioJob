export default function DifferentData({ user }) {

  return (
      <>
        <h2>{user.name}</h2>
        <p>Age: {user.age}</p>
        <span>Email: {user.email}</span>
        <h2>Skills</h2>
        <ul>
          {user.skills.map((skill) => {
            return <li>{skill}</li>;
          })}
        </ul>
      </>
    )
}
