import { nanoid } from "nanoid";
import { createContext, useState } from "react";


export const AddFormContext = createContext();

export function AddFormProvider ({children}) {
    const [formData, setFormData] = useState({
    // Step1
        fullName: "",
        age: "",
        dob: "",
        gender: "",
        philhealth: "",
        address: "",
        cp: "",
    // Step 2
        temp: "",
        bp: "",
        weight: "",
        height: "",
        bmi: "",
        pr: "",
        rr: "",

    // Step 3
        findings1: "",
        doctor:"",
        nurse:"",

    })
    return (
        <AddFormContext.Provider value={{formData,setFormData}}>
            {children}
        </AddFormContext.Provider>
    )
}