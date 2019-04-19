import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import { LayoutComponent } from './/layout.component';
import { AppHeader } from './/app-header/app-header.component';
import { AppSidebar } from './/app-sidebar/app-sidebar.component';
import { AppFooter } from './/app-footer/app-footer.component';
import { AppBanner } from './/app-banner/app-banner.component';
import { AppUsersComponent } from './app-users/app-users.component';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
// import { AppUserHeaderComponent } from './app-user-header/app-user-header.component';
import { UserHeaderComponent } from './user-header/user-header.component';

@NgModule({
	declarations: [
	  LayoutComponent,
	  AppHeader,
	  AppSidebar,
	  AppFooter,
	  AppBanner,
	  AppUsersComponent,
	//   AppUserHeaderComponent,
	  UserHeaderComponent,
	],
	exports: [
	  LayoutComponent,
	  AppHeader,
	  AppSidebar,
	  AppFooter,
	  AppBanner,
	],
	imports: [
		RouterModule,
		CommonModule,
		BrowserModule
	]
})
export class LayoutModule {
}