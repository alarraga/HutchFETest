import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { ThemeModule } from '../../theme/theme.module'
import { SearchComponent } from '../search/search.component';
@NgModule({
    declarations: [PagesComponent,
        SearchComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
      ThemeModule
  ]
})
export class PagesModule { }
