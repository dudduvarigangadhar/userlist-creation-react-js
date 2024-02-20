import './index.css'

const UserProfile = props => {
  const {UserDetails} = props
  const {imageUrl, Name, role} = UserDetails

  return (
    <li className="user-card-container">
      <img src={imageUrl} className="avatar" alt="avatar" />
      <div className="user-details-container">
        <h1 className="user-name">{Name}</h1>
        <p className="user-designation">{role}</p>
      </div>
    </li>
  )
}
export default UserProfile
