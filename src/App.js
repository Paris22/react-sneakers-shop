import logo from './img/logo.png'
import cart from './img/cart.svg'
import user from './img/user.svg'
import search from './img/search.svg'
import plus from './img/plus1.svg'
import sneakers1 from './img/sneakers/1.jpg'
import sneakers2 from './img/sneakers/2.jpg'
import sneakers3 from './img/sneakers/3.jpg'
import sneakers4 from './img/sneakers/4.jpg'


function App() {
  return (
    <div className="wrapper clear">
        <header className="d-flex justify-between align-center p-40">
            <div className="headerLeft d-flex align-center">
                <img width={40} height={40} src={logo} alt="Logo"/>
                <div>
                    <h3 className="text-uppercase">React Sneakers</h3>
                    <p className="opacity-5">Магазин лучших кроссовок</p>
                </div>
            </div>
            <ul className="d-flex">
                <li className="mr-30">
                    <img width={18} height={18} src={cart} alt="Cart"/>
                    <span>1205 руб.</span>
                </li>
                <li>
                    <img width={18} height={18} src={user} alt="User"/>
                </li>
            </ul>
        </header>
        <div className="content p-40">
            <div>
                <h1 className="mb-40">Все кроссовки</h1>
                <div className="search-block">
                    <img src={search} alt="Search"/>
                    <input placeholder="Поиск..."/>
                </div>
            </div>
            <div className="sneakers d-flex justify-around">
                <div className="card">
                    <img width={133} height={112} src={sneakers1} alt="Sneakers"/>
                    <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column">
                            <span>Цена:</span>
                            <b>12 999 руб.</b>
                        </div>
                        <button className="button">
                            <img width={11} height={11} src={plus} alt="Plus"/>
                        </button>
                    </div>
                </div>

                <div className="card">
                    <img width={133} height={112} src={sneakers2} alt="Sneakers"/>
                    <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column">
                            <span>Цена:</span>
                            <b>12 999 руб.</b>
                        </div>
                        <button className="button">
                            <img width={11} height={11} src={plus} alt="Plus"/>
                        </button>
                    </div>
                </div>

                <div className="card">
                    <img width={133} height={112} src={sneakers3} alt="Sneakers"/>
                    <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column">
                            <span>Цена:</span>
                            <b>12 999 руб.</b>
                        </div>
                        <button className="button">
                            <img width={11} height={11} src={plus} alt="Plus"/>
                        </button>
                    </div>
                </div>

                <div className="card">
                    <img width={133} height={112} src={sneakers4} alt="Sneakers"/>
                    <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column">
                            <span>Цена:</span>
                            <b>12 999 руб.</b>
                        </div>
                        <button className="button">
                            <img width={11} height={11} src={plus} alt="Plus"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
