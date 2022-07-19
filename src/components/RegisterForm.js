import React , {useState , useEffect} from 'react';

import { validateDatas } from './validation';
import { notify } from './notify';

// styled components 
import { FormBox ,Label, Input , Error} from './styledComponenets';

const initialData = {
        username : "" ,
        email : "" ,
        password : "" ,
        repeatedPassword : "" ,
        isAccepted : false  
}

const RegisterForm = (props) => {
        
        const [data , setData] = useState (initialData) ;
        const [errors , setErrors] = useState ({}) ;
        const [isFocused , setIsFocused] = useState ({}) ;
        
        useEffect( () => setErrors(validateDatas("login" , data)) , [data] );

        const changeHandeler = event => {
        event.target.type == "checkbox" ? 
                setData( {...data , [event.target.name] : event.target.checked} ):
                setData( {...data , [event.target.name] : event.target.value} );
         }

         const focusHandeler = event =>{
                setIsFocused({...isFocused , [event.target.name] : "true" })
         }

         const submitHandeler = event => {
                event.preventDefault(); 
                if (Object.keys(errors).length){
                        notify("error" , "اطلاعات وارد شده درست نیست!");
                }else {
                        notify("success" , "ثبت نام موفقیت آمیز بود");
                }
        }

    return (
                <FormBox type="register" activeForm={props.activeForm} onSubmit={submitHandeler}>
                                <div>
                                        <Label>نام کاربری</Label>
                                        <Input type="text" value={data.username} name="username"  onChange={changeHandeler} onFocus={focusHandeler}/>
                                        {errors.username && isFocused.username  && <Error>{errors.username}</Error>}
                                </div>
                                <div>
                                        <Label>ایمیل</Label>
                                        <Input type="email" value={data.email} name="email"  onChange={changeHandeler} onFocus={focusHandeler}/>
                                        {errors.email && isFocused.email  && <Error>{errors.email}</Error>}
                                </div>
                                <div>
                                        <Label>رمز عبور</Label>
                                        <Input type="password" value={data.password} name="password"  onChange={changeHandeler} onFocus={focusHandeler}/>
                                        {errors.password && isFocused.password  && <Error>{errors.password}</Error>}
                                </div>
                                <div>
                                        <Label>تکرار رمز عبور</Label>
                                        <Input type="password" value={data.repeatedPassword} name="repeatedPassword" onChange={changeHandeler} onFocus={focusHandeler}/>
                                        {errors.repeatedPassword && isFocused.repeatedPassword  && <Error>{errors.repeatedPassword}</Error>}
                                </div>
                                <div>
                                        <div>
                                                <Input type="checkbox" value={data.isRulesAccepted} name="isAccepted" onChange={changeHandeler} />
                                                <Label accept="true" > <a href='#'>قوانین</a> را میپذیرم!</Label>
                                        </div>
                                        {errors.isAccepted && isFocused.repeatedPassword  && <Error>{errors.isAccepted}</Error>}
                                </div>
                                <div>
                                            <button type='submit'>ثبت نام</button>
                                </div>
                 </FormBox>
    );
};

export default RegisterForm;