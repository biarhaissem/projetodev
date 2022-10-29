import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BootstrapOptions } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BemVindoComponent } from './bem-vindo/bem-vindo.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { CadastroComponent } from './cadastro/cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BemVindoComponent,
    CardapioComponent,
    SobreNosComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
