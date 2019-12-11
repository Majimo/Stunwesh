import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import { TabsTemplatePage } from './pages/tabs-template/tabs-template.page';
import { TabsTemplatePageModule } from './pages/tabs-template/tabs-template.module';

const routes: Routes = [
    {path: '', redirectTo: 'app', pathMatch: 'full'},
    {
        path: 'app',
        component: TabsTemplatePage,
        children: [
          {
            path: 'admin',
            children: [
                {
                    path: '',
                    loadChildren: () =>
                        import('./pages/admin/admin.module').then(m => m.AdminPageModule)
                },
                {
                    path: 'equipes',
                    loadChildren: () =>
                        import('./pages/admin/pages/equipes/equipes.module').then(m => m.EquipesPageModule)
                },
                {
                    path: 'tournois',
                    loadChildren: () =>
                        import('./pages/admin/pages/tournois/tournois.module').then(m => m.TournoisPageModule)
                },
            ]
          },
          {
            path: 'tournoi',
            children: [
                {
                    path: '',
                    loadChildren: () =>
                        import('./pages/tournoi/tournoi.module').then(m => m.TournoiPageModule)
                },
                {
                    path: 'tournois',
                    loadChildren: () =>
                        import('./pages/admin/pages/tournois/tournois.module').then(m => m.TournoisPageModule)
                },
            ]
          },
          {
            path: 'infos',
            children: [
                {
                    path: '',
                    loadChildren: () =>
                        import('./pages/infos/infos.module').then(m => m.InfosPageModule)
                },
            ]
          },
          {
              path: '',
              redirectTo: '/app/admin',
              pathMatch: 'full'
          }
        ]
    },
    {path: '**', redirectTo: 'app', pathMatch: 'full'},
  {
    path: 'equipes',
    loadChildren: () => import('./pages/admin/pages/equipes/equipes.module').then( m => m.EquipesPageModule)
  },
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}),
        TabsTemplatePageModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
