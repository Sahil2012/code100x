import { memo, useCallback, useState } from "react";

const App = () => {
  
  const [count,setCount] = useState(0);
  /**
   * whenener a state changes App will rerender but as functionPara is a function refernce so it wil change on defination
   * (Note :- function,objects are stored by refrence hence they change where as numbers and string are stotred by value so it doesn't change)
   * Flow :- count updated --> App rerender --> functionPara changes --> Child rerender
    const functionPara = () => {
      console.log("demo");
    } 
   */
  
  /**
   * As we wrap it in useCallback the function will only get defeined when dependency[] changes
   * useCallback makes a cache of the function defination
   * Flow : - count updated --> App rerender --> functionPara is unchanged as it is not depedent on count
   */
  const functionPara = useCallback(() => {
    console.log("demo");
  },[])

  return (<div>
    <button onClick={() => setCount(count + 1)}>{count}</button>
    <Child funPara={functionPara} />
  </div>)
}

/**
 * This memo will halp us to skip the rerendering if the props does not chnange
 * bcoz by default in react if the parent component changes then child also changes(rerender)
 */
const Child = memo(({funPara}) => {
  console.log('Rerender');

  return (
    <div>
      hi there
    </div>
  );
})

export default App;