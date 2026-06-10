import React, { useState } from "react";
import { fakeUser } from "../../../data/FakeUser";

const HomeViewModel = () => {

    const [values, setValues] = useState({
        userEmail: '',
        userPassword: '',
    });

    const onChange = (property: string, value: any) => {
        setValues({ ...values, [property]: value });
    };

    const login = () => {

        if (
            values.userEmail === fakeUser.email &&
            values.userPassword === fakeUser.password
        ) {
            console.log('Login realizado!');
        } else {
            console.log('Usuário ou senha inválidos');
        }
    };

    return {
        ...values,
        onChange,
        login,
    };
};

export default HomeViewModel;