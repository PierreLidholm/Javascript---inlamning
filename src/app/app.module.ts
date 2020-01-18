import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MessageComponent } from './components/navbar/message/message.component';
import { BellComponent } from './components/navbar/bell/bell.component';
import { ProfileComponent } from './components/navbar/profile/profile.component';
import { WelcomeMessageComponent } from './components/main/welcome-message/welcome-message.component';
import { MainComponent } from './components/main/main.component';
import { UsersDataComponent } from './components/main/users-data/users-data.component';
import { ProjectsDataComponent } from './components/main/projects-data/projects-data.component';
import { TotalsalesDataComponent } from './components/main/totalsales-data/totalsales-data.component';
import { DownloadsDataComponent } from './components/main/downloads-data/downloads-data.component';
import { TotalsalesComponent } from './components/main/totalsales/totalsales.component';
import { TotalpurchasesComponent } from './components/main/totalpurchases/totalpurchases.component';
import { TotalordersComponent } from './components/main/totalorders/totalorders.component';
import { TotalgrowthComponent } from './components/main/totalgrowth/totalgrowth.component';
import { TicketsComponent } from './components/main/tickets/tickets.component';
import { InfoComponent } from './components/main/tickets/info/info.component';
import { UpdatesComponent } from './components/main/updates/updates.component';
import { DistributionAndSalesReportComponent } from './components/main/distribution-and-sales-report/distribution-and-sales-report.component';
import { SalesReportComponent } from './components/main/distribution-and-sales-report/sales-report/sales-report.component';
import { InvoicesComponent } from './components/main/invoices/invoices.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MessageComponent,
    BellComponent,
    ProfileComponent,
    WelcomeMessageComponent,
    MainComponent,
    UsersDataComponent,
    ProjectsDataComponent,
    TotalsalesDataComponent,
    DownloadsDataComponent,
    TotalsalesComponent,
    TotalpurchasesComponent,
    TotalordersComponent,
    TotalgrowthComponent,
    TicketsComponent,
    InfoComponent,
    UpdatesComponent,
    DistributionAndSalesReportComponent,
    SalesReportComponent,
    InvoicesComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
