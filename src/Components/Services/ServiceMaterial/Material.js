import './../Services.css'
import './../../../App.css';

let Material = (props) => {
  return (
    <div className="Material">
      <img src={props.image} alt="" />
      <div className='name_material'>
        <p>{props.name}</p>
      </div>
      <button>Подробнее</button>
    </div>
  );
}

export default Material;
