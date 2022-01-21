
import { useSelector } from "react-redux"
export const DisplayCount = () => {

    //the way we display our state
   const state = useSelector(state =>state);
   //the state.count is from the store-managment/store : {count:countReducer}
    return (
        <div>
      <h1>Display Count Component:  {state.count}</h1>
        </div>
            
        

    )
}