import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { PortalDashboardComponent } from './dashboard/portal-dashboard/portal-dashboard.component';
import { StatCardComponent } from './dashboard/widgets/stat-card/stat-card.component';
import { ActivityChartComponent } from './dashboard/widgets/activity-chart/activity-chart.component';
import { RecentActivityComponent } from './dashboard/widgets/recent-activity/recent-activity.component';
import { SystemStatusComponent } from './dashboard/widgets/system-status/system-status.component';
import { AppRoutingModule } from './app-routing.module';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { ToastComponent } from './shared/components/toast/toast.component';
import { ConfirmDialogComponent } from './shared/components/confirm-dialog/confirm-dialog.component';
import { MaterialModule } from './shared/material.module';
import { ModalComponent } from './shared/components/modal/modal.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { YearChartComponent } from './dashboard/widgets/year-chart/year-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    MainLayoutComponent,
    PortalDashboardComponent,
    StatCardComponent,
    ActivityChartComponent,
    RecentActivityComponent,
    SystemStatusComponent,
    LoaderComponent,
    ToastComponent,
    ModalComponent,
    ConfirmDialogComponent,
    YearChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
