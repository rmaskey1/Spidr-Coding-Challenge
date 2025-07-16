import './App.css'
import InterestForm from './components/InterestForm'
import airFryerImage from './assets/air-fryer.jpg'

function App() {

  return (
    <div className="form-image-wrapper">
      <div className="image-container">
        <img src={airFryerImage} alt="Air Fryer" />
      </div>
      <div className="form-container">
        <InterestForm />
      </div>
    </div>
  )
}

export default App
