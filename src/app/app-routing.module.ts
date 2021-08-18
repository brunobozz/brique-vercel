import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Layouts } from './app.component';
import { AuthGuard } from './services/auth/auth.guard';

// ROUTES
import { MeusNegociosComponent } from './routes/meus-negocios/meus-negocios.component';
import { CanalKlabinComponent } from './routes/canal-klabin/canal-klabin.component';
import { FaleConoscoComponent } from './routes/fale-conosco/fale-conosco.component';
import { NovosNegociosComponent } from './routes/novos-negocios/novos-negocios.component';
import { RouteNotFoundComponent } from './routes/not-found/not-found.component';
import { RouteLoginComponent } from './routes/login/login.component';
import { RouteProfileComponent } from './routes/profile/profile.component';
import { RouteFornecimentoComponent } from './routes/fornecimento/fornecimento.component';
import { RouteFomentoComponent } from './routes/fomento/fomento.component';
import { RouteLastPaymentsComponent } from './routes/last-payments/last-payments.component';
import { RouteWoodDeliveryComponent } from './routes/wood-delivery/wood-delivery.component';
import { RouteContractComponent } from './routes/contract/contract.component';
import { PrevisaoTempoComponent } from './routes/previsao-tempo/previsao-tempo.component';
import { ProgramacaoPatioComponent } from './routes/programacao-patio/programacao-patio.component';
import { CadastroUsuarioComponent } from './routes/cadastro-usuario/cadastro-usuario.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'canal-klabin',
    pathMatch: 'full',
  },
  {
    path: 'canal-klabin',
    component: CanalKlabinComponent,
    data: { layout: Layouts.Main, animation: 'is1' },
  },
  {
    path: 'meus-negocios',
    component: MeusNegociosComponent,
    data: { layout: Layouts.Main, animation: 'is2' },
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'fornecedor-de-madeira',
      },
      {
        path: 'fomentado',
        component: RouteFomentoComponent,
      },
      {
        path: 'fornecedor-de-madeira',
        component: RouteFornecimentoComponent,
      },
    ],
  },
  {
    path: 'novos-negocios',
    component: NovosNegociosComponent,
    data: { layout: Layouts.Main, animation: 'is3' },
  },
  {
    path: 'fale-conosco',
    component: FaleConoscoComponent,
    data: { layout: Layouts.Main, animation: 'is4' },
  },

  // ==================== FOMENTO ROUTES ===================== /
  {
    path: 'meus-negocios/fomentado/ultimos-pagamentos',
    component: RouteLastPaymentsComponent,
    data: { layout: Layouts.BackButton, animation: 'isRight' },
    canActivate: [AuthGuard],
  },
  {
    path: 'meus-negocios/fomentado/entrega-de-madeira',
    component: RouteWoodDeliveryComponent,
    data: { layout: Layouts.BackButton, animation: 'isRight' },
    canActivate: [AuthGuard],
  },
  {
    path: 'meus-negocios/fomentado/contrato',
    component: RouteContractComponent,
    data: { layout: Layouts.BackButton, animation: 'isRight' },
    canActivate: [AuthGuard],
  },
  {
    path: 'meus-negocios/fomentado/previsao-tempo',
    component: PrevisaoTempoComponent,
    data: { layout: Layouts.BackButton, animation: 'isRight' },
    canActivate: [AuthGuard],
  },

  // ==================== FORNECIMENTO ROUTES ===================== /
  {
    path: 'meus-negocios/fornecedor-de-madeira/ultimos-pagamentos',
    component: RouteLastPaymentsComponent,
    data: { layout: Layouts.BackButton, animation: 'isRight' },
    canActivate: [AuthGuard],
  },
  {
    path: 'meus-negocios/fornecedor-de-madeira/entrega-de-madeira',
    component: RouteWoodDeliveryComponent,
    data: { layout: Layouts.BackButton, animation: 'isRight' },
    canActivate: [AuthGuard],
  },
  {
    path: 'meus-negocios/fornecedor-de-madeira/contrato',
    component: RouteContractComponent,
    data: { layout: Layouts.BackButton, animation: 'isRight' },
    canActivate: [AuthGuard],
  },
  {
    path: 'meus-negocios/fornecedor-de-madeira/previsao-tempo',
    component: PrevisaoTempoComponent,
    data: { layout: Layouts.BackButton, animation: 'isRight' },
    canActivate: [AuthGuard],
  },
  {
    path: 'meus-negocios/fornecedor-de-madeira/programacao-patio',
    component: ProgramacaoPatioComponent,
    data: { layout: Layouts.BackButton, animation: 'isRight' },
    canActivate: [AuthGuard],
  },

  // ==================== ANOTHER ROUTES ===================== /
  {
    path: 'login',
    component: RouteLoginComponent,
    data: { layout: Layouts.Main, animation: 'login' },
    pathMatch: 'full',
  },
  {
    path: 'profile',
    component: RouteProfileComponent,
    data: { layout: Layouts.Main, animation: 'isRight' },
    canActivate: [AuthGuard],
  },
  {
    path: 'cadastro-usuario',
    component: CadastroUsuarioComponent,
    data: { layout: Layouts.BackButton, animation: 'isRight' },
    pathMatch: 'full',
  },
  {
    path: '404',
    component: RouteNotFoundComponent,
    data: { layout: Layouts.BackButton },
  },
  {
    path: '**',
    redirectTo: '/404',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const ArrayOfComponents = [
  RouteProfileComponent,
  MeusNegociosComponent,
  NovosNegociosComponent,
  CanalKlabinComponent,
  FaleConoscoComponent,
  RouteLoginComponent,
  RouteNotFoundComponent,
  RouteFomentoComponent,
  RouteWoodDeliveryComponent,
  RouteFornecimentoComponent,
  RouteLastPaymentsComponent,
  ProgramacaoPatioComponent,
  PrevisaoTempoComponent,
  CadastroUsuarioComponent,
];
