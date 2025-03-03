import "./form.css";
const Form = () => {
  return (
    <div className="dropdown-container">
      <select className="dropdown-selection" defaultValue="">
        <option value="" disabled>
          Select year
        </option>
        <option value="2025">2025</option>
        <option value="2024">2024</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
      </select>
      <select className="dropdown-selection" defaultValue="">
        <option value="" disabled>
          Select Make
        </option>
        <option value="Toyota">Toyota</option>
        <option value="Ford">Ford</option>
        <option value="Honda">Honda</option>
      </select>
      <select className="dropdown-selection" defaultValue="">
        <option value="" disabled>
          Select Model
        </option>
        <option value="Camry">Camry</option>
        <option value="F-150">F-150</option>
        <option value="Civic">Civic</option>
      </select>
      <button className="submit-button">Submit</button>
    </div>
  );
};

export default Form;
