import './App.css'
import Greetings from './Props'
import Button from './button'

function App() {
  return (
    <div className="flex gap-4 p-6">
      <Button text="Save" variant="primary" />
      <Button text="Cancel" variant="secondary" />
    </div>
  );
}
