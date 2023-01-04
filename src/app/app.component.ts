import { Component, VERSION } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

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
    'video_id',
    'exec_status',
    'exec_start_time',
    'exec_end_time',
  ];

  columnsToDisplayWithExpand = [...this.displayedColumns, 'expand'];
  dataSource = [
    {
      exec_queue_seq_id: 'FA051ACC-20F1-C216-B952-6EF34E3CEDCC',
      video_id: '202209010001',
      task_item: 'archive',
      exec_status: 'complete',
      exec_start_time: '2022-12-27 17:15:00',
      exec_end_time: '2022-12-27 17:16:07',
      unc_pathname: '\\10.227.63.205',
      file_path: '\\nearline_archive_02',
      error_message: '',
      create_queue_by: 'system',
      create_queue_time: '',
      row_version: '2022-12-27 17:16:06',
    },
    {
      exec_queue_seq_id: 'FA051ACC-20F1-C216-B952-6EF34E3CEDCC',
      video_id: '202209010001',
      task_item: 'archive',
      exec_status: 'complete',
      exec_start_time: '2022-12-27 17:15:00',
      exec_end_time: '2022-12-27 17:16:07',
      unc_pathname: '\\10.227.63.205',
      file_path: '\\nearline_archive_02',
      error_message: '',
      create_queue_by: 'system',
      create_queue_time: '',
      row_version: '2022-12-27 17:16:06',
    },
    {
      exec_queue_seq_id: 'FA051ACC-20F1-C216-B952-6EF34E3CEDCC',
      video_id: '202209010001',
      task_item: 'archive',
      exec_status: 'complete',
      exec_start_time: '2022-12-27 17:15:00',
      exec_end_time: '2022-12-27 17:16:07',
      unc_pathname: '\\10.227.63.205',
      file_path: '\\nearline_archive_02',
      error_message: '',
      create_queue_by: 'system',
      create_queue_time: '',
      row_version: '2022-12-27 17:16:06',
    },
  ];
}
