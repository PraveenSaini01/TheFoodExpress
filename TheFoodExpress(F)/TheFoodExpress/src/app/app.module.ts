import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
 import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';

import {MatIconModule} from '@angular/material/icon';
import { AuthService } from './service/auth.service';
import { UserService } from './service/user.service';
import { HeaderComponent } from './header/header.component';

 import { RestaurentCardComponent } from './restaurant-card/restaurant-card.component';
import { FooterComponent } from './footer/footer.component';
import { RestaurentListComponent } from './restaurent-list/restaurent-list.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodCardComponent } from './food-card/food-card.component';
import { RestaurantAddComponent } from './restaurant-add/restaurant-add.component';
import { AdminRestaurantViewComponent } from './admin-restaurant-view/admin-restaurant-view.component';
import { AdminFoodItemComponent } from './admin-food-item/admin-food-item.component';
import { AdminComponent } from './admin/admin.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    RestaurentListComponent,
    RestaurentCardComponent,
    FoodListComponent,
    FoodCardComponent,
    RestaurantAddComponent,
    AdminRestaurantViewComponent,
    AdminFoodItemComponent,
    AdminComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatIconModule,
    HttpClientModule,
    MatChipsModule,
    MatSnackBarModule,
    MatButtonToggleModule,
    MatTableModule,
    MatCardModule,
    MatMenuModule,
  ],
  providers: [
   // provideClientHydration(),
    //AuthService,
   // UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
