import { createContext, useState } from "react";


export const EditFormContext = createContext();

export function EditFormProvider ({children}) {
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

    });

    const [formId, setFormId] = useState("");
    
    return (
        <EditFormContext.Provider value={{formData, setFormData, formId, setFormId}}>
            {children}
        </EditFormContext.Provider>
    )
}