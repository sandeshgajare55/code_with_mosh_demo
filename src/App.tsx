import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import ButtonGroup from"./components/ButtonGroup";
import { useState } from "react";
function App(){
  let items =[
    'New York',
    'San Fransisco',
    'Tokyo',
    'London',
    'Las Vegas'
    ];
    const handleSelectItem =(item :String) =>{
      console.log(item);
    }
   const [alertVisibile,setAlertVisibility] = useState(false);
  return <div><ListGroup items={items} heading="Cities" onSelectedItem={handleSelectItem}></ListGroup>
  {alertVisibile && <Alert onClose={()=>setAlertVisibility(false)}></Alert>}
  <ButtonGroup color='primary' onClick={()=>setAlertVisibility(true)}>My Button</ButtonGroup>
  </div>; 
  
}

export default App;