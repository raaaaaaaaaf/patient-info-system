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
    const [bod, setBod] = useState(null);
    const [cstatus, setCstatus] = useState('')
    const [patient, setPatient] = useState('')
    const [sex, setSex] = useState('')
    const [bloodType, setBloodType] = useState('')
    const [staff, setStaff] = useState('')
    return (
        <AddFormContext.Provider value={{formData, setFormData, bod, setBod, cstatus, setCstatus, patient, setPatient, sex, setSex, bloodType, setBloodType, staff, setStaff}}>
            {children}
        </AddFormContext.Provider>
    )
}