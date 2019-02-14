import {MembersModel} from '../contents/members/members.model';

export class MeetingModel {
  public id: number;
  public meetingName: string;
  public meetingStartTime: string;
  public meetingEndTime: string;
  public meetingLocation: string;
  public meetingStartDate: number;
  public meetingEndDate: number;
  public createdBy: string;
  public createdDate: number;
  public attendees?: AttendeesModel[];
  public decisions?: DecisionModel;

  constructor(id: number,
              meetingName: string,
              meetingStartTime: string,
              meetingEndTime: string,
              taskLocation: string,
              createdBy: string,
              attendees?: AttendeesModel[],
              decisions?: DecisionModel,
              meetingStartDate: number = Date.now(),
              meetingEndDate: number = Date.now(),
              createdDate: number = Date.now()) {
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
  public member: MembersModel;
  public attending: boolean;
  public apologies: boolean;
  public comments: string;

  constructor(member: MembersModel, attending: boolean, apologies: boolean, comments: string) {
    this.member = member;
    this.attending = attending;
    this.apologies = apologies;
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
  public returnDate: number;
  public status: string;
  public health: string;
  public feedback: string;
  public createdBy: string;
  public createdDate: number;

  constructor(reference: string,
              item: string,
              description: string,
              assignedTo: string,
              returnDate: number,
              status: string,
              health: string,
              feedback: string,
              createdBy: string,
              createdDate: number = Date.now()) {
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


