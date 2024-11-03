import { useState } from "react";

const StatefulForm = () => {
    const [email, setEmail] = useState(null); 
    const [password, setPassword]= useState(null)
    const [name, setName]=useState(null);
    const [error, setError]= useState('')

    const handleSubmit =e =>{
        e.preventDefault();
        if(password.length <6){
            setError('Password must be 6 charectrs or longer')
        }
        else{
            setError('');
            console.log(name, email, password)
        }

    }
    const handleChangeName =e=>{
        console.log(e.target.value);
        setName(e.target.value)
    }
    const handleEmailChange =e=>{
        console.log(e.target.value);
        setEmail(e.target.value);
    }
    const handlePasswordChange = e =>{
        console.log(e.target.value);
        setPassword(e.target.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChangeName} type="text" name="name" /> <br />
                <input onChange={handleEmailChange} type="email" name="email" /><br />
                <input onChange={handlePasswordChange} type="password" name="password" /><br />
                <input type="submit" value="submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StatefulForm;