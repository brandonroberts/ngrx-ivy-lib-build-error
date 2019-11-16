import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { StoreModule } from '@ngrx/store';
import * as fromUser from './state/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './state/user.effects';



@NgModule({
  declarations: [MyLibComponent],
  imports: [
  StoreModule.forFeature(fromUser.userFeatureKey, fromUser.reducer),
  EffectsModule.forFeature([UserEffects])],
  exports: [MyLibComponent]
})
export class MyLibModule { }
