import { useEffect, useMemo, useState } from "react";

const App = () => {

  console.log('rerender');

  const[counter,setCounter] = useState(0);
  const[value,setValue] = useState(0);
  /**
   * In this approch first value will change which will rerender the APP
   * then sum will also changw which will again rerender the App i.e. 2 times 
   * this is bcoz of the flow 
   * valChange --> Rerender --> useEffect --> sumChange --> Rerender
    const[sum,setSum] = useState(0);

    useEffect(() => {
      let ans = 0;
      for(let i = 1; i <= value; i++) ans ++;
      setSum(ans);
    },[value]); 
  */

  /**
   * In this useMemo approch the rernder will happen only once bcoz 
   * Reason 1 : sum is not a state Variable
   * Reason 2 : useMemo will update the sum once the value is changed which will result in new sum variable
   * Flow : valuChanged --> Rerender --> sumCalculated (sum is instance variable not a state)
   */
  const sum  = useMemo(() => {
    let ans = 0;
    for(let i = 1; i <= value; i++) ans ++;
    return ans;
  },[value]);
  
  return(<div>
    <input type="number" onChange={(event) => setValue(event.target.value)}/>
    <h5>sum is {sum}</h5>
    <button onClick={() => setCounter(counter + 1)}>counter {counter}</button>
  </div>);
}

export default App;