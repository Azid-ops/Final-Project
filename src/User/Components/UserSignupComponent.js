import React, {useState} from 'react';
import UserSignup from '../Pages/UserSignup';
import { History, useHistory } from 'react-router-dom';
import Aux from '../../HOC/Auxiliary';
const UserSignupComponent = () =>{
    const history = useHistory();
    const [user,setUser] = useState({
        name:"",
        email:"",
        password:"",
        retype:""
    });

    let name,value;

    const handleInput = (event) =>{
        console.log(event);
        name=event.target.name;
        value=event.target.value;

        setUser({
            ...user, [name]:value
        });
    }

    const PostData  = async (event) =>{
        event.preventDefault();

        console.log("hello");

        const {name, email, password, retype} = user;

        const res = await fetch("/Usersignup", {
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },

            body:JSON.stringify({
                name,email, password,retype
            })
        });

        console.log(res);
        
        if(res.status === 200)
        {
            console.log("Ok");
        }
    }

    return(
        <Aux>
            <UserSignup user={user} handleInput={handleInput} PostData={PostData}/>
        </Aux>
        
    )
}

export default UserSignupComponent;