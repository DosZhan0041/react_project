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
              }
            </div>
        </div>
    </div>
  );
}

export default ServiceMaterial;
