import { Component, VERSION, ViewChild } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  expandedElement: any;
  displayedColumns: string[] = [
    'videoId',
    'taker',
    'process',
    'createQueueTime',
    'execQueueTime',
    'nearlineFilePath',
    'feature',
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  columnsToDisplayWithExpand = [...this.displayedColumns, 'expand'];
  dataSource = [];

  testFunc(e, element) {
    this.expandedElement = this.expandedElement === element ? null : element;
    console.log('asd');
    console.log('this.expandedElement', this.expandedElement);
    e.stopPropagation();
  }
}
