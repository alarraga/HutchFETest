import { Injectable } from '@angular/core';
import { Settings } from './app.settings.model';
import { Component, OnInit, ViewEncapsulation, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AppSettings {
    public settings = new Settings(
        'Hutch Profile',
        'Angular Admin Template with Bootstrap 4',
        {
            menu: window.innerWidth > 798 ? 'vertical' : 'horizontal', //horizontal , vertical
            menuType: 'default', //default, compact, mini
            showMenu: true,
            navbarIsFixed: true,
            footerIsFixed: false,
            sidebarIsFixed: true,
            showSideChat: false,
            sideChatIsHoverable: true,
            skin:'combined'  //light , dark, blue, green, combined, purple, orange, brown, grey, pink          
        }
    )

    
      
}
