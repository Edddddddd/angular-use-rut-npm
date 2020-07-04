import { Component } from '@angular/core';
import { RutService } from 'rut-chileno'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'use-rut';

  constructor(
    public rutService: RutService
  ) {

  }

  getRut(rut: string): void {
    console.log(rut);

    // Recibe 2 variables el rut como string.
    // "mode" el cual corresponde a la misma definicion anterior
    // - mode = 0 -> 184215551
    // - mode = 1 -> 18421555
    // - mode = 2 -> 18.421.555-1
    // - mode = 3 -> 18421555-1
    // - mode = 4 -> devuelve solo el digito verificado
    // Retorna lo siguiente : string | number | boolean
    // PERO actualmente solo retorna: string | boolean
    // le puse que retornara un number pero nunca lo hace, 
    // y olvide cambiarlo y me da paja la verdad hahahah
    //
    // En fin: retornara string solo cuando el rut sea valido
    // y sera el rut en el formato indicado segun el mode
    // retornara un boolean cuando el rut no sea valido.

    let out1_rut = this.rutService.getRutChile(0, rut);
    console.log(out1_rut);
    
    // Solo recibe el rut como string 
    // y lo retorna sin los caracteres espciales
    let out2_rut = this.rutService.rutClean(rut);
    console.log(out2_rut);

    // Esta funcion recibe el rut en el formato que sea
    // lo retorna listo con todos los puntos y guiones
    let out3_rut = this.rutService.rutFormat(rut);
    console.log(out3_rut);

    // Esta funcion recibe el rut en el formato que sea
    // y retorna un boolean OJO.
    // true cuando el rut NO es valido
    // false cuando es el rut SI es valdo
    let out4_rut = this.rutService.validaRUT(rut);
    console.log(out4_rut);

    // Tambien hay una variable ahi. no la uso pero esta ahi.
    // vo dale
    let out5_rut = this.rutService.rut_chileno;
    console.log(out5_rut);

  }
}
