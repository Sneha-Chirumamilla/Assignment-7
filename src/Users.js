import './Users.css';

function Users({ name, username, email, phone, website, bgColor }) {
  return (
    <div className="mycard" style={{ backgroundColor: bgColor }}>
      <h1>{name}</h1>
      <h2>{username}</h2>
      <h2>{email}</h2>
      <h2>{phone}</h2>
      <h2>{website}</h2>
    </div>
  );
}

export default Users;
