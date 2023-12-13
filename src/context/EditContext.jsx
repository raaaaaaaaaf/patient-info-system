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

    const [editData, setEditData] = useState({})
    const [bod, setBod] = useState(null);
    const [cstatus, setCstatus] = useState('')
    const [patient, setPatient] = useState('')
    const [sex, setSex] = useState('')
    const [bloodType, setBloodType] = useState('')
    const [staff, setStaff] = useState('')
    
    return (
        <EditFormContext.Provider value={{formData, setFormData, formId, setFormId, editData, setEditData, bod, setBod, cstatus, setCstatus, patient, setPatient, sex, setSex, bloodType, setBloodType, staff, setStaff}}>
            {children}
        </EditFormContext.Provider>
    )
}