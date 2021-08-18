import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-fale-conosco',
  templateUrl: './fale-conosco.component.html',
  styleUrls: ['./fale-conosco.component.scss'],
})
export class FaleConoscoComponent implements OnInit {
  public contatoForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.contatoForm = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3)]],
      telefone: [null, [Validators.required, Validators.minLength(10)]],
      email: [null, [Validators.required, Validators.email]],
    });
  }

  submitContato() {
    if (this.contatoForm.valid) {
      this.abreWhats(this.contatoForm.value);
    }
  }

  public validaCampo(campo: any) {
    return (
      this.contatoForm.get(campo)?.invalid &&
      this.contatoForm.get(campo)?.touched
    );
  }

  private abreWhats(value: any) {
    window.open(
      'https://api.whatsapp.com/send?phone=+55XXXXXXXXXX&text=Oi, gostaria de alguma informações.%0a%0a' +
        'Nome: ' +
        value.nome +
        '%0aTelefone: ' +
        value.telefone +
        '%0aEmail: ' +
        value.email,
      '_blank'
    );
  }
}
