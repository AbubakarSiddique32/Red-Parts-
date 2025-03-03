import "./SideBar.css";
const SideBar = () => {
  return (
    <div className="shop-all">
      <div className="shop-all-data">
        <h2>Wheels & Tyers</h2>
        <ul>
          <li>
            <a href="">Wheel Covers</a>
          </li>
          <li>
            <a href="">Brake Kits</a>
          </li>
          <li>
            <a href="">Tyre Chains</a>
          </li>
          <li>
            <a href="">Wheel Disks</a>
          </li>
          <li>
            <a href="">Tyers</a>
          </li>
          <li>
            <a href="">Sensors</a>
          </li>
          <li>
            <a href="">Accessories</a>
          </li>
        </ul>
        <button>Shop All</button>
      </div>
    </div>
  );
};

export default SideBar;
