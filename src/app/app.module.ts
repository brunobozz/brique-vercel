import { NgModule } from '@angular/core';

// IMPORTS
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule, ArrayOfComponents } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { ToastrModule } from 'ngx-toastr';
import { CalendarModule } from 'primeng/calendar';

// LAYOUT
import { LayoutHeaderComponent } from './layout/layout-header/layout-header.component';
import { LayoutHeaderBackComponent } from './layout/layout-header-back/layout-header-back.component';
import { LayoutMenuComponent } from './layout/layout-menu/layout-menu.component';
import { LayoutContentComponent } from './layout/layout-content/layout-content.component';

// COMPONENTS
import { QuickLinkComponent } from './components/quick-link/quick-link.component';
import { PaymentsTableComponent } from './components/payments-table/payments-table.component';
import { ContextMenuComponent } from './components/context-menu/context-menu.component';
import { BalanceComponent } from './components/balance/balance.component';
import { WoodDeliveryTableComponent } from './components/wood-delivery-table/wood-delivery-table.component';
import { CortileDisponibilityComponent } from './components/cortile-disponibility/cortile-disponibility.component';
import { SelectComponent } from './components/select/select.component';
import { PrevisaoTempoComponent } from './routes/previsao-tempo/previsao-tempo.component';
import { ProgramacaoPatioComponent } from './routes/programacao-patio/programacao-patio.component';
import { CalendarioPatioComponent } from './components/calendario-patio/calendario-patio.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { CadastroUsuarioComponent } from './routes/cadastro-usuario/cadastro-usuario.component';

const maskConfig: Partial<IConfig> = {
  validation: true,
};

@NgModule({
  declarations: [
    AppComponent,

    // LAYOUT
    LayoutHeaderComponent,
    LayoutHeaderBackComponent,
    LayoutMenuComponent,
    LayoutContentComponent,

    // ROUTES COMPONENTS
    ArrayOfComponents,

    // COMPONENTS
    ContextMenuComponent,
    BalanceComponent,
    QuickLinkComponent,
    PaymentsTableComponent,
    WoodDeliveryTableComponent,
    CortileDisponibilityComponent,
    SelectComponent,
    PrevisaoTempoComponent,
    ProgramacaoPatioComponent,
    CalendarioPatioComponent,
    LoadingSpinnerComponent,
    CadastroUsuarioComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    HttpClientModule,
    NgxMaskModule.forRoot(maskConfig),
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      maxOpened: 2,
      autoDismiss: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
