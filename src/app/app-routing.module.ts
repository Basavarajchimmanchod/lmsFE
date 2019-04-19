import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layouts/layout.component';
import { UsersComponent } from './/layouts/Users/users.component';



import { HomeComponent } from './pages/home/home.component';

import { ColorsComponent } from './pages/ui/colors/colors.component';
import { TypographyComponent } from './pages/ui/typography/typography.component';
import { PanelsComponent } from './pages/ui/panels/panels.component';
import { TabsComponent } from './pages/ui/tabs/tabs.component';
import { AlertsComponent } from './pages/ui/alerts/alerts.component';
import { CardsComponent } from './pages/ui/cards/cards.component';
import { BadgesProgressComponent } from './pages/ui/badges-progress/badges-progress.component';
import { ListComponent } from './pages/ui/list/list.component';
import { IconsComponent } from './pages/ui/icons/icons.component';
import { ButtonsComponent } from './pages/ui/buttons/buttons.component';

import { FormBasicComponent } from './pages/forms/form-basic/form-basic.component';
import { InputMasksComponent } from './pages/forms/input-masks/input-masks.component';
import { FormValidationComponent } from './pages/forms/form-validation/form-validation.component';
import { TextEditorsComponent } from './pages/forms/text-editors/text-editors.component';
import { FormAdvancedComponent } from './pages/forms/form-advanced/form-advanced.component';

import { TablesComponent } from './pages/tables/tables.component';
import { DatatablesComponent } from './pages/datatables/datatables.component';

import { ChartjsComponent } from './pages/charts/chartjs/chartjs.component';
import { MorrisChartComponent } from './pages/charts/morris-chart/morris-chart.component';
import { SparklineChartComponent } from './pages/charts/sparkline-chart/sparkline-chart.component';

import { MapsVectorComponent } from './pages/maps-vector/maps-vector.component';

import { MailboxComponent } from './pages/mailbox/mailbox/mailbox.component';
import { MailComposeComponent } from './pages/mailbox/mail-compose/mail-compose.component';
import { MailViewComponent } from './pages/mailbox/mail-view/mail-view.component';

import { CalendarComponent } from './pages/calendar/calendar.component';

import { ProfileComponent } from './pages/profile/profile.component';
import { InvoiceComponent } from './pages/invoice/invoice.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { LockscreenComponent } from './pages/lockscreen/lockscreen.component';
import { Error404Component } from './pages/error-404/error-404.component';
import { Error500Component } from './pages/error-500/error-500.component';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



/*   LMS Component Begins  */
import { AdminhomeComponent } from './lmpages/adminhome/adminhome.component';

import { AddCoursesComponent } from './lmpages/courses/add-courses/add-courses.component';
import { SearchCoursesComponent } from './lmpages/courses/search-courses/search-courses.component';
import { AddResourcesComponent } from './lmpages/content/add-content/add-content.component';
import { SearchResourcesComponent } from './lmpages/content/search-content/search-content.component';
import { SearchCategoriesComponent } from './lmpages/categories/search-categories/search-categories.component';
import { AddCategoriesComponent } from './lmpages/categories/add-categories/add-categories.component';
//import { ResourcePickersComponent } from './lmpages/resource-pickers/resource-pickers.component';
import { ViewCoursesComponent } from './lmpages/courses/view-courses/view-courses.component';
import { ViewContentComponent } from './lmpages/content/view-content/view-content.component';
import { ViewCatalogComponent } from './lmpages/catalog/view-catalog/view-catalog.component';
import { ViewCategoriesComponent } from './lmpages/categories/view-categories/view-categories.component';
import { EditCategoriesComponent } from './lmpages/categories/edit-categories/edit-categories.component';
import { EditContentComponent } from './lmpages/content/edit-content/edit-content.component';
import { EditCourseComponent } from './lmpages/courses/edit-course/edit-course.component';

// import { EditDataComponent } from './lmpages/content/edit-content/edit-data/edit-data.component';
import { AddTermComponent } from './lmpages/term/add-term/add-term.component';
import { ViewTermComponent } from './lmpages/term/view-term/view-term.component';
import { SearchTermComponent } from './lmpages/term/search-term/search-term.component';
import { AddDisciplinesComponent } from './lmpages/disciplines/add-disciplines/add-disciplines.component';
import { ViewDisciplinesComponent } from './lmpages/disciplines/view-disciplines/view-disciplines.component';
import { SearchDisciplinesComponent } from './lmpages/disciplines/search-disciplines/search-disciplines.component';
import { DeleteCategoriesComponent } from './lmpages/categories/delete-categories/delete-categories.component';
import { DeleteContentComponent } from './lmpages/content/delete-content/delete-content.component';
import { EditTermComponent } from './lmpages/term/edit-term/edit-term.component';
import { DeleteTermComponent } from './lmpages/term/delete-term/delete-term.component';
import { EditDisciplinesComponent } from './lmpages/disciplines/edit-disciplines/edit-disciplines.component';
import { DeleteDisciplinesComponent } from './lmpages/disciplines/delete-disciplines/delete-disciplines.component';
import { AddUserComponent } from './lmpages/user/add-user/add-user.component';
import { EditUserComponent } from './lmpages/user/edit-user/edit-user.component';
import { ViewUserComponent } from './lmpages/user/view-user/view-user.component';
import { DeleteUserComponent } from './lmpages/user/delete-user/delete-user.component';
import { SearchUserComponent } from './lmpages/user/search-user/search-user.component';
import { DeleteCoursesComponent } from './lmpages/courses/delete-courses/delete-courses.component';
import { CourseCatalogComponent } from './lmpages/catalog/course-catalog/course-catalog.component';

import { AddSystemRolesComponent } from './lmpages/system-roles/add-system-roles/add-system-roles.component';
import { EditSystemRolesComponent } from './lmpages/system-roles/edit-system-roles/edit-system-roles.component';
import { ViewSystemRolesComponent } from './lmpages/system-roles/view-system-roles/view-system-roles.component';
import { DeleteSystemRolesComponent } from './lmpages/system-roles/delete-system-roles/delete-system-roles.component';
import { SearchSystemRolesComponent } from './lmpages/system-roles/search-system-roles/search-system-roles.component';

import { AddInstitutionalRolesComponent } from './lmpages/institutional-roles/add-institutional-roles/add-institutional-roles.component';
import { ViewInstitutionalRolesComponent } from './lmpages/institutional-roles/view-institutional-roles/view-institutional-roles.component';
import { EditInstitutionalRolesComponent } from './lmpages/institutional-roles/edit-institutional-roles/edit-institutional-roles.component';
import { DeleteInstitutionalRolesComponent } from './lmpages/institutional-roles/delete-institutional-roles/delete-institutional-roles.component';
import { SearchInstitutionalRolesComponent } from './lmpages/institutional-roles/search-institutional-roles/search-institutional-roles.component';

import { AddOrganizationsComponent } from './lmpages/Organizations/add-organizations/add-organizations.component';
import { EditOrganizationsComponent } from './lmpages/Organizations/edit-organizations/edit-organizations.component';
import { ViewOrganizationsComponent } from './lmpages/Organizations/view-organizations/view-organizations.component';
import { SearchOrganizationsComponent } from './lmpages/Organizations/search-organizations/search-organizations.component';
import { DeleteOrganizationsComponent } from './lmpages/Organizations/delete-organizations/delete-organizations.component';

import { AddEnrollUsersComponent } from './lmpages/enroll-Users/add-enroll-users/add-enroll-users.component';
import { CourseDetailsComponent } from './lmpages/enroll-Users/course-details/course-details.component';
import { CourseInformationComponent} from './lmpages/enroll-Users/course-information/course-information.component';
import { EnrollUsersComponent} from './lmpages/enroll-Users/enroll-users/enroll-users.component';

import { ViewUserCoursesComponent } from './lmpages/student-portal/courses/view-user-courses/view-user-courses.component'
import { UserEnrolledListComponent } from './lmpages/student-portal/courses/user-enrolled-list/user-enrolled-list.component';
import { UsersCoursesDetailsComponent } from './lmpages/student-portal/courses/users-courses-details/users-courses-details.component';

import { SearchUsersCoursesComponent } from './lmpages//student-portal/courses/search-users-courses/search-users-courses.component';

import { ViewUserCatalogComponent } from './lmpages//student-portal/catalog/view-user-catalog/view-user-catalog.component';
import { ViewUserDisciplineComponent } from './lmpages//student-portal/discipline/view-user-discipline/view-user-discipline.component';
import { SearchUserDisciplineComponent } from './lmpages//student-portal/discipline/search-user-discipline/search-user-discipline.component';
import { SearchUserTermComponent } from './lmpages//student-portal/term/search-user-term/search-user-term.component';
import { ViewUserTermComponent } from './lmpages//student-portal/term/view-user-term/view-user-term.component';
import { SearchUserCatalogComponent } from './lmpages//student-portal/catalog/search-user-catalog/search-user-catalog.component';
import { ViewDetailCategoriesComponent } from './lmpages/categories/view-detail-categories/view-detail-categories.component';
import { ViewDetailCatalogComponent } from './lmpages/catalog/view-detail-catalog/view-detail-catalog.component';
import { ViewDetailDisciplinesComponent } from './lmpages/disciplines/view-detail-disciplines/view-detail-disciplines.component';
import { ViewTermDetailsComponent } from './lmpages/term/view-term-details/view-term-details.component';
import { ViewContentDetailComponent } from './lmpages/content/view-content-detail/view-content-detail.component';
import { ViewInstitutionalRolesDetailComponent } from './lmpages/institutional-roles/view-institutional-roles-detail/view-institutional-roles-detail.component';
import { ViewSystemRolesDetailComponent } from './lmpages/system-roles/view-system-roles-detail/view-system-roles-detail.component';
import { ViewCatalogDetailComponent } from './lmpages/student-portal/catalog/view-catalog-detail/view-catalog-detail.component';
import { ViewTermDetailComponent } from './lmpages/student-portal/term/view-term-detail/view-term-detail.component';
import { ViewDisciplineDetailComponent } from './lmpages/student-portal/discipline/view-discipline-detail/view-discipline-detail.component';
import { ViewUserDetailComponent } from './lmpages/user/view-user-detail/view-user-detail.component';
import { ViewDetailsOrganizationsComponent } from './lmpages/Organizations/view-details-organizations/view-details-organizations.component';


import { AddAnnouncementComponent } from './lmpages/announcement/add-announcement/add-announcement.component';
import { EditAnnouncementComponent } from './lmpages/announcement/edit-announcement/edit-announcement.component';
import { ViewAnnouncementComponent } from './lmpages/announcement/view-announcement/view-announcement.component';
import { DeleteAnnouncementComponent } from './lmpages/announcement/delete-announcement/delete-announcement.component';
import { ViewAnnouncementDetailsComponent } from './lmpages/announcement/view-announcement-details/view-announcement-details.component';
import { ViewUserAnnouncementDetailComponent } from './lmpages/student-portal/announcement/view-user-announcement-detail/view-user-announcement-detail.component';
import { ViewUserAnnouncementComponent } from './lmpages/student-portal/announcement/view-user-announcement/view-user-announcement.component';


import { AdminProfileComponent } from './lmpages/profile/admin-profile/admin-profile.component';
import { AdminProfilePasswordComponent } from './lmpages/profile/admin-profile-password/admin-profile-password.component';
import { StudentProfileComponent } from './lmpages/student-portal/profile/student-profile/student-profile.component';
import { StudentProfilePasswordComponent } from './lmpages/student-portal/profile/student-profile-password/student-profile-password.component';
import { StudentSupportComponent } from './lmpages/student-portal/profile/student-support/student-support.component'
import { StudentFeedbackComponent } from './lmpages/student-portal/profile/student-feedback/student-feedback.component';




import { ViewSurveysComponent } from './lmpages/surveys/view-surveys/view-surveys.component';
import { AddSurveysComponent } from './lmpages/surveys/add-surveys/add-surveys.component';
import { EditSurveysComponent } from './lmpages/surveys/edit-surveys/edit-surveys.component';
import { DeleteSurveysComponent } from './lmpages/surveys/delete-surveys/delete-surveys.component';
import { ViewSurveysDetailsComponent } from './lmpages/surveys/view-surveys-details/view-surveys-details.component';
import { AddSurveyQuestionsComponent } from './lmpages/surveys/add-survey-questions/add-survey-questions.component';
import { YesNoQuestionsComponent } from './lmpages/surveys/yes-no-questions/yes-no-questions.component';
import { EditYesNoQuestionsComponent } from './lmpages/surveys/edit-yes-no-questions/edit-yes-no-questions.component';
import { OpenQuestionsComponent } from './lmpages/surveys/open-questions/open-questions.component';
import { EditOpenQuestionsComponent } from './lmpages/surveys/edit-open-questions/edit-open-questions.component';


import { ViewAssignmentComponent } from './lmpages/assignments/view-assignment/view-assignment.component';
import { AddAssignmentsComponent } from './lmpages/assignments/add-assignments/add-assignments.component';
import { EditAssignmentComponent } from './lmpages/assignments/edit-assignment/edit-assignment.component';
import { ViewAssignmentDetailsComponent } from './lmpages/assignments/view-assignment-details/view-assignment-details.component';
import { DeleteAssignmentComponent } from './lmpages/assignments/delete-assignment/delete-assignment.component';

import { ViewUserSurveysComponent } from './lmpages/student-portal/surveys/view-user-surveys/view-user-surveys.component';
import { ViewUserSurveysDetailsComponent } from './lmpages/student-portal/surveys/view-user-surveys-details/view-user-surveys-details.component';
import { ViewUserAssignmentsComponent } from './lmpages/student-portal/assignments/view-user-assignments/view-user-assignments.component';
import { ViewUserAssignmentsDetailsComponent } from './lmpages/student-portal/assignments/view-user-assignments-details/view-user-assignments-details.component';

/*   LMS Component ENDS  */

const routesStudent:Routes=[
    
]

const routes: Routes = [
    {path: '', redirectTo: 'adminindex', pathMatch: 'full'},
    {path: 'student', redirectTo: 'Studentindex', pathMatch: 'full'},
    {
        "path":"",
        "component":UsersComponent,
        "children":[
            {
                path: "Studentindex",
                component: AdminhomeComponent
            }
        ]
    },
    {
        "path": "",
        "component": LayoutComponent,
        "children": [
        /*   LMS Component Begins  */

            {
                path: "adminindex",
                component: AdminhomeComponent
            },
            {
                path:"add-Courses",
                component: AddCoursesComponent
            },
            {
                path:"search-Courses",
                component: SearchCoursesComponent
            },
            {
                path:"add-Resources",
                component: AddResourcesComponent
            },
            {
                path:"search-Resources",
                component: SearchResourcesComponent
            },
            {
                path:"search-Categories",
                component: SearchCategoriesComponent
            },
            {
                path:"add-Categories",
                component: AddCategoriesComponent
            },
            {
                path:"course-Catalog",
                component: CourseCatalogComponent
            },     
          
            {
                path:"user-search-Course",
                component:SearchUsersCoursesComponent
            },

            {
                path:"user-search-Term",
                component:SearchUserTermComponent
            },

            {
                path:"user-search-Discipline",
                component:SearchUserDisciplineComponent
            },

            {
                path:"user-view-Term",
                component:ViewUserTermComponent
            },

            {
                path:"user-search-catalog",
                component:SearchUserCatalogComponent
            },

            {
                path:"user-view-Discipline",
                component:ViewUserDisciplineComponent
            },

            {
                path:"user-view-Catalog",
                component:ViewUserCatalogComponent
            },

            {
                path:"view-courses",
                component:ViewCoursesComponent
            },
            {
                path:"view-content",
                component:ViewContentComponent
            },
            {
                path:"view-Catalog",
                component:ViewCatalogComponent

            },
            {
                path:"view-Categories",
                component:ViewCategoriesComponent

            },
            {
                path:"edit-Categorie/:id",
                component:EditCategoriesComponent

            },
             {
                path:"delete-Categorie/:id",
                component:DeleteCategoriesComponent

            },
            {
                path:"add-System-Roles",
                component:AddSystemRolesComponent

            },
            {
                path:"edit-System-Roles/:id",
                component:EditSystemRolesComponent

            },
            {
                path:"view-System-Roles-details/:id",
                component:ViewSystemRolesDetailComponent

            },
            
            {
                path:"view-System-Roles",
                component:ViewSystemRolesComponent

            },
            {
                path:"delete-System-Roles/:id",
                component:DeleteSystemRolesComponent

            },
            {
                path:"search-System-Roles",
                component:SearchSystemRolesComponent

            },
            {
                path:"add-Institutional-Roles",
                component:AddInstitutionalRolesComponent

            },
            
            {
                path:"edit-Institutional-Roles/:id",
                component:EditInstitutionalRolesComponent

            },
             {
                path:"view-Institutional-Roles",
                component:ViewInstitutionalRolesComponent

            },
            
            {
                path:"Add-Enroll-Users",
                component:AddEnrollUsersComponent

            },
            {
                path:"courses-Details/:id",
                component:CourseDetailsComponent

            },
            {
                path:"Courses-information/:id",
                component:CourseInformationComponent

            },
            {
                path:"enrolls-Users",
                component:EnrollUsersComponent

            },
            {
                path:"search-Institutional-Roles",
                component:SearchInstitutionalRolesComponent

            },
            {
                path:"view-Institutional-Roles-Detail/:id",
                component:ViewInstitutionalRolesDetailComponent

            },
            {
                path:"delete-Institutional-Roles/:id",
                component:DeleteInstitutionalRolesComponent

            },
             {
                path:"edit-Term/:id",
                component:EditTermComponent

            },
            {
                path:"delete-Term/:id",
                component:DeleteTermComponent

            },
            {
                path:"add-User",
                component:AddUserComponent

            },
            {
                path:"view-User",
                component:ViewUserComponent

            },
             {
                path:"edit-User",
                component:EditUserComponent

            },
             {
                path:"search-User",
                component:SearchUserComponent

            },
             {
                path:"delete-User",
                component:DeleteUserComponent

            },
            
            {
                path:"edit-Content/:id",
                component:EditContentComponent

            },
            {
                path:"edit-discipline/:id",
                component:EditDisciplinesComponent

            },
            {
                path:"delete-Content/:id",
                component:DeleteContentComponent

            },
             {
                path:"delete-Courses/:id",
                component:DeleteCoursesComponent

            },
            
            {
                path:"delete-discipline/:id",
                component:DeleteDisciplinesComponent

            },
            
            {
                path:"edit-Course/:id",
                component:EditCourseComponent

            },
            {
                path:"view-Categories/:id",
                component:ViewDetailCategoriesComponent

            },
            {
                path:"view-Term-details/:id",
                component:ViewTermDetailsComponent

            },
            {
                path:"view-Content-details/:id",
                component:ViewContentDetailComponent

            },
            
            {
                path:"add-Term",
                component:AddTermComponent
                
            },
            {
                path:"add-Organizations",
                component:AddOrganizationsComponent
                
            },
            {
                path:"edit-Organizations/:id",
                component:EditOrganizationsComponent
                
            },
            {
                path:"view-Organizations",
                component:ViewOrganizationsComponent
                
            },
            {
                path:"search-Organizations",
                component:SearchOrganizationsComponent
                
            },
            {
                path:"delete-Organizations/:id",
                component:DeleteOrganizationsComponent
                
            },
             {
                path:"view-Organizations-details/:id",
                component:ViewDetailsOrganizationsComponent
                
            },
            {
                path:"view-Term",
                component:ViewTermComponent
                
            },
            {
                path:"search-Term",
                component:SearchTermComponent
                
            },
            {
                path:"add-Discipline",
                component:AddDisciplinesComponent
            },
            {
                path:"view-Discipline",
                component:ViewDisciplinesComponent
            },
            {
                path:"search-Discipline",
                component:SearchDisciplinesComponent
            },
            {
                path: 'view-User-course', 
                component: ViewUserCoursesComponent
                
            },
            {
                path: 'view-User-Term-Detail', 
                component: ViewTermDetailComponent
                
            },
            {
                path: 'view-User-Discipline-Detail', 
                component: ViewDisciplineDetailComponent
                
            },
            {
                path: 'view-User-Detail', 
                component: ViewUserDetailComponent
                
            },
                        
            {
                path: 'view-User-Catalog', 
                component: ViewUserCatalogComponent
                
            },
            {
                path: 'courses-details', 
                component: UserEnrolledListComponent
                
            },
            {
                path: 'user-Courses-information', 
                component: UsersCoursesDetailsComponent
                
            },
            {
                path:"user-search",
                component:SearchUsersCoursesComponent
            },
            {
                path:"view-catalog-details/:id",
                component:ViewDetailCatalogComponent
            },
            {
                path:"view-user-catalog-details",
                component:ViewCatalogDetailComponent
            },
            
            {
                path:"view-discipline-details/:id",
                component:ViewDetailDisciplinesComponent
            },
            {
                path:"add-announcement",
                component:AddAnnouncementComponent
            },
            {
                path:"edit-announcement",
                component:EditAnnouncementComponent
            },
            {
                path:"view-announcement",
                component:ViewAnnouncementComponent
            },
            {
                path:"delete-announcement",
                component:DeleteAnnouncementComponent
            },
            {
                path:"view-announcement-detail",
                component:ViewAnnouncementDetailsComponent
            },
            {
                path:"view-User-announcement",
                component:ViewUserAnnouncementComponent

            },
            {
                path:"view-User-announcement-detail",
                component:ViewUserAnnouncementDetailComponent

            },
            {
                path:"admin-Profile",
                component:AdminProfileComponent

            },
            {
                path:"admin-Profile-Password",
                component:AdminProfilePasswordComponent

            },
            {
                path:"student-Profile",
                component:StudentProfileComponent

            },
            {
                path:"student-Profile-Password",
                component:StudentProfilePasswordComponent

            },
            {
                path:"student-Profile-Support",
                component:StudentSupportComponent

            },
            {
                path:"student-Profile-Feedback",
                component:StudentFeedbackComponent

            },
            {
                path:"view-surveys",
                component:ViewSurveysComponent

            },
            {
                path:"add-surveys",
                component:AddSurveysComponent

            },
            {
                path:"edit-surveys",
                component:EditSurveysComponent

            },
            {
                path:"delete-surveys",
                component:DeleteSurveysComponent

            },
            {
                path:"view-surveys-details",
                component:ViewSurveysDetailsComponent

            },
            {
                path:"add-survey-questions",
                component:AddSurveyQuestionsComponent

            },
            {
                path:"yes-no-questions",
                component:YesNoQuestionsComponent

            },
            {
                path:"edit-yes-no-questions",
                component:EditYesNoQuestionsComponent

            },
            {
                path:"open-questions",
                component:OpenQuestionsComponent

            },
            {
                path:"edit-open-questions",
                component:EditOpenQuestionsComponent

            },
            {
                path:"view-Assignment",
                component:ViewAssignmentComponent

            },
            {
                path:"add-assignment",
                component:AddAssignmentsComponent

            },
            {
                path:"edit-assignment",
                component:EditAssignmentComponent

            },
            {
                path:"view-assignment-detials",
                component:ViewAssignmentDetailsComponent

            },
            {
                path:"delete-assignment",
                component:DeleteAssignmentComponent

            },
            {
                path:"view-User-survey",
                component:ViewUserSurveysComponent

            },
            {
                path:"view-User-survey-details",
                component:ViewUserSurveysDetailsComponent

            },
            {
                path:"view-User-Assignments",
                component:ViewUserAssignmentsComponent

            },
            {
                path:"view-User-Assignments-details",
                component:ViewUserAssignmentsDetailsComponent

            },

            
            
        /*   LMS Component Ends    */

            {
                path: "index",
                component: HomeComponent
            },
            {
                path: "ui/colors",
                component: ColorsComponent
            },
            {
                path: "ui/typography",
                component: TypographyComponent
            },
            {
                path: "ui/panels",
                component: PanelsComponent
            },
            {
                path: "ui/buttons",
                component: ButtonsComponent
            },
            {
                path: "ui/tabs",
                component: TabsComponent
            },
            {
                path: "ui/alerts",
                component: AlertsComponent
            },
            {
                path: "ui/badges_progress",
                component: BadgesProgressComponent
            },
            {
                path: "ui/lists",
                component: ListComponent
            },
            {
                path: "ui/cards",
                component: CardsComponent
            },
            {
                path: "ui/icons",
                component: IconsComponent
            },
            {
                path: "forms/form_basic",
                component: FormBasicComponent
            },
            {
                path: "forms/form_advanced",
                component: FormAdvancedComponent
            },
            {
                path: "forms/form_masks",
                component: InputMasksComponent
            },
            {
                path: "forms/form_validation",
                component: FormValidationComponent
            },
            {
                path: "forms/text_editors",
                component: TextEditorsComponent
            },
            {
                path: "tables/basic",
                component: TablesComponent
            },
            {
                path: "tables/datatables",
                component: DatatablesComponent
            },
            {
                path: "charts/chartjs",
                component: ChartjsComponent
            },
            {
                path: "charts/charts_morris",
                component: MorrisChartComponent
            },
            {
                path: "charts/charts_sparkline",
                component: SparklineChartComponent
            },
            {
                path: "maps_vector",
                component: MapsVectorComponent
            },
            {
                path: "mailbox/mailbox",
                component: MailboxComponent
            },
            {
                path: "mailbox/mail_view",
                component: MailViewComponent
            },
            {
                path: "mailbox/mail_compose",
                component: MailComposeComponent
            },
            {
                path: "calendar",
                component: CalendarComponent
            },
            {
                "path": "invoice",
                "component": InvoiceComponent
            },
            {
                path: "profile",
                component: ProfileComponent
            },
            
        ]
    },
    {
        "path": "login",
        "component": LoginComponent
    },
    {
        "path": "register",
        "component": RegisterComponent
    },
    {
        "path": "lockscreen",
        "component": LockscreenComponent
    },
    {
        "path": "forgot_password",
        "component": ForgotPasswordComponent
    },
    {
        "path": "error_404",
        "component": Error404Component
    },
    {
        "path": "error_500",
        "component": Error500Component
    },
    {
        "path": "**",
        "redirectTo": "error_404",
        "pathMatch": "full"
    },
    
];

@NgModule({
  declarations: [ 
  //start lms component declaration
    AdminhomeComponent,
  //END lms component declaration
  
    HomeComponent,
    ColorsComponent,
    TypographyComponent,
    PanelsComponent,
    TabsComponent,
    AlertsComponent,
    CardsComponent,
    BadgesProgressComponent,
    ListComponent,
    IconsComponent,
    ButtonsComponent,
    FormBasicComponent,
    InputMasksComponent,
    FormValidationComponent,
    TextEditorsComponent,
    FormAdvancedComponent,
    TablesComponent,
    DatatablesComponent,
    ChartjsComponent,
    MorrisChartComponent,
    SparklineChartComponent,
    MapsVectorComponent,
    MailboxComponent,
    MailComposeComponent,
    MailViewComponent,
    CalendarComponent,
    ProfileComponent,
    InvoiceComponent,
    LoginComponent,
    RegisterComponent,
    LockscreenComponent,
    ForgotPasswordComponent,
    Error404Component,
    Error500Component,
    AddCoursesComponent,
    SearchCoursesComponent,
    AddResourcesComponent,
    SearchResourcesComponent,
    SearchCategoriesComponent,
    AddCategoriesComponent,
    ViewCoursesComponent,
    ViewContentComponent,
    ViewCatalogComponent,
    ViewCategoriesComponent,
    EditCategoriesComponent,
    EditContentComponent,
    EditCourseComponent,
    EditTermComponent,
    EditDisciplinesComponent,
    CourseCatalogComponent,
    AddTermComponent,
    ViewTermComponent,
    SearchTermComponent,
    AddDisciplinesComponent,
    ViewDisciplinesComponent,
    SearchDisciplinesComponent,
    DeleteCategoriesComponent,
    DeleteContentComponent,
    DeleteTermComponent,
    DeleteDisciplinesComponent,
    AddUserComponent,
    EditUserComponent,
    ViewUserComponent,
    SearchUserComponent,
    DeleteUserComponent,
    DeleteCoursesComponent,
    AddSystemRolesComponent,
    EditSystemRolesComponent,
    ViewSystemRolesComponent,
    SearchSystemRolesComponent,
    DeleteSystemRolesComponent,
    AddInstitutionalRolesComponent,
    EditInstitutionalRolesComponent,
    ViewInstitutionalRolesComponent,
    SearchInstitutionalRolesComponent,
    DeleteInstitutionalRolesComponent,
    AddOrganizationsComponent,
    EditOrganizationsComponent,
    ViewOrganizationsComponent,
    SearchOrganizationsComponent,
    DeleteOrganizationsComponent,
    AddEnrollUsersComponent,
    EnrollUsersComponent,
    CourseDetailsComponent,
    CourseInformationComponent,
    ViewUserCoursesComponent,
    UserEnrolledListComponent,
    UsersCoursesDetailsComponent,
    SearchUsersCoursesComponent,
    ViewUserCatalogComponent,
    ViewUserDisciplineComponent,
    ViewUserTermComponent,
    SearchUserCatalogComponent,
    SearchUserDisciplineComponent,
    SearchUserTermComponent,
    ViewDetailCategoriesComponent,
    ViewDetailCatalogComponent,
    ViewDetailsOrganizationsComponent,
    ViewDetailDisciplinesComponent,
    ViewTermDetailsComponent,
    ViewContentDetailComponent,
    ViewInstitutionalRolesDetailComponent,
    ViewSystemRolesDetailComponent,
    ViewCatalogDetailComponent,
    ViewTermDetailComponent,
    ViewDisciplineDetailComponent,
    ViewUserDetailComponent,
    AddAnnouncementComponent,
    EditAnnouncementComponent,
    ViewAnnouncementComponent,
    DeleteAnnouncementComponent,
    ViewAnnouncementDetailsComponent,
    ViewUserAnnouncementDetailComponent,
    ViewUserAnnouncementComponent,
    AdminProfileComponent,
    AdminProfilePasswordComponent,
    StudentProfileComponent,
    StudentProfilePasswordComponent,
    StudentSupportComponent,
    StudentFeedbackComponent,
    UsersComponent,
    AddSurveysComponent,
    EditSurveysComponent,
    DeleteSurveysComponent,
    ViewSurveysDetailsComponent,
    AddSurveyQuestionsComponent,
    YesNoQuestionsComponent,
    EditYesNoQuestionsComponent,
    OpenQuestionsComponent,
    EditOpenQuestionsComponent,
    ViewAssignmentComponent,
    AddAssignmentsComponent,
    EditAssignmentComponent,
    ViewAssignmentDetailsComponent,
    DeleteAssignmentComponent,
    ViewUserSurveysComponent,
    ViewUserSurveysDetailsComponent,
    ViewUserAssignmentsComponent,
    ViewUserAssignmentsDetailsComponent,
    ViewSurveysComponent,

  ],
  imports: [ RouterModule.forRoot(routes),
    RouterModule.forRoot(routesStudent),
    CommonModule,
    FormsModule, ReactiveFormsModule,
    NgbModule.forRoot()
],
  exports: [ 
    RouterModule,
    
  ]
})

export class AppRoutingModule { }
