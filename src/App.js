function App() {
  return <div className="wrapper">

    <header>
      <div className="headerleft">
      <img width={73} height={70} src="/img/cat-logo.jpg"/>
      <div className="headerinfo"> 
        <h3>Stage!</h3>
        <p>Sneakers store</p>
      </div>
      </div>
      <ul className="headerRight">
        <li>
          <img width={40} height={40} src="/img/basket.png"/>
        </li>
        <span>137 рублей</span>
        <li>
          <img width={29} height={29} src="/img/user.png"/> 
        </li>
      </ul>
    </header>
  <div className="contentpages">
    <h1>Каталог</h1>
    ........
  </div>
  </div>;
}

export default App;