import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './/app.component';
import { AppRoutingModule } from './/app-routing.module';
import { LayoutModule } from './layouts/layout.module';
// import { UsersComponent  } from './/layouts/users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { ScriptLoaderService } from './_services/script-loader.service';
import { HttpModule } from '@angular/http';
import { CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AddserviceService} from './service/addservice.service';
import { ContentService } from './lmpages/content/content.service';

import { SystemRolesService } from './lmpages/system-roles/system-roles.service';

import { CategoriesService }from './lmpages/categories/categories.service';
import { TermsService } from './lmpages/term/terms.service';
import { CoursesService } from './lmpages/courses/courses.service';
import { DisciplinesService } from './lmpages/disciplines/disciplines.service';
import { InstitutionalRolesService } from './lmpages/institutional-roles/institutional-roles.service';

import { EnrollUsersService } from './lmpages/enroll-Users/enroll-users.service';
import { EnrolledUsersService } from './lmpages/enroll-Users/enrolled-users.service';
import { OrganizationService } from './lmpages/Organizations/organization.service';
import { CatalogService } from './lmpages/catalog/catalog.service';
import { UsersService  } from './lmpages/user/users.service';
@NgModule({
  declarations: [
    AppComponent,
      
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    // UsersComponent,
    HttpClientModule,
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [ScriptLoaderService,
              AddserviceService,
              ContentService,
              CategoriesService,
              TermsService,
              DisciplinesService,
              CoursesService,
              InstitutionalRolesService,
              EnrollUsersService,
              SystemRolesService,
              EnrolledUsersService,
              OrganizationService,
              CatalogService,
              UsersService
              ],
  bootstrap: [AppComponent]
})
export class AppModule { }
