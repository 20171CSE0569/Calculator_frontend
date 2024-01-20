import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperationsComponent } from './operations/operations.component';
import { HistoryTableComponent } from './history-table/history-table.component';

const routes: Routes = [
  {path: 'Calculator', children: [
    {path: '', component: OperationsComponent},
    {path: 'History', component: HistoryTableComponent}
  ]},
  {path: '', redirectTo: 'Calculator', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
