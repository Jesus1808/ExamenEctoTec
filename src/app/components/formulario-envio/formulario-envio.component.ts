import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormularioEnvioControls } from '../constants/formularioEnvio.validator';
import { Observable, map, startWith } from 'rxjs';
import { ApiService } from 'src/app/sevices/api.service';
import { IfStmt } from '@angular/compiler';
import { MatDialog } from '@angular/material/dialog';
import { ModalDialogComponent } from '../modal-dialog/modal-dialog.component';



@Component({
  selector: 'app-formulario-envio',
  templateUrl: './formulario-envio.component.html',
  styleUrls: ['./formulario-envio.component.scss']
})
export class FormularioEnvioComponent implements OnInit{
//#region Propiedades
public FormularioEnvioForm: FormGroup = this._FormularioEnvioFormBuilder.group(FormularioEnvioControls);
minDate: Date;

//#endregion

 constructor (private _FormularioEnvioFormBuilder:FormBuilder,private _api:ApiService, public dialog: MatDialog){
  this.ObtenerCiudadesEstados();
  const currentYear = new Date().getFullYear();
  this.minDate = new Date(currentYear - 100, 0, 1);


 }


mostrarContenido : boolean = true;
mostrarMensaje :boolean = false;
Nombre : string = '';
Correo : string = '';

 options: string[] = [];
filteredOptions: Observable<string[]> | undefined= new  Observable<string[]>();
  ngOnInit() {
    this.FormularioEnvioForm.valueChanges.subscribe(x => {console.log(x)});
    this.filteredOptions = this.FormularioEnvioForm.get("ciudad_Estado")?.valueChanges.pipe(
      startWith(''),
      map((value: any) => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
  const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }


  //#region Método enviar
  public EnviarF():void{

  if(this.FormularioEnvioForm.valid){
    
    if(this.FormularioEnvioForm.get("fecha")?.value){
      this._api.EnviarFormulario(this.FormularioEnvioForm.value).subscribe(m => {
        if(m.exito){
          this.mostrarContenido = false;
          this.mostrarMensaje = true;
          this.Nombre = this.FormularioEnvioForm.get("nombre")?.value;
          this.Correo = this.FormularioEnvioForm.get("email")?.value;
          
        }
      });
    }
  }
  else{
  this.FormularioEnvioForm.markAllAsTouched();
  this.openDialog();
  }
  }
  //#endregion
  
  //#region traer ciudades
  public ObtenerCiudadesEstados():void{

   
      this._api.ObtenerCiudades().subscribe(response=>{
        this.options = response.map(c => c.ciudadEstado1);
      });
      
    
     
   
    }
    //#endregion


    openDialog() {
      this.dialog.open(ModalDialogComponent, {
      
          data :this.FormularioEnvioForm.value,
        
      });
    }

}
