import './../Services.css'
import './../../../App.css';
import Material from './Material';

let ServiceMaterial = (props) => {
  return (
    <div className="ServiceMaterial">
        <div className='gg'>
            <div className='ggg'>
            <h2>Строительные материалы</h2>
            </div>
            <div className='wraphouse'>
              {
              props.state.material.map((material)=>(
                <Material name={material.name} image={material.image} id={material.id} key={material.id}/>
              ))
             /* <Material name = "Газобетон" image = "./images/Mat1.png"/>
            <Material name = "Цемент" image = "./images/Mat2.png"/>
            <Material name = "Арматура" image = "./images/Mat3.png"/>
            <Material name = "Доска" image = "./images/Mat4.png"/>  */}
            </div>
        </div>
    </div>
  );
}

export default ServiceMaterial;
