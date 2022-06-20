import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'planning',
    loadChildren: () => loadRemoteModule({
      remoteEntry: 'http://localhost:5001/remoteEntry.js',
      remoteName: 'ngPlanning',
      exposedModule: './PlanningModule',
    }).then(m => m.PlanningModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
