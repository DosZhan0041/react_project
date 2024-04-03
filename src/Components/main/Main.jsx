import './Main.css';
import './../../App.css';

let Main = () => {
  return (
    <div className="Main">
      <div className='container'>
        <div className='wrapper_main'>
          <div className='up_main'>
            <div className='imag'>
              <img src="./images/Glavka.png" alt="" />
                <div className='textik'>
                  <h3>Ваш дом - наша забота.</h3>
                </div>
            </div>
          </div>
          <div className='middle_main'>
            <h1>Строительство частных домов и коттеджей</h1>
            <h3>Строительство малоэтажных домов, коттеджей, модульных конструкций, реализация и разработка <br />различных индивидуальных проектов - наша главная задача. Грамотный подход к делу, использование <br /> современных технологий и ответственность застройщика. Мы поможем вам в выборе участка, подборке <br /> стройматериалов и оформим полный пакет документов</h3>
          </div>
          <div className='down_main'>
            <div className='vizitka_div'>
              <img src="/images/Glavka_vizit.png" alt="" />
              <p>Специальное предложение</p>
            </div>
            <div className='derevo_div'>
              <img src="/images/agash.png" alt="" />
              <button>Оставить заявку</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
