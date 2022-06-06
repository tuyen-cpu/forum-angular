import { Topic } from './../../shared/amessage.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.scss'],
})
export class TopicListComponent implements OnInit {
  topics: Topic[] = [];
  constructor() {}

  ngOnInit(): void {
    this.topics.push({
      id: 'chude123',
      title: 'hoc phi',
      createdTime: new Date('2019-01-16'),
      content: '',
      messages: [],
    });
    this.topics.push({
      id: 'chude123',
      title: 'hoc phi',
      createdTime: new Date('2019-01-16'),
      content: '',
      messages: [],
    });
    this.topics.push({
      id: 'chude123',
      title: 'hoc phi',
      createdTime: new Date('2019-01-16'),
      content: '',
      messages: [],
    });
    this.topics.push({
      id: 'chude123',
      title: 'hoc phi',
      createdTime: new Date('2019-01-16'),
      content: '',
      messages: [],
    });
    this.topics.push({
      id: 'chude123',
      title: 'hoc phi',
      createdTime: new Date('2019-01-16'),
      content: '',
      messages: [],
    });
    this.topics.push({
      id: 'chude123',
      title: 'hoc phi',
      createdTime: new Date('2019-01-16'),
      content: '',
      messages: [],
    });
    this.topics.push({
      id: 'chude123',
      title: 'hoc phi',
      createdTime: new Date('2019-01-16'),
      content: '',
      messages: [],
    });
    console.log(this.topics);
  }
}
