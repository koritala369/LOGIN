// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { Router, NavigationEnd } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet,CommonModule],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {

//   currentRoute: string ="";

//   constructor(private router: Router) {
//     // Subscribe to route changes
//     this.router.events.subscribe(event => {
//       if (event instanceof NavigationEnd) {
//         this.currentRoute = event.url;
//       }
//     });
//   }

//   isLoginPage(): boolean {
//     // Check if the current route is the login page or related pages
//     return this.currentRoute === '/login' || this.currentRoute === '/forgot-password' || this.currentRoute === '/signup';
//   }
// }
