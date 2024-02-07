import './Footer.css';
import './../../App.css'

let header = () => {
  return (
    <div className="Footer">
      <div className='footer_png'>
      <img src="/images/footer.png" alt="" />
      </div>
      <div className='container'>
        <div className='wrapper_footer'>
          <div className='footer_up'>
              <div className='logo_footer'>
                 <img src="/images/logo.png" alt="" />
              </div>
            <div className='text_footer'>
              <p>строительная компания</p>
              <h1>Славяновский <br /> Терем</h1>
            </div>
          </div>
          <div className='footer_down'>
            <p>Опыт работы более 15 лет. </p> 
            <p>Строительство домов под ключ на территории Пермского края.</p>
          </div>
        </div>
     </div>
    </div>
  );
}

export default header;
