
import { useSelector } from "react-redux"
export const DisplayCount = () => {

   const state = useSelector(state =>state);
    return (
        <div>
      <h1>Display Count Component:  {state.count}</h1>
        </div>
            
        

    )
}