function Card({ redirect, iconPath, iconWidth, title, description }) {
  return (
      <a href={redirect} className="card">
        <img src={iconPath} width={iconWidth} />
        <h3>
          {title}
        </h3>
        <p>{description}</p>

      <style jsx>{`
      .card {
        margin: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 1.5rem;
        text-align: left;
        width: 450px;
        height: 228px;
        color: inherit;
        text-decoration: none;
        border: 1px solid #eaeaea;
        border-radius: 10px;
        transition: color 0.15s ease, border-color 0.15s ease, 0.15s;
      }

      .card:hover,
      .card:focus,
      .card:active {
        color: #9c5ddb;
        border-color: #9c5ddb;
        transition: 0.15s;
        border-radius: 25px;
        border: 3px solid;
      }

      .card h3 {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
        text-align: center;
      }

      .card p {
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.5;
      }
`}</style>
    </a>
  )
}

export default Card