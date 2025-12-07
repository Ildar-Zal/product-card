import { Form } from "./form.js";
export class AuthForm extends Form {
  constructor(id, regForm) {
    super(id);
    this.regForm = regForm;
  }

  createData(event) {
    super.createData(event);
    const authLogin = this.formValues.authLogin;
    const authPassword = this.formValues.authPassword;
    const regPassword = this.regForm.getData().password;
    const regLogin = this.regForm.getData().login;
    if (regLogin != authLogin || regPassword != authPassword) {
      alert('Введен несоответствующий логин или пароль');
    }
    else {
      const currentUser = { ...this.regForm.getData(), lastLogin: new Date() };
      alert('Пользователь авторизован успешно');
      console.log(currentUser);
    }
  }
}