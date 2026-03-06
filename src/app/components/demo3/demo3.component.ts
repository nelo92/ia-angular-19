import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demo3',
  imports: [],
  templateUrl: './demo3.component.html',
  styleUrl: './demo3.component.css'
})
export class Demo3Component {
  private router = inject(Router);

  goBack() {
    this.router.navigate(['/demo']);
  }
}
