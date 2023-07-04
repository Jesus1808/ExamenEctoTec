import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioEnvioComponent } from './components/formulario-envio/formulario-envio.component';

const routes:Routes = [
  {
    path: 'contacto',
    component: FormularioEnvioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
