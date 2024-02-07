import './../Services.css'
import './../../../App.css';
import House from './House';

let ServiceHouse = (props) => {
  return (
    <div className="ServiceHouse">
        <div className='gg'>
            <div className='ggg'>
            <h2>Строительство коттеджей</h2>
            </div>
            <div className='wraphouse'>
            {
              props.state.houses.map((house)=>(
                <House name = {house.name} image = {house.image} id = {house.id} key = {house.id}/>
              ))
            /* <House name = "Из газобетона" image = "./images/Home1.png"/>
            <House name = "Из кирпича" image = "./images/Home2.png"/>
            <House name = "Из дерева" image = "./images/Home3.png"/>
            <House name = "Из керамичесих кирпичей" image = "./images/Home4.png"/> */}
            </div>
        </div>
    </div>
  );
}

export default ServiceHouse;
