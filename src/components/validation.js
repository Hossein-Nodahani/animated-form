export const validateDatas = ( formType , data ) => {
    
    let errors ={};

    data.username.trim() ?  delete errors.username : 
                        errors ={...errors , username: "لطفا نام کاربری را وارد کنید!" } ;

    data.password? (data.password.trim().length >= 8 ? delete errors.password : errors ={...errors ,password : "پسورد باید حداقل 8 کاراکتر باشد !" }) :
                                            errors ={...errors , password : "لطفا پسورد خود را وارد کنید!" }

    if ( formType =="login") {
            data.email ?  ( /\S+@\S+\.\S+/.test(data.email) ?  delete errors.email : errors ={...errors , email : "لطفا ایمیل معتبر وارد کنید!" } ):
                                errors ={...errors , email: "لطفا ایمیل را وارد کنید!" } ;

            data.repeatedPassword ? (data.password === data.repeatedPassword ? delete errors.repeatedPassword : errors ={...errors ,repeatedPassword : "رمز تکرار شده مطابقت ندارد!" }) :
                                errors ={...errors , repeatedPassword : "لطفا رمز خود را تایید کنید!"}

            data.isAccepted ? delete errors.isAccepted : errors ={...errors , isAccepted : "برای ثبت نام قوانین را بپذیرید!" } ;
    }
    return errors ;
}