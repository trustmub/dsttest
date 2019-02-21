import {MembersModel} from '../contents/members/members.model';


export class MeetingModel {
  public id?: string;
  public meetingName: string;
  public meetingStartTime: string;
  public meetingEndTime: string;
  public meetingLocation: string;
  public meetingStartDate: string;
  public meetingEndDate: string;
  public createdBy: string;
  public createdDate: string;
  public attendees?: AttendeesModel[];
  public decisions?: DecisionModel;

  constructor(id: string,
              meetingName: string,
              meetingStartTime: string,
              meetingEndTime: string,
              taskLocation: string,
              createdBy: string,
              meetingStartDate: string,
              meetingEndDate: string,
              attendees?: AttendeesModel[],
              decisions?: DecisionModel,
              createdDate: string = (new Date().toISOString())) {
    this.id = id;
    this.meetingName = meetingName;
    this.meetingStartTime = meetingStartTime;
    this.meetingEndTime = meetingEndTime;
    this.meetingLocation = taskLocation;
    this.createdBy = createdBy;
    this.attendees = attendees;
    this.decisions = decisions;
    this.meetingStartDate = meetingStartDate;
    this.meetingEndDate = meetingEndDate;
    this.createdDate = createdDate;
  }
}

export class AttendeesModel {
  public member: string;
  public designation: string;
  public programme: string;
  public status: string;
  public comments: string;

  constructor(member: string, designation: string, programme: string, status: string, comments: string) {
    this.member = member;
    this.designation = designation;
    this.programme = programme;
    this.status = status;
    this.comments = comments;
  }
}


export class DecisionModel {

  public actionItems?: ActionItemModel[];
  public nonActionItems?: NonActionItemModel[];

  constructor(actionItems: ActionItemModel[], nonActionItems: NonActionItemModel[]) {
    this.actionItems = actionItems;
    this.nonActionItems = nonActionItems;
  }

}


export class NonActionItemModel {
  public reference: string;
  public item: string;
  public description: string;
  public createdBy: string;
  public createDate: number;

  constructor(reference: string, item: string, description: string, createdBy: string, createDate: number = Date.now()) {
    this.reference = reference;
    this.item = item;
    this.description = description;
    this.createdBy = createdBy;
    this.createDate = createDate;
  }
}

export class ActionItemModel {
  public reference: string;
  public item: string;
  public description: string;
  public assignedTo: string;
  public returnDate: string;
  public status: string;
  public health: string;
  public feedback: string;
  public createdBy: string;
  public createdDate: string;

  constructor(reference: string,
              item: string,
              description: string,
              assignedTo: string,
              returnDate: string,
              status: string,
              health: string,
              feedback: string,
              createdBy: string,
              createdDate: string = new Date().toISOString()) {
    this.reference = reference;
    this.item = item;
    this.description = description;
    this.assignedTo = assignedTo;
    this.returnDate = returnDate;
    this.status = status;
    this.health = health;
    this.feedback = feedback;
    this.createdBy = createdBy;
    this.createdDate = createdDate;
  }
}


