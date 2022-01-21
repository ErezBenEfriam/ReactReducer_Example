
import { useDispatch } from "react-redux"
import { addCount } from "../../store-management/actions/CounterAction"
import { customCount } from "../../store-management/actions/CounterAction"
export const Controlcount = () => {

    //for using our Action that we have created in  store-management/actions
    const dispath = useDispatch();

    //change the state of the varible:
    const changeCount = (number) => {
        dispath(addCount(number))
    }
    const customeCount = (number) => {
        if(isNaN(Number(number)))return; 
       dispath(customCount(Number(number)))
    }
    

    return (
        <div>
            <h1>Change count Component</h1>
            <button onClick={() => changeCount(1)}>add count</button>
            <button onClick={() => changeCount(-1)}>reduce count</button>
            <input  onChange={(e) => customeCount(e.target.value)} placeholder="type count"  ></input>
        
        </div>

    )
}