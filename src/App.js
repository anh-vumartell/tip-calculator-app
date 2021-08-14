import logo from "./images/logo.svg";
import dollar from "./images/icon-dollar.svg";
import personIcon from "./images/icon-person.svg";
import "./styles/main.scss";

function App() {
  return (
    <div className="app-container">
      <div className="app-header">
        <img src={logo} className="App-logo" alt="logo" />
      </div>

      <div className="app-content">
        <div className="input-control">
          <label>Bill</label>
          <span>
            <img src={dollar} alt="" />
          </span>
          <input type="text" />
        </div>
        <div clasName="tip-input">
          <label>Select Tip %</label>
          <div className="buttons-container">
            <button className="btn-percent numbers">5%</button>
            <button className="btn-percent numbers">10%</button>
            <button className="btn-percent numbers">15%</button>
            <button className="btn-percent numbers">25%</button>
            <button className="btn-percent numbers">50%</button>

            <input type="text" placeholder="Custom" />
          </div>
        </div>

        <div className="input-control">
          <label>Number of People</label>
          <span>
            <img src={personIcon} alt="" />
          </span>
          <input type="number" />
        </div>

        <div className="result-container">
          <div className="result-tip">
            <div className="result-header">
              <h4>Tip Amount</h4>
              <p>/ person</p>
            </div>
            <div className="numbers result">$4.27</div>
          </div>
          <div className="result-tip">
            <div className="result-header">
              <h4>Total</h4>
              <p>/ person</p>
            </div>
            <div className="numbers result">$32.79</div>
          </div>
          <button className="btn-reset">Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
