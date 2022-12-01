import hello from "../../assets/avatar.svg";
// import Chart from "../charts/Chart";
import "./Main.css";

const Main = () => {
  return (
    <main>
      <div className="main__container">
        <div className="main__title">
          <img src={hello} alt="hello"></img>
          <div className="main__greeting">
            <h1>Velty Dashboard</h1>
            <p>Bem vindo ao seu painel</p>
          </div>
        </div>

        <div className="main__cards">
          <div className="card">
            <i className="fa fa-file-text fa-2x text-lightblue"></i>
            <div className="card_inner">
              <p className="text-primary-p">Número de pedidos</p>
              <span className="font-bold text-title">578</span>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-money fa-2x text-red"></i>
            <div className="card_inner">
              <p className="text-primary-p">Pagamentos</p>
              <span className="font-bold text-title">R$ 2.467</span>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-archive fa-2x text-yellow"></i>
            <div className="card_inner">
              <p className="text-primary-p">Número de produtos</p>
              <span className="font-bold text-title">670</span>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-bars fa-2x text-green"></i>
            <div className="card_inner">
              <p className="text-primary-p">Categorias</p>
              <span className="font-bold text-title">40</span>
            </div>
          </div>
        </div>

        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Daily Reports</h1>
                <p>Ubatuba, São Paulo, BR</p>
              </div>
              <i className="fa fa-usd"></i>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
