import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AboutComponent } from './about.component';

// Exemplo de um modulo que foi criado usado lazing load
// Entrar no arquivo app.router.ts para ver como foi chamado o modulo
// Caso nao fosse escolhido usar lazing loading, bastava importar o modulo
// dentro do app.module na parte de imports, dessa forma teriamos um segundo modulo
// mas que seria carregado junto de toda a aplicacao 
   const ROUTES: Routes = [
      { path: '', component: AboutComponent }
   ];

@NgModule({
   declarations: [
      AboutComponent
   ],
   imports: [
      RouterModule.forChild(ROUTES)
   ],
   providers: [],
   exports: []
})
// tslint:disable-next-line:eofline
export class AboutModule {}