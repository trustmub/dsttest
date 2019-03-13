import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {ExcoMeetingService} from '../exco-meeting.service';
import {MeetingModel} from '../exco-meeting.model';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-exco-meeting-details',
  templateUrl: './exco-meeting-details.component.html',
  styleUrls: ['./exco-meeting-details.component.css'],
})
export class ExcoMeetingDetailsComponent implements OnInit, OnDestroy {

  agendaEditorForm: FormGroup;
  meetingRecord: MeetingModel;
  paramSubscription: Subscription;
  fileToUpload: File;
  listOfFiles: FileList;
  agendaFilename: string;
  minutesFileName: string;
  registerFileName: string;
  id: string;
  loading = false;
  deleteResult: any = {result: '', message: '', status: 0};

  constructor(private route: ActivatedRoute, private meetingService: ExcoMeetingService, private router: Router) {
    this.id = this.route.snapshot.params.id;
    this.meetingRecord = this.meetingService.getMeeting(this.id);
    this.agendaFilename = (this.meetingRecord.agendaFile === undefined) ? '' : this.meetingRecord.agendaFile.name;
  }

  ngOnInit() {

    this.meetingService.refreshObserver.subscribe(
      (status: boolean) => {
        if (status) {
          this.meetingRecord = this.meetingService.getMeeting(this.id);
        }
      }
    );

    this.agendaEditorForm = new FormGroup({
      agendaEditor: new FormControl(null)
    });

    this.paramSubscription = this.route.params
      .subscribe(
        (params: Params) => {
          this.meetingRecord = this.meetingService.getMeeting(params.id);
        }
      );
    this.meetingService.getAllMeetings();
  }

  onDeleteMeetingClicked() {
    this.loading = true;

    this.meetingService.deleteM(this.id).then(
      (outcome: any) => {
        this.deleteResult = outcome;
        console.log(this.deleteResult);
        if (this.deleteResult.status === 200) {
          this.loading = false;
          this.router.navigate(['/exco']);
        } else {
          this.loading = false;
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.paramSubscription.unsubscribe();
  }

  handleSubmissionFileInput(type: string, files: File) {

    this.fileToUpload = files;
    this.listOfFiles.item.apply(this.fileToUpload);

    console.log(this.listOfFiles.length);
    this.meetingRecord.agendaFile = this.fileToUpload;

    this.agendaFilename = (type === 'agenda') ? this.fileToUpload.name : '';
    this.minutesFileName = (type === 'minutes') ? this.fileToUpload.name : '';
    this.registerFileName = (type === 'register') ? this.fileToUpload.name : '';
  }

  openFileWindow(fileName: string) {

  }

  onSubmitAgenda() {
    this.meetingRecord.agendaEditor = this.agendaEditorForm.value.agendaEditor;
    console.log(this.meetingRecord);
    this.meetingService.updateMeeting(this.meetingRecord);
  }

  backClicked() {
    this.router.navigate(['/exco']);
  }

  getHealthClasses(health: string) {
    return {
      'btn-success': health === 'green',
      'btn-danger': health === 'red',
      'btn-warning': health === 'amber'
    };
  }

}
