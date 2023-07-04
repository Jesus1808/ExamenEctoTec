import { Validators } from "@angular/forms";

export const FormularioEnvioControls ={
    nombre:['',{validators:[Validators.required], updateOn:('change')}],
    email:['',{validators:[Validators.required, Validators.email], updateOn:('change')}],
    telefono:['',{validators:[Validators.required], updateOn:('change')}],
    fecha:['',{validators:[Validators.required], updateOn:('change')}],
    ciudad_Estado:['',{validators:[Validators.required], updateOn:('blur')}],





}