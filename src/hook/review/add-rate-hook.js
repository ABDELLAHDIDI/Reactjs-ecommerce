import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createNewUser, forgetPassword, loginUser } from '../../redux/actions/authAction';
import { useNavigate } from 'react-router-dom'
import notify from '../useNotifaction';
import { createReview } from './../../redux/actions/reviewAction';

const AddRateHook = (id) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [rateText, setRateText] = useState('')
    const [rateValue, setRateValue] = useState(0)

    const [loading, setLoading] = useState(true)


    const OnChangeRateText = (e) => {
        setRateText(e.target.value)
    }
    const OnChangeRateValue = (val) => {
        setRateValue(val)
    }
    var user = ""
    if (localStorage.getItem("user") != null)
        user = JSON.parse(localStorage.getItem("user"))


    ///when save rate 
    const onSubmit = async () => {
        if (rateText === "") {
            notify("Veuillez écrire un commentaire", "error")
            return
        }
        setLoading(true)
        await dispatch(createReview(id, {
            review: rateText,
            rating: rateValue
        }))
        setLoading(false)
    }

    const res = useSelector(state => state.reviewReducer.createView)

    useEffect(() => {
        if (loading === false) {
            if (res) {
                console.log(res)
                if (res.status && res.status === 403) {
                    notify("Le toxicomane n'est pas autorisé à évaluer", "error")
                } else if (res.data.errors && res.data.errors[0].msg === "You already added review on this product") {
                    notify("J'ai ajouté une évaluation de ce produit à l'avance", "error")
                } else if (res.status && res.status === 201) {
                    notify("L'évaluation a été ajoutée avec succès", "success")
                    setTimeout(() => {
                        window.location.reload(false)
                    }, 1000);
                }
            }
        }
    }, [loading])

    return [OnChangeRateText, OnChangeRateValue, rateText, rateValue, user, onSubmit]
}

export default AddRateHook