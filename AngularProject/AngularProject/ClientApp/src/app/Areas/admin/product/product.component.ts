import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {
  fileToUpload: File;
  product: Product;
  imageUrl: string;
  constructor(private productService: ProductService, private router: Router) {
    this.product = new Product();
  }

  ngOnInit() {
  }
  handleFileChange(e) {
    if (e.target.files.length > 0) {
      this.fileToUpload = e.target.files[0];
    }

    // Show image preview
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.fileToUpload);
  }
  SaveData() {
    const formData = new FormData();
    formData.append('File', this.fileToUpload);
    formData.append('CategoryId', this.product.CategoryId.toString());
    formData.append('Name', this.product.Name);
    formData.append('UnitPrice', this.product.UnitPrice);
    formData.append('Description', this.product.Description);

    this.productService.AddProduct(formData)
      .subscribe(res => {
        if (res.ProductId > 0) {
          this.router.navigate(['admin/products']);
        }
      });
  }
}
