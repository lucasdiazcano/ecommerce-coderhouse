# CONFIGURACIÓN FIRESTORE

1. Hacerse cuenta en Firebase

2. Ingresar a la consola de Firebase 

3. Añade una aplicación WEB: ir a descripción (o información) general del proyecto, agregar un proyecto y agarrar el código

```var firebaseConfig = {
    apiKey: "AIzaSyBOVExy0eI-xXbYVCO9-yG07j8S9WK7MKs",
    authDomain: "fb-crud-b1ec5.firebaseapp.com",
    projectId: "fb-crud-b1ec5",
    storageBucket: "fb-crud-b1ec5.appspot.com",
    messagingSenderId: "827459989097",
    appId: "1:827459989097:web:d32310d166743062c87cf8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);```

y llevarlo a un archivo firebase.js en tu proyecto.

4. Importar  **import 'firebase/firestore'** en firebase.js

5. Exportar firestore: **export const db = fb.firestore();** ===> db va a ser la base de datos de firestore.

6. Para crear un nuevo "esquema"
    db /* base de datos firestore */
                    .collection('links') /* creas el esquema/collection "links" */
                    .doc() /* guardas un doc nuevo y se genera un id único */
                    .set(Object) /* se le agrega a esa collection el Object (que viene desde algún estado) */

7. Para editar un objeto específico de la colección: 
    db.collection('links').doc(Id).update(Object)

8. Para hacer get de un objeto específico: 
    db.collection('links').doc(id).get();

9. Para obtener todos los objetos:
            db <!-- la firestore -->
            .collection('links') <!-- la colección -->
            .onSnapshot((querySnapshot) => { 
                const docs = []
                querySnapshot.forEach((doc) => { <!-- los objetos que vienen en un arreglo -->
                    docs.push({ ...doc.data(), id: doc.id })
                });

10. Para eliminar un objeto específico:
        await   db <!-- se debe usar AWAIT o Promesas porque son operaciones asíncronas -->
                .collection('links') <!-- colección -->
                .doc(id)    <!-- obtengo objeto por ID -->
                .delete()   <!-- borro el objeto que coincide con ese ID -->