import './../Services.css'
import './../../../App.css';

let House = (props) => {
  return (
    <div className="House">
      <img src={props.image} alt="" />
      <div className='name_house'>
        <p>{props.name}</p>
      </div>
      <button>Подробнее</button>
    </div>
  );
}

export default House;
