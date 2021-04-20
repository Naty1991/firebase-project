import React, {useState} from 'react'
import {auth} from '../Firebaseconfig'
import {useHistory} from 'react-router-dom'

const Login = () => {
    const historial = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [msgerror, setMsgError] = useState(null)

    const RegistrarUsuario = (e)=>{
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email, password)
        .then(r=> historial.push('/'))

        .catch(e => {
            if(e.code == 'auth/invalid-email'){
                setMsgError("El email ingresado no contiene el formato correcto.")
            }
            if(e.code == 'auth/weak-password'){
                setMsgError("La contraseña debe contener un minimo de 6 dígitos.")
            }
        })
    }

    const loginUsuario = ()=> {
        auth.signInWithEmailAndPassword(email, password)
        .then((r) => historial.push('/'))
        .catch((err)=>{
            if(err.code == 'auth/wrong-password'){
                setMsgError("La constraseña es incorrecta")
            }
            if(err.code == 'auth/wrong-password'){
                setMsgError("El email colocado no existe")
            }
        
        })
    }


    return (
        <div className="row mt-5">
            <div className="col"></div>
            <div className="col">
                <form  className="form-group">
                    <input  onChange={(e)=>{setEmail(e.target.value)}}
                    className="form-control"
                     placeholder="Introduce el Email" 
                     type="text"/>
                    <input onChange={(e)=>{setPassword(e.target.value)}}
                    className="form-control mt-4"
                     placeholder="Introduce la Contraseña" 
                     type="password"/>
                        <input onClick={RegistrarUsuario}className="btn btn-dark btn-block mt-4" 
                        value="Registrar Usuario"/>
                </form>

                <button onClick={loginUsuario}className="btn btn-success btn-block">Iniciar sesión</button>
                {
                    msgerror != null ?
                    (
                        <div className="text-center">
                            {msgerror}
                        </div>
                    )
                    :
                    (
                        <span></span>
                    )
                }
            </div>
            <div className="col"></div>
            
        </div>
    )
}

export default Login
