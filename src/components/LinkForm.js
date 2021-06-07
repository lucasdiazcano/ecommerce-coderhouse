import React, { useState, useEffect } from 'react'
import { db } from '../firebase'
import { toast } from 'react-toastify'

const LinkForm = ({ addOrdedit, allLinks, currentId }) => {
    const initialStateValues = {
        url: "",
        name: "",
        mail: ""
    }
    const [values, setValues] = useState(initialStateValues)

    const handleInputChange = e => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });

    }
    
    const validateUrl = string => {
        return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(string);

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!validateUrl(values.url)){
            return toast(('invalid url'), {
                type: 'warning',
                autoclose: 1000
            })
        }
        else {
            addOrdedit(values)
            setValues({ ...initialStateValues }) /* volves al form al estado inicial (vacío) */
        }
    

    }

    const getLinkById = async (id) => {
        const doc = await db.collection('links').doc(id).get();
        setValues({ ...doc.data() })
    }

    useEffect(() => {
        if (currentId === '') {
            setValues({ ...initialStateValues })
        } else {
            getLinkById(currentId)
        }

    }, [currentId])

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input onChange={handleInputChange} name='url' placeholder='url' value={values.url} />
                <input onChange={handleInputChange} name='name' placeholder='name' value={values.name} />
                <input onChange={handleInputChange} name='mail' placeholder='mail' value={values.mail} />

                {currentId === '' ? 
                <button type='submit' > Guardar </button> 
                : 
                <button type='submit' > Actualizar </button>}

            </form>
        </>
    )
}

export default LinkForm
