import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-vote-ticker',
  templateUrl: './vote-ticker.component.html',
  styleUrls: ['./vote-ticker.component.less'],
})
export class VoteTickerComponent implements OnInit {
  @Input() votesCount: number = null;
  @Input() voteType: string = '';
  @Output() upvote = new EventEmitter();
  @Output() downvote = new EventEmitter();
  @Output() removevote = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  doUpvote() {
    if (this.voteType === 'upvote') {
      this.removevote.emit();
    } else {
      this.upvote.emit();
    }
  }

  doDownvote() {
    if (this.voteType === 'downvote') {
      this.removevote.emit();
    } else {
      this.downvote.emit();
    }
  }
}
