function Card({ userName, about, img }) {
  return ( 
    <div className='card'>
        <img src={img} alt="profile" />
        <h1>{userName}</h1>
        <p>{about}</p>
        <button>View portfolio</button>
      </div>
  )
}
export default Card