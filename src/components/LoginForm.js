import React , {useState , useEffect} from 'react';

import { validateDatas } from './validation';

// styled components 
import { FormBox , Input  } from './styledComponenets';


const initialData = {
        username : "" ,
        email : "" ,
        password : "" ,
        repeatedPassword : "" ,
        isAccepted : false  
}

const LoginForm = () => {
    const [data , setData] = useState (initialData) ;
    const [errors , setErrors] = useState ({}) ;
    
    useEffect( () => setErrors(validateDatas("register" , data)) , [data] );

    const changeHandeler = event => {
    event.target.type == "checkbox" ? 
            setData( {...data , [event.target.name] : event.target.checked} ):
            setData( {...data , [event.target.name] : event.target.value} );
     }

    return (
                <FormBox type="login">
                                <div>
                                        <label>نام کاربری</label>
                                        <Input type="text" value={data.username} name="username"  onChange={changeHandeler}/>
                                        {errors.username && <span>{errors.username}</span>}
                                </div>
                                
                                <div>
                                        <label>رمز عبور</label>
                                        <Input type="password" value={data.password} name="password"  onChange={changeHandeler}/>
                                        {errors.password && <span>{errors.password}</span>}
                                </div>
                               
                                <div>
                                            <button type='submit'>ورود</button>
                                </div>
                </FormBox>
    );
};

export default LoginForm;