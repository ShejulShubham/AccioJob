function UserList({ users }) {
  return (
    <>
      <h1>All Users</h1>
      <div className="users-container">
        {users.length === 0 ? (
          <span>No users exist. Please add one to begin.</span>
        ) : (
          users.map((user) => {
            const { name, role, _id } = user;

            return (
              <div key={_id} className="user-detail">
                <span>Name: {name}</span>
                <span>Role: {role}</span>
              </div>
            );
          })
        )}
      </div>
    </>
  );
}

export default UserList;
