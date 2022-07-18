import React , {useState , useEffect} from 'react';

import { validateDatas } from './validation';

// styled components 
import { FormBox , Input , Error} from './styledComponenets';

const initialData = {
        username : "" ,
        email : "" ,
        password : "" ,
        repeatedPassword : "" ,
        isAccepted : false  
}

const RegisterForm = () => {
        
        const [data , setData] = useState (initialData) ;
        const [errors , setErrors] = useState ({}) ;
        
        useEffect( () => setErrors(validateDatas("login" , data)) , [data] );

        const changeHandeler = event => {
        event.target.type == "checkbox" ? 
                setData( {...data , [event.target.name] : event.target.checked} ):
                setData( {...data , [event.target.name] : event.target.value} );
         }

    return (
                <FormBox type="register">
                                <div>
                                        <label>نام کاربری</label>
                                        <Input type="text" value={data.username} name="username"  onChange={changeHandeler}/>
                                        {errors.username && <Error>{errors.username}</Error>}
                                </div>
                                <div>
                                        <label>ایمیل</label>
                                        <Input type="email" value={data.email} name="email"  onChange={changeHandeler}/>
                                        {errors.email && <Error>{errors.email}</Error>}
                                </div>
                                <div>
                                        <label>رمز عبور</label>
                                        <Input type="password" value={data.password} name="password"  onChange={changeHandeler}/>
                                        {errors.password && <Error>{errors.password}</Error>}
                                </div>
                                <div>
                                        <label>تکرار رمز عبور</label>
                                        <Input type="password" value={data.repeatedPassword} name="repeatedPassword" onChange={changeHandeler}/>
                                        {errors.repeatedPassword && <Error>{errors.repeatedPassword}</Error>}
                                </div>
                                <div>
                                        <div>
                                                <Input type="checkbox" value={data.isRulesAccepted} name="isAccepted" onChange={changeHandeler}/>
                                                <label> <a href='#'>قوانین</a> را میپذیرم!</label>
                                        </div>
                                        {errors.isAccepted && <Error>{errors.isAccepted}</Error>}
                                </div>
                                <div>
                                            <button type='submit'>ثبت نام</button>
                                </div>
                 </FormBox>
    );
};

export default RegisterForm;