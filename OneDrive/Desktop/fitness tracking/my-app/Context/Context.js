import React, {createContext, useState} from "react";

const FitnessItems = createContext()

const FitnessContext = ({children}) => {
    const [completed,setCompleted] = useState([])
    const [workout,setWorkout] = useState(0)
    const [calories,setcalories] = useState(0)
    const [mins,setmins] = useState(0)
    return(
        <FitnessItems.Provider value={{completed,setCompleted,workout,setWorkout,mins,setmins,calories,setcalories}}>
            {children}
        </FitnessItems.Provider>
    )

}

export {FitnessContext,FitnessItems}