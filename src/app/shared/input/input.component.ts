import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { NgModel, FormControlName } from '@angular/forms';

@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, AfterContentInit {
// esse component recebe um model vindo de quem esta usando
// passando por parametro o input que ele representa
// o nome do label e a mensagem de erro que deseja mostrar
// foi usado no order.component.htmlhtml

  @ContentChild(NgModel) model: NgModel; // referencia para o model
  @ContentChild(FormControlName) control: FormControlName;
  input: any;

  @Input() label: string; // referencia para o label
  @Input() errorMessage: string; // referencia para a mensagem

  constructor() { }

  // observe que na classe, os dois metodos usados sao iniciados em uma funcao
  ngOnInit() {
  }

  ngAfterContentInit() {
    this.input = this.model || this.control; // depois que o content tiver sido iniciado e carregado,
                             // atribui o valor ao nosso input

    if (this.input === undefined) {
      throw new Error('Esse component precisa ser usado com uma diretiva ngModel ou FormControlName');
    }
  }

  // metodos para fazer a validação de css
  hasSuccess(): boolean {
    return this.input.valid && (this.input.dirty || this.input.touched)
  }

  hasError(): boolean {
    return this.input.invalid && (this.input.dirty || this.input.touched)
  }
}
