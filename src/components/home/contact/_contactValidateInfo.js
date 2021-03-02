export default function contactValidateInfo(values) {
    let errors = {};
  
    if (!values.name){
      errors.name = 'Podaj imię';
    } else if (values.name.includes(" ")) {
      errors.email = 'Imie jest niepoprawne';
    }
   
    if (!values.email) {
      errors.email = 'Podaj e-mail';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Hasło wymagane';
    }
    if (!values.password) {
      errors.password = 'Podaj hasło';
    } else if (values.password.length < 6) {
      errors.password = 'Hasło musi mieć co najmniej 6';
    }
  
    if (!values.password2) {
      errors.password2 = 'Hasło jest wymagane';
    } else if (values.password2 !== values.password) {
      errors.password2 = 'Hasło nie pasuje';
    }
    return errors;
  }