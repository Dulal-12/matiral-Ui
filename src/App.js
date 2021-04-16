
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Checkbox from '@material-ui/core/Checkbox';
import { useState } from 'react';
import TextField from '@material-ui/core/TextField';


function App() {
  const [checked , setChecked] = useState(true);
  return (
    < div className="App">
   
     <ButtonGroup>
     <Button
       variant="contained" 
       color="primary"
       onClick={()=> alert("Hello Guys , alert")}
       size="large"
       style={{fontSize:4}}
       startIcon={<SaveIcon/>}>Hello , Fiverr</Button>


   <Button
       variant="contained" 
       color="secondary"
       onClick={()=> alert("Hello Guys , alert")}
       size="large"
       style={{fontSize:4}}
       startIcon={<SaveIcon/>}>Hello ,City University</Button>
     </ButtonGroup><br/>
     <Checkbox
     checked={checked}
     color="primary"
     onClick={()=> setChecked(!checked)}
     />


     <br/>
     <TextField
     variant="outlined"
     color="secondary"
     type="email"
     label="Email"
      placeholder="test@gmail.com"/>
    </div>
  );
}

export default App;
