import { Route, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { ApiDocsComponent } from './components/api-docs/api-docs.component';

const appRoutes: Route[] = [
    { path: '', component: HomeComponent },
    { path: 'docs', component: ApiDocsComponent },
];

@NgModule({
    imports: [
        // RouterModule.forRoot(appRoutes, {useHash: true})
        RouterModule.forRoot(appRoutes)
    ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {

}
