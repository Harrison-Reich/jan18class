const Card = ({ users }) => {
  console.log(users)
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{users.Name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{users.Username}</h6>
        <p className="card-text">{users.Email}</p>
      </div>
    </div>
  )
}

export default Card