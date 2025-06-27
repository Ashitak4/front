import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PollHttpService } from './services/poll-http.service';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.scss']
})
export class PollComponent implements OnInit {
  pollId = 'weekly-poll';  // The ID of the poll you want to interact with
  pollData: any;
  @Output() onAnswerClick = new EventEmitter<string>();

  constructor(private pollHttpService: PollHttpService) {}

  ngOnInit(): void {
    this.loadPoll();
  }

  loadPoll() {
    this.pollData = {
      "weekly-poll": {
          "question": "Which feature would you like to see next?",
          "options": [
              {"name": "New Feature A", "votes": 0},
              {"name": "New Feature B", "votes": 0},
              {"name": "New Feature C", "votes": 0}
          ]
      }
  }
    this.pollHttpService.getPollResults(this.pollId).subscribe({
      next: this.handlePollResults.bind(this),
      error: this.handlePollErrors.bind(this)
    });
  }

  handlePollResults(data: any) {
    console.log('Poll data fetched successfully', data);
    this.pollData = data;
  }

  handlePollErrors(error: any) {
    console.error('Error fetching poll data', error);
  }

  submitVote(vote: string) {
    this.onAnswerClick.emit(vote);
    // this.PollHttpService.submitVote(this.pollId, vote).subscribe(
    //   data => {
    //     this.pollData = data;  // Update the poll results after submitting the vote
    //   },
    //   error => {
    //     console.error('Error submitting vote', error);
    //   }
    // );
  }
}
