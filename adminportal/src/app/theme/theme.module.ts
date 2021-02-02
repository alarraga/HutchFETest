import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { VerticalMenuComponent } from './components/menu/vertical-menu/vertical-menu.component';
import { HorizontalMenuComponent } from './components/menu/horizontal-menu/horizontal-menu.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { BackTopComponent } from './components/back-top/back-top.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';

@NgModule({
    declarations: [HeaderComponent,
        FooterComponent,
        SidebarComponent,
        VerticalMenuComponent,
        HorizontalMenuComponent,
        BreadcrumbComponent,
        BackTopComponent,
        UserMenuComponent,
    ],
    exports: [HeaderComponent,
        FooterComponent,
        SidebarComponent,
        VerticalMenuComponent,
        HorizontalMenuComponent,
        BreadcrumbComponent,
        BackTopComponent,
        UserMenuComponent],
    imports: [
        CommonModule
    ]
})
export class ThemeModule { }
