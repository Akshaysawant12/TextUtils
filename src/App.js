
import { useState } from 'react';
import './App.css';

import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';


function App() {

  const [mode,setMode]=useState('light');
const [alert,setAlert]=useState(null);
const showAlert=(message,type)=>{
setAlert({
  msg:message,
  type:type
}
 
)
setTimeout(()=>{
  setAlert(null);

},1500);
}

  const toggleMode=()=>{
    if(mode === 'light'){ 
      setMode('dark')
      document.body.style.backgroundColor="#042743";
      showAlert('dark mode has been enabled',"Success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor="white";
      showAlert('light mode has been enabled',"Success");
    }
  }
 
  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    
 <div className='container'>
<TextForm showAlert={showAlert} heading="Try TextEditor-Word Counter,Character Counter,Copy Text,Remove Extra Spaces" mode={mode} />

</div> 

    </>
  );
}

export default App;
