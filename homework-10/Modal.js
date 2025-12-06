import { Form } from "./Form.js";
export class Modal extends Form {
  constructor(id, regForm) {
    super(id);
    this.form = regForm;
  }

  createData(event) {
    super.createData(event);
    const authLogin = this.formValues.authLogin;
    const authPassword = this.formValues.authPassword;
    const regPassword = this.form.getData().password;
    const regLogin = this.form.getData().login;
    if (regLogin != authLogin || regPassword != authPassword) {
      alert('Введен несоответствующий логин или пароль');
    }
    else {
      const currentUser = { ...this.form.getData(), lastLogin: new Date() };
      this.close();
      alert('Пользователь авторизован успешно');
      console.log(currentUser);
    }
  }

  show() {
    this.element.showModal();
  }

  close() {
    this.element.close();
  }

  isOpen() {
    return this.element.open;
  }

}

