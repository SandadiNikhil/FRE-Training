import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DirectoryService } from '../core/services/directory.service';

// @Component({
//   selector: 'app-directory',
//   imports: [],
//   templateUrl: './directory.component.html',
//   styleUrl: './directory.component.css'
// })
// export class DirectoryComponent implements OnInit {
//   users: any[] = [];
//   error: string | null = null;

//   constructor(private directoryService: DirectoryService) { }

//   ngOnInit(): void {
//     this.directoryService.fetchUser().subscribe(
//       (response: any) => {
//         this.users = response.data;
//       },
//       (err: any) => {
//         this.error = 'Error fetching users.';
//         console.error('Error fetching users:', err);
//       }
//     );
//   }
// }



@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class DirectoryComponent implements OnInit {
  users: any[] = [];
  error: string | null = null;

  constructor(private directoryService: DirectoryService) {}

  ngOnInit(): void {
    this.directoryService.fetchUser().subscribe(
      (response: any) => {
        this.users = response.data;
      },
      (err) => {
        this.error = 'Error fetching users';
      }
    );
  }
}
