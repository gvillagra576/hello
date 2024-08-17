const Tour = ({ src, date, title, info, icon, country, duration, price }) => {
  return (
    <article className="tour-card">
      <div className="tour-img-container">
        <img src={src} className="tour-img" alt={title} />
        <p className="tour-date">{date}</p>
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{title}</h4>
        </div>
        <p>{info}</p>
        <div className="tour-footer">
          <p>
            <span>
              <i className={icon}></i>
            </span>{' '}
            {country}
          </p>
          <p>{duration} days</p>
          <p>From ${price}</p>
        </div>
      </div>
    </article>
  )
}
export default Tour
