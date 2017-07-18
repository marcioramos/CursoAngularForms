import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from "@angular/forms";
import { Http } from "@angular/http";

@Component({
  selector: "app-data-form",
  templateUrl: "./data-form.component.html",
  styleUrls: ["./data-form.component.css"]
})
export class DataFormComponent implements OnInit {
  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: Http) {}

  ngOnInit() {
    // this.formulario = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null),
    //   endereco: new FormGroup({
    //     cep: new FormControl(null)
    //   })
    // });

    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.email]],
      endereco: this.formBuilder.group({
        cep: [null, Validators.required],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required]
      })
    });
  }

  verificaValidTouched(nomeCampo: string) {
    const campo = this.formulario.get(nomeCampo);
    return !campo.valid && campo.touched;
  }

  verificaEmailInvalido() {
    const campo = this.formulario.get("email");

    if (campo.errors) {
      return campo.errors["email"] && campo.touched;
    }
  }

  aplicaCssErro(nomeCampo: string) {
    return {
      "has-error": this.verificaValidTouched(nomeCampo),
      "has-feedback": this.verificaValidTouched(nomeCampo)
    };
  }

  onSubmit() {
    console.log(this.formulario.value);

    if (!this.formulario.valid) {
      alert("Dados Inválidos");
      return;
    }

    this.http
      .post("https://httpbin.org/post", JSON.stringify(this.formulario.value))
      .map(res => res)
      .subscribe(
        dados => {
          console.log(dados);
          this.formulario.reset();
        },
        (error: any) => alert("erro")
      );
  }

  resetar() {
    this.formulario.reset();
  }
}
