import './Header.css';
import '../../App.css';
import { NavLink, useNavigate } from 'react-router-dom';


let   Header = () => {
  const navigate = useNavigate()
  let currentUser = JSON.parse(localStorage.getItem('user'))

  let logOut=()=>{
    localStorage.removeItem("user")
    navigate("/login")
  }
  return (
    <div className="Header">
      <div className='container'>
        <div className='wrapper_header'>
          <div className='Header_left'>
            <div className='logo'>
              <img src="http://localhost:3000/images/logo.png" alt="" />
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
          </div>
        </div>
        <nav>
          <ul>
          <li><NavLink to="/" className={(navData)=>(navData.isActive ? "active" : "")}>Главная</NavLink></li>
          <li><NavLink to="/Services" className={(navData)=>(navData.isActive ? "active" : "")}>Услуги</NavLink></li>
          <li><NavLink to="/Reviews">Отзывы</NavLink></li>
          <li>Партнеры</li>
          {
            currentUser!=null ? (<li onClick={logOut}>Log Out</li>) : (<li onClick={()=>{navigate("/login")}}>Sign In</li>)
          }
          <li><NavLink to="/Profile">Profile</NavLink></li>
          </ul>
        </nav>
      </div>
    </div>
    
  );
}

export default Header;
