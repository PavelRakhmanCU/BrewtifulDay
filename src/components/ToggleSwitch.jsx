import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { CgMenuGridR } from "react-icons/cg";
const ToggleSwitch=()=>{
    const {toggleActivator, setToggleActivator}= useContext(GlobalContext);
    const handleClick=()=>{
        setToggleActivator(!toggleActivator);
    }
    return(
        <div className={`toggle-switch ${toggleActivator ? "active" : ""}`} onClick={()=>handleClick()}><CgMenuGridR/></div>
    )
}
export default ToggleSwitch;