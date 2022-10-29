import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { BemVindoComponent } from './bem-vindo/bem-vindo.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { CadastroComponent } from './cadastro/cadastro.component';


const routes: Routes = [

  {

    path: 'home',

    component: HomeComponent

  },

  {

    path: 'bem-vindo',

    component: BemVindoComponent

  },

  {

    path: 'cardapio',

    component: CardapioComponent

  },

  {

    path: 'sobre-nos',

    component: SobreNosComponent

  },

  {

    path: 'cadastro',

    component: CadastroComponent

  },

  {

    path: '**',

    redirectTo: 'home',

    pathMatch: 'full',

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
