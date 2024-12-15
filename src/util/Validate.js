export default function Validate(values){
    let errors ={};

    if (!values.Username.trim()){
        errors.Username="username required"
    }
    if(!values.Email.trim()){
        errors.Email='Email Required'
    }
    else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.Email)){
        errors.Email="email address invalid"
    }
    if(!values.Password.trim()){
        errors.Password="password is required"
    }
    else if(values.Password.length <6 ){
        errors.Password ="password is required"
    }
    if(!values.cPassword.trim()){
        errors.cPassword="password is requird"
    }else if(values.cPassword !==values.Password){
        errors.cPassword="password do not match"
    }

    return errors;
}