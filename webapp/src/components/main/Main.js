import hello from "../../assets/avatar.svg";
import Chart from "../charts/Chart";
import "./Main.css";

const Main = () => {
  return (
    <main>
      <div className="main__container">
        <div className="main__title">
          <img src={hello} alt="hello"></img>
          <div className="main__greeting">
            <h1>Dashboard</h1>
            <p>Bem vindo ao seu painel</p>
          </div>
        </div>

        <div className="main__cards">
          <div className="card">
            <i className="fa fa-file-text fa-2x text-lightblue"></i>
            <div className="card_inner">
              <h1 className="text-primary-p">R$ 312.321,00</h1>
              <p className="font-bold text-title">Receita total</p>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-money fa-2x text-red"></i>
            <div className="card_inner">
              <h1 className="text-primary-p">R$ 74.421,00</h1>
              <span className="font-bold text-title">Lucro total</span>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-archive fa-2x text-yellow"></i>
            <div className="card_inner">
              <p className="text-primary-p">R$ 3,12</p>
              <span className="font-bold text-title">Lucro por venda</span>
            </div>
          </div>

        </div>

        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <i className="fa fa-usd"></i>
            </div>
            <Chart></Chart>
          </div>

          <div className="charts__right">
            <div className="charts__right__title">
              <i className="fa fa-area-chart"></i>
            </div>

            <div className="charts__right__cards">
              <div className="card1">
                <h1>lucro</h1>
                <p>R$ 2.500</p>
              </div>

              <div className="card2">
                <h1>Pagamentos</h1>
                <p>R$ 250,00</p>
              </div>

              <div className="card3">
                <h1>Custos</h1>
                <p>R$ 150,00</p>
              </div>

              <div className="card4">
                <h1>Banco de dados</h1>
                <p>R$ 180,00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
