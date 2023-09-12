import { nanoid } from "nanoid";
import { createContext, useState } from "react";


export const AddFormContext = createContext();

export function AddFormProvider ({children}) {
    const [formData, setFormData] = useState({
    //Step1
    fullName: "",
    suffix: "",
    sex: "",
    bloodtype: "",
    age: "",
    address: "",
    bod: "",
    bop: "",
    civil: "",
    cp: "",
    //Step2
    bp: "",
    temp: "",
    pr: "",
    weight: "",
    height: "",
    bmi: "",
    visit: "",
    type: "",
    staff: "",
    chief: "",
    //step3
    diagnosis: "",
    medication: "",
    laboratory: "",
    nhcp: "",
    plt: "",


    })
    return (
        <AddFormContext.Provider value={{formData,setFormData}}>
            {children}
        </AddFormContext.Provider>
    )
}