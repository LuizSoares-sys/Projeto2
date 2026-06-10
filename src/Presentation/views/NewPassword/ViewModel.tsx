import React, { useState } from "react";

const NewViewModel = () => {

    const [values, setValues] = useState({
        userToken: '',
        userEmail: '',
        userNewPassword: '',
        userConfirmePassword: '',
    });

    const onChange = (property: string, value: any) => {
        setValues({ ...values, [property]: value })
    }

    const login = () => {
       // const { userToken, userEmail, userNewPassword, userConfirmePassword } = values;
        console.log(JSON.stringify(values));
    }
    return {
        ...values,
        onChange,
        login,
    }

}

export default NewViewModel