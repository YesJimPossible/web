import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {HttpModule}    from '@angular/http';

import './rxjs-extensions';

import {BackboneModule} from '../backbone/backbone.module';
import {TracksModule} from '../tracks/tracks.module';
import {DashboardModule} from '../dashboard/dashboard.module';

import {MainComponent}     from './components/main/main.component';

import {MainRoutingModule}     from './main.routes';
import {AudioPlayerModule} from '../audioplayer/audio-player.module';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BackboneModule,
    TracksModule,
    DashboardModule,
    MainRoutingModule,
    AudioPlayerModule,
  ],
  declarations: [
    MainComponent
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [MainComponent]
})
export class MainModule {
}

