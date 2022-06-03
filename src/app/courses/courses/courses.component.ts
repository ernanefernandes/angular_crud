import { CoursesService } from './../service/courses.service';
import { Component, OnInit } from '@angular/core';
import { Course } from '../Model/course';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/componets/error-dialog/error-dialog.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses$ : Observable<Course[]>;

  displayedColumns = ['_id', 'name','category'];

  constructor(
    private coursesService:CoursesService,
    public dialog : MatDialog
    ) {

    this.courses$ = coursesService.findAll()
    .pipe(
      catchError(error=>{
        this.openErrorDialog('Erro ao carregar lista de cursos!')
        return of([])
      })
    );
  }

  openErrorDialog(errorMsg : String) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {

  }

}
