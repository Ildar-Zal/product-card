import { Form } from "./Form.js"
export class SubscribeForm extends Form {
  constructor(id) {
    super(id);
  }

  createData(event) {
    super.createData(event);
    console.log("Данные регистрации отправлены!");
    console.log(this.formValues);
  }
}
