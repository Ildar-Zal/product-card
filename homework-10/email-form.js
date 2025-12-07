import { Form } from "./form.js"
export class EmailForm extends Form {
  constructor(id) {
    super(id);
  }

  createData(event) {
    super.createData(event);
    console.log("Данные регистрации отправлены!");
    console.log(this.formValues);
  }
}