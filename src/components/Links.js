import React, { useEffect, useState } from 'react'
import LinkForm from './LinkForm'
import { db } from '../firebase'
import { toast } from 'react-toastify'

const Links = () => {
    const [allLinks, setAllLinks] = useState([]);
    const [currentId, setCurrentId] = useState("");


    useEffect(() => {
        /* cada vez que refresco la página o se actualiza un estado */
        getLinks()
    }, [])

    const addOrdedit = async (linkObject) => {
        /* es asíncrono porque mientras se van guardando los datos, nosotros queremos que también se vaya ejecutando otro código */
        try{
            if (!currentId) {
                await db /* base de datos firestore */
                    .collection('links') /* creas la colección "links" */
                    .doc() /* guardas un doc nuevo y se genera un id único */
                    .set(linkObject) /* se le agrega a esa collection el linkObject (que viene desde addOrEdit) */
    
                toast(('link guardado'), {
                    type: 'success',
                    autoclose: 2000
                })
            }
            else {
                await db.collection('links').doc(currentId).update(linkObject)
                toast(('link actualizado'), {
                    type: 'success',
                    autoclose: 2000
                })
                setCurrentId('')
            }

        }
        catch (error) {
            console.error(error)
        }
    }

    const getLinks = async () => {
        db
            .collection('links')
            .onSnapshot((querySnapshot) => {
                const docs = []
                querySnapshot.forEach((doc) => {
                    docs.push({ ...doc.data(), id: doc.id })
                });
                setAllLinks(docs)
            })
    }

    const deleteLink = async (id) => {
        if (window.confirm('Estas seguro que querés borrar el link???')) {
            await db
                .collection('links')
                .doc(id)
                .delete()
            toast(('link borrado'), {
                type: 'success',
                autoclose: 2000
            })
        }
    }

    return (
        <div>
            <LinkForm {...{ addOrdedit, currentId, allLinks }} />
            {allLinks?.map((link) => (
                <div key={link.id}>
                    <p >
                        {link.name}{" "}
                        {link.url}</p>
                    <button onClick={() => deleteLink(link.id)}> Borrar link</button>
                    <button onClick={() => setCurrentId(link.id)}> Actualizar</button>
                </div>
            ))}
        </div>
    )
}

export default Links
