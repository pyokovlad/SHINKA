
import React, { useEffect, useState } from 'react';
import ModalWindow from './ModalWindow.js';






const Main = () => {

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const [scroll, setScroll] = useState(0);

  const scrollUp = () => {
    setScroll(window.scrollY)
  }

  const upButton = () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollUp)
  }, [])
  const toBlock = (height) => {
    window.scrollTo({top: height, left: 0, behavior: 'smooth'})
  }


  return (
    <div>
      <header>
        <div className="navigation">
        <div className="menu">
          <a onClick={upButton}>О нас</a>
          <a onClick={(e) => toBlock(e.target.getAttribute('height'))} height="700">Услуги</a>
          <a onClick={(e) => toBlock(e.target.getAttribute('height'))} height="1230">Схема проезда</a>
        </div>
          <div className="header-buttons">
          <button onClick={handleOpenModal} className="btn">Связаться</button>
          
        
          <a href="#" target="_blank" className="icon telegram"></a>
        
          
          </div>
          </div>
      </header>

      <ModalWindow show={showModal} onClose={handleCloseModal}>
            <h2 style={{ color: "#4824ff", fontSize: "40px" }}>Контакты</h2>
            <p style={{ fontSize: "22px" }}>Вы можете связаться с нами по телефону или в Телеграм</p>
          </ModalWindow>



      <div className="welcome-block">
        <div className="first-block">
          <h1>Шиномонтаж <span className="title">для своих!</span></h1>
          <h2 style={{ marginBottom: "7%", marginTop: "7%" }}>
           Качество, <span style={{ color: "#4824ff" }}>скорость</span><br/> и <span style={{ color: "#4824ff" }}>выгодные</span> цены для тех, кто в теме.</h2>
          <h3>Приезжайте, если цените своё время и хотите, <br/>
            чтобы с вашим авто обращались <span style={{ color: "#4824ff" }}>как с родным.</span></h3>
        </div>
        <div className="main-image-box">
          <img className="first-image-layer" src="./images/wheels.png" draggable="false"></img>
        </div>
      </div>

      <div className="service-block" draggable="false">
        <h1 style={{ fontSize: "52px" }}>УСЛУГИ</h1>
        <p style={{ fontSize: "27px" }}>Производим
          <span style={{ color: "#4824ff" }}> работы </span> по следующим направлениям:
        </p>

        <div style={{ display: "flex" }}>
          <p className="tag"><p className="tag-icon"/>Замена колеса (от 13 до 19 диаметра)<br/><br/>от 1199р</p>
          <p className="tag"><p className="tag-icon"/>Переобувка (снятие, монтаж, балансировка)<br/><br/>от 200р</p>
          <p className="tag"><p className="tag-icon"/>Хранение резины (удобно и безопасно)<br/><br/>от 1212р</p>
          <p className="tag"><p className="tag-icon"/>Ремонт проколов и порезов<br/><br/>от 1222р</p>
        </div>
        <div style={{ display: "flex", marginTop: "16px" }}>
          <p className="tag"><p className="tag-icon"/>Подкачка и замена вентилей<br/><br/>от 121221р</p>
          <p className="tag"><p className="tag-icon"/>Сезонная смена резины<br/><br/>от 1111р</p>
          
        </div>
        <p style={{fontSize: "27px" }}>Готовы обсудить все детали по телефону — <span style={{ color: "#4824ff", cursor: "pointer"}}
          onClick={handleOpenModal}> свяжитесь с нами,</span><br/> ответим на вопросы и подберем удобное время!</p>
      </div>


      <div className="portfolio-block">
        <div className="first-block">
          <h1 className="main-title">Схема проезда</h1>
        </div>
        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae0cd1a278abb6c44a747fc3757f7a25952a31ce53920a74920c676459ad19e7c&amp;source=constructor" width="100%" height="600" frameborder="0"></iframe>
      </div>

      <div className="footer">Шиномонтаж для своих!</div>

      <button className={scroll < 500 ? "" : "btn-up"} onClick={upButton}></button>
    </div>
  );
}

export default Main;
