import { Link, useNavigate } from "react-router-dom";
import './registration.css'
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import CountryContainer from "./dropdown-country/countryContainer";

let Registration = (props) => {
    const navigate = useNavigate();
    const [eyes, setEyes] = useState(false); 
    const [newUser, setNewUser] = useState({
        email: null,
        password: null,
        name: null,
        surname: null,
        country: null,
        phone: null,
        urlImg: null,
    });

    const handleCountryChange = (country) => {
        setNewUser({ ...newUser, country: country }); 
    };

    let handleCreateUser = () => {
        console.log(newUser); 

        fetch('http://localhost:8080/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Ошибка HTTP, статус " + response.status);
            }
            return response.json();
        })
        .then(data => {
            console.log(data); 
            props.createUser(data);
            localStorage.setItem('user', JSON.stringify({...data.user, accessToken: data.accessToken}))
            navigate("/");
        })
        .catch(error => {
            console.error("Произошла ошибка:", error);
        });
    }

    return (
        <div className="registration">
            <form action='' className="form">
                <h1>Регистрация</h1>
                <input type="text" placeholder="Email" onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} />
                <input type={eyes ? "text" : "password"} placeholder="Password" onChange={(e) => setNewUser({ ...newUser, password: e.target.value })} />
                {
                    eyes ? (
                        <span onClick={()=>(setEyes(false))}><FaEye /></span>
                    )
                    :
                    (
                        <span onClick={()=>(setEyes(true))}><FaEyeSlash /></span>
                    )

                   
                }
                <input type="text" placeholder="Имя" onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} />
                <input type="text" placeholder="Фамилия" onChange={(e) => setNewUser({ ...newUser, surname: e.target.value })} />
                <input type="number" placeholder="Номер Телефона"  onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })} />
                <input type="text" placeholder="Ваша картинка URL:"  onChange={(e) => setNewUser({ ...newUser, urlImg: e.target.value })} />
                <CountryContainer onChange={handleCountryChange}/>
                <button type="button" className="btn" onClick={handleCreateUser}>Создать аккаунт</button>
                <Link to='/login'>У меня есть аккаунт</Link>
            </form>
        </div>
    );
}

export default Registration;