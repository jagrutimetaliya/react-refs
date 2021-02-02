
import './App.css';
import FocusInput from './components/FocusInput';
import FowardRefParentInput from './components/FowardRefParentInput';
import Input from './components/Input';
import RefsDemo from './components/RefsDemo';

function App() {
  return (
    <div className="App">
     {/* <RefsDemo></RefsDemo> */}
    {/* <Input></Input> */}
   {/* <FocusInput/> */}
   <FowardRefParentInput/>
    </div>
  );
}

export default App;
