import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DirectoryService } from '../services/directory.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class DirectoryComponent implements OnInit {
  employees: any[] = [];
  error: string | null = null;

  constructor(private directoryService: DirectoryService) {}

  ngOnInit(): void {
    this.directoryService.fetchUser().subscribe(
      (response: any) => {
        this.employees = response.data;
      },
      (err) => {
        this.error = 'Error fetching employees';
      }
    );
  }
}
