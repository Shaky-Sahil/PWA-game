const Card = ({ image, selected, onClick }) => {


    return (
      <div className="card">
        <div className={selected && 'selected'}>
          <img alt="" src={image} className="card-face" />
          {console.log(`checking ${image}`)}
          <img
            alt=""
            className="card-back"
            src={'/assets/10pwa.ico'}
            onClick={onClick}
          />
        </div>
      </div>
    );
  };
  
  export default Card;