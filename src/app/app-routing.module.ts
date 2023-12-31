import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'riwayat',
    loadChildren: () => import('./riwayat/riwayat.module').then(m => m.RiwayatPageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./detail/detail.module').then(m => m.DetailPageModule)
  },
  {
    path: 'modal-input',
    loadChildren: () => import('./modal-input/modal-input.module').then( m => m.ModalInputPageModule)
  },  {
    path: 'nfc-reader',
    loadChildren: () => import('./nfc-reader/nfc-reader.module').then( m => m.NfcReaderPageModule)
  },
  {
    path: 'nfc-reader',
    loadChildren: () => import('./nfc-reader/nfc-reader.module').then( m => m.NfcReaderPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
