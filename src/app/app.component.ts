import { Component, inject, OnInit, signal } from '@angular/core';

import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ThemeService } from './theme.service';
import { Product, ProductsService } from './products.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [FormsModule],
})
export class AppComponent implements OnInit {
  private themeService = inject(ThemeService);
  private productsService = inject(ProductsService);

  showAlimentari = false;

  products = signal<Product[]>([]);
  filteredProducts = signal<Product[]>([]);

  ngOnInit() {
    this.products.set(this.productsService.products());
  }

  setTheme() {
    this.themeService.setTheme();
  }

  filterProducts() {
    if (this.showAlimentari) {
      this.filteredProducts.set(
        this.products().filter((product) => product.category === 'Alimentari')
      );
    } else {
      this.filteredProducts.set(this.products());
    }
  }
}
