import React, {useState} from 'react';
import Admin from '../Pages/Admin';

const AdminComponent = () =>{
    const [user,setUser] = useState({
        email:"",
        password:""
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

        const {email, password} = user;

        const res = await fetch("/signup", {
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },

            body:JSON.stringify({
                email, password
            })
        });

        const data = await res.json();

        if(data.status === 422 || !data)
        {
            window.alert("Invalid");
            console.log("Invalid");
        }
        else{
            window.alert("valid");
            console.log("valid");
        }
    }

    return(
        <Admin user={user} handleInput={handleInput} PostData={PostData}/>
    )
}

export default AdminComponent;