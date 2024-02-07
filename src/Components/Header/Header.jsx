import './Header.css';
import '../../App.css';
import { NavLink } from 'react-router-dom';


let header = () => {
  return (
    <div className="Header">
      <div className='container'>
        <div className='Header_left'>
          <div className='logo'>
            <img src="./images/logo.png" alt="" />
          </div>
          <div className='logo_Text'>
          <p>строительная компания</p>
          <h1>Славяновский <br></br>Терем</h1>
          </div>
        </div>
        <div className='line'>
        </div>
        <div className='Header_right'>
          <div className='HeaderRightWrapper'>
            <div className='text'>
              <p>Опыт работы более 15 лет. </p>
              <p>Строительство домов под ключ на территории Пермского края.</p>
            </div>
            <div className='contacts'>
              <div className='first'><img src="./images/vkk.png" alt="" /></div>
              <div className='second'><img src="./images/phone.png" alt="" /></div>
              <p>+7 902 471-07-79</p>
            </div>
          </div>
          <nav>
          <ul>
          <li><NavLink to="/" className={(navData)=>(navData.isActive ? "active" : "")}>Главная</NavLink></li>
          <li><NavLink to="/services" className={(navData)=>(navData.isActive ? "active" : "")}>Услуги</NavLink></li>
          <li>Проекты</li>
          <li><NavLink to="/Reviews">Отзывы</NavLink></li>
          <li>Партнеры</li>
          <li>Портфолио</li>
          </ul>
        </nav>
        </div>
      </div>
    </div>
    
  );
}

export default header;
