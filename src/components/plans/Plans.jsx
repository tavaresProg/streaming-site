import './Plans.css';
import {BsCheck} from 'react-icons/bs'

const Plans = () => {
  return (


    <div className="plans-container">
      <h1>The best plans for you</h1>
      <p>Watch on TVs, Tablets, Laptops, Smartphones and more!</p>
      <h3>Choose your plan</h3>

      <div className="plan-wraper">
        <div className="plan-container">
          <h3>4 Months</h3>
          <h3>USD $46.00</h3>
          <p><BsCheck/>Pay only USD $11.50 per month!</p>
          <p><BsCheck/>Save USD $26.00!</p>
          <button>Choose this plan</button>
        </div>

        <div className="plan-container">
          <h3>12 Months</h3>
          <h3>USD $120.00</h3>
          <p><BsCheck/>Pay only USD $10.00 per month!</p>
          <p><BsCheck/>Save USD $96.00!</p>
          <button>Choose this plan</button>
        </div>
        <div className="plan-container">
          <h3>1 Month</h3>
          <h3>USD $18.00</h3>
          <p><BsCheck/>Cheaper than other streaming services</p>
          <button>Choose this plan</button>
        </div>
      </div>


    </div>
  )
}

export default Plans