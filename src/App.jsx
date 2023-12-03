import "./App.css";
import { AttributeForm } from "./components/AttributeForm";

function App() {

  const txtTitle = 'Атрибут р'

  return (
    <>
      <div className="form-container">
        <AttributeForm title='Атрибут' />
      </div>
    </>
  )
}

export default App
