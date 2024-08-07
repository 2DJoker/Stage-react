function App() { 
  return (
  <div className="wrapper">
    <div className="sidebar-shadow">
      <div className="sidebar">
        <h2>КОРЗИНА</h2>

        <div className="cartitem">
          <img height={130} width={150} src="/img/items/yeezy4.jpeg" alt="Sneakers"/>
          <div className="item-basket">
            <p className="p">yeezy 350  black dogs стильные какашки </p>
            <b>359.99 $</b>
          </div>
          <img className="picture" height={17} width={17} src="/img/plus.png" alt="remove"/>
        </div>

        <div className="cartitem">
          <img height={130} width={150} src="/img/items/yeezy4.jpeg" alt="Sneakers"/>
          <div className="item-basket">
            <p className="p">yeezy 350  black dogs стильные какашки </p>
            <b>359.99 $</b>
          </div>
          <img className="picture" height={17} width={17} src="/img/plus.png" alt="remove"/>
        </div>
        <ul className="CardTotalBlock">
          <li>
            <span>Итого:</span>
            <div></div>
            <b>799.99 $</b>
          </li>
          <li>
            <span>Доставка</span>
            <div></div>
            <b>800 $</b>
          </li>
        </ul>
      </div>
    </div>
    

    <header>
      <div className="headerleft">
      <img width={73} height={70} src="/img/cat-logo.jpg" alt="loho"/>
      <div className="headerinfo"> 
        <h3>Stage!</h3>
        <p>Sneakers store</p>
      </div>
      </div>
      <ul className="headerRight">
        <li>
          <img width={40} height={40} src="/img/basket.png" alt="basket"/>
        </li>
        <span>137 рублей</span>
        <li>
          <img width={29} height={29} src="/img/user.png" alt="logo"/> 
        </li>
      </ul>
    </header>

    <div className="Carousel">
    
    </div>

  <div className="contentpages">
   <div className="wrapper-search">
   <h1>Каталог</h1>
    <div className="search-block">
    <img height={15} width={15} src="/img/search.png" alt="search-pick"/>
    <input placeholder="Search..."/>
     </div>
   </div>
    
  <div className="Sneakers">
  <div className="card"> 
   <div className="heart">
    <img height={25} width={25} src="/img/heart.svg" alt="heart"/>
   </div>
    <img width={150} height={160} src="/img/items/force.png" alt="goods"/>
    <h5>Yeezy Boost 350 kakashki</h5>
      <div className="CardButt">
        <div className="CardPrice">
          <span>Price:</span>
          <b>139.99 $</b>
        </div>
        <button className="button">
          <img width={9} height={9} src="/img/plus.png" alt="plus"/>
      </button>
     </div>
      </div>
      <div className="card"> 
    <img width={210} height={180} src="/img/items/yeezy4.jpeg" alt="goods"/>
    <h5>Yeezy Boost 350 kakashki</h5>
      <div className="CardButt">
        <div className="CardPrice">
          <span>Price:</span>
          <b>139.99 $</b>
        </div>
        <button className="button">
          <img width={9} height={9} src="/img/plus.png" alt="plus"/>
      </button>
     </div>
      </div> <div className="card"> 
    <img width={150} height={160} src="/img/items/force.png" alt="goods"/>
    <h5>Yeezy Boost 350 kakashki</h5>
      <div className="CardButt">
        <div className="CardPrice">
          <span>Price:</span>
          <b>139.99 $</b>
        </div>
        <button className="button">
          <img width={9} height={9} src="/img/plus.png" alt="plus"/>
      </button>
     </div>
      </div> <div className="card"> 
    <img width={210} height={180} src="/img/items/yeezy4.jpeg" alt="goods"/>
    <h5>Yeezy Boost 350 kakashki</h5>
      <div className="CardButt">
        <div className="CardPrice">
          <span>Price:</span>
          <b>139.99 $</b>
        </div>
        <button className="button">
          <img width={9} height={9} src="/img/plus.png" alt="plus"/>
      </button>
     </div>
      </div>
  </div>
    </div>
  </div>
  );
}

export default App;

  