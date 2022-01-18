const Card = ({ prop }) => {
  console.log(prop)
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{prop.users.Name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{prop.users.Username}</h6>
        <p className="card-text">{prop.users.Email}</p>
      </div>
    </div>
  )
}

export default Card