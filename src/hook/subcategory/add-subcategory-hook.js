import React, { useEffect, useState } from 'react';
import { createSubCategory } from '../../redux/actions/subcategoryAction'
import { useSelector, useDispatch } from 'react-redux'
import notify from '../../hook/useNotifaction'
import { getAllCategory } from '../../redux/actions/categoryAction'

const AddSubcategoryhook = () => {

    const dispatch = useDispatch();
    
    useEffect(() => {
        if (!navigator.onLine) {
            notify("Il y a un problème avec la connexion Internetexion Internet", "warn")
            return;
        }
        dispatch(getAllCategory());
    }, [])
    const [id, setID] = useState('0')
    const [name, setName] = useState('')
    const [loading, setLoading] = useState(true)
    //get last catgeory state from redux
    const category = useSelector(state => state.allCategory.category)


    //get last sub catgeory state from redux
    const subcategory = useSelector(state => state.subCategory.subcategory)

    //on change dropdown menu
    const handelChange = (e) => {
        console.log(e.target.value)
        setID(e.target.value)
    }

    //to save name
    const onChangeName = (e) => {
        e.persist();
        setName(e.target.value)
    }
    //on save data 
    const handelSubmit = async (e) => {
        e.preventDefault();
        if (!navigator.onLine) {
            notify("Il y a un problème avec la connexion Internet", "warn")
            return;
        }
        if (id === "0") {
            notify("Veuillez choisir une classification majeure", "warn")
            return;
        }
        if (name === "") {
            notify("Veuillez saisir le nom de classificatione classificatione classificatione classification", "warn")
            return;
        }

        setLoading(true)
        await dispatch(createSubCategory({
            name,
            category: id
        }))
        setLoading(false)

    }
    useEffect(() => {

        if (loading === false) {
            setName("")
            setID("0")
            if (subcategory)
                console.log(subcategory)
            if (subcategory.status === 201) {
                notify("L'ajout est réussi", "success")
            }
            else if (subcategory === "Error Error: Request failed with status code 400") {
                notify("Ce nom est répété, veuillez choisir un autre nom", "warn")
            }
            else {
                notify("Il y a un problème avec le processus d'addition", "warn")
            }

            setLoading(true)
        }
    }, [loading]
    )


    return [id, name, loading, category, subcategory, handelChange, handelSubmit, onChangeName]
};

export default AddSubcategoryhook;
