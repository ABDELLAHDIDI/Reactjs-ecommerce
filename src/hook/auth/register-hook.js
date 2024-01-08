import React, { useState, useEffect } from 'react'
import notify from './../useNotifaction';
import { useDispatch, useSelector } from 'react-redux';
import { createNewUser } from '../../redux/actions/authAction';
import { useNavigate } from 'react-router-dom'
const RegisterHook = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [loading, setLoading] = useState(true)

    const onChangeName = (e) => {
        setName(e.target.value)
    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const onChangePhone = (e) => {
        setPhone(e.target.value)
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const onChangeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }

    const validationValues = () => {
        if (name === "") {
            notify("Veuillez saisir le nom d'utilisateur", "error")
            return;
        }
        if (phone.length <= 10) {
            notify("Veuillez saisir le numéro de téléphone correct", "error")
            return;
        }
        if (password != confirmPassword) {
            notify("Veuillez confirmer le mot de passe", "error")
            return;
        }

    }

    const res = useSelector(state => state.authReducer.createUser)
    //console.log("res ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++:\n "+res)

    //save data
    const OnSubmit = async () => {
        validationValues();
        setLoading(true)
        await dispatch(createNewUser({
            name,
            email,
            password,
            passwordConfirm: confirmPassword,
            phone
        }))
        setLoading(false)
    }

    useEffect(() => {
        if (loading === false) {
            if (res) {
                console.log(res)
                if (res.data.token) {
                    localStorage.setItem("token", res.data.token)
                    notify("Le compte a été enregistré avec succès", "success")
                    setTimeout(() => {
                        navigate('/login')
                    }, 2000);
                }

                if (res.data.errors) {
                    if (res.data.errors[0].msg === "E-mail already in use")
                        notify("Ce Mail E est enregistré avant", "error")
                }
                if (res.data.errors) {
                    if (res.data.errors[0].msg === "accept only egypt phone numbers")
                        notify("Le nombre doit être un nombre égyptien composé de 11 numéros", "error")
                }

                if (res.data.errors) {
                    if (res.data.errors[0].msg === "must be at least 6 chars")
                        notify("Le moins de mot de passe doit être environ 6 lettres ou chiffres", "error")
                }


            }
        }
    }, [loading])

    return [name, email, phone, password, confirmPassword, loading, onChangeName, onChangeEmail, onChangePhone, onChangePassword, onChangeConfirmPassword, OnSubmit]
}

export default RegisterHook