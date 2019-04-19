import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import { AdminComponent } from './/admin.component';
import { AppHeader } from './/app-header/app-header.component';
import { AppSidebar } from './/app-sidebar/app-sidebar.component';
import { AppFooter } from './/app-footer/app-footer.component';
import { AppBanner } from './/app-banner/app-banner.component';
// import { AdminComponent } from './admin/admin.component';
// import { UsersComponent } from './users/users.component';

@NgModule({
	declarations: [
        AdminComponent,
        	  AppHeader,
	  AppSidebar,
	  AppFooter,
	  AppBanner,
	//   AdminComponent,
	//   UsersComponent,
	],
	exports: [
        AdminComponent,
        	  AppHeader,
	  AppSidebar,
	  AppFooter,
	  AppBanner,
	],
	imports: [
		RouterModule,
    ]
    
})
export class AdminModule {
}