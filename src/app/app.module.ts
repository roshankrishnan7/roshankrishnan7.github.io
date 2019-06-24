import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TypingAnimationDirective } from 'angular-typing-animation'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkComponent } from './work/work.component';
import { ProjectsComponent } from './projects/projects.component';
import { SocialsComponent } from './socials/socials.component';

@NgModule({
  declarations: [
    TypingAnimationDirective,

    AppComponent,
    AboutComponent,
    HomeComponent,
    NavbarComponent,
    SkillsComponent,
    WorkComponent,
    ProjectsComponent,
    SocialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
