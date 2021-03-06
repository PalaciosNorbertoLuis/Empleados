import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmpleadoComponent } from './components/create-empleado/create-empleado.component';
import { ListEmpleadosComponent } from './components/list-empleados/list-empleados.component';

const routes: Routes = [
  {path: '', redirectTo:'lista-empleados',pathMatch:'full'},
  {path:'lista-empleados',component: ListEmpleadosComponent},
  {path:'crear-empleados',component: CreateEmpleadoComponent},
  {path:'editar-empleados/:id',component: CreateEmpleadoComponent},
  {path: '**', redirectTo:'lista-empleados',pathMatch:'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
