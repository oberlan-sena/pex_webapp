import "./Sidebar.css";
import logo from "../../assets/logo.jpg";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="logo"></img>
          <h1>Pex Web App</h1>
        </div>
        <i
          onClick={() => closeSidebar()}
          className="fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>
      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <i className="fa-solid fa-gauge"></i>
          <a href="#">Dashboard</a>
        </div>
        <h2>ADMIN</h2>
        <div className="sidebar__link">
          <i className="fa fa-tachometer"></i>
          <a href="#">Vendas</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-tachometer"></i>
          <a href="#">Relatórios</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-building"></i>
          <a href="#">Lojas parceiras</a>
        </div>
        <h2>CLIENTES</h2>
        <div className="sidebar__link">
          <i className="fa fa-male"></i>
          <a href="#">Clientes</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
