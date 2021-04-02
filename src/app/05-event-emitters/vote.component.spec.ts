import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  let component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should raise voteChange event when up voted', () => {
    let totalVotes = null;
    component.voteChanged.subscribe(tv => totalVotes = tv);
    component.upVote();
    expect(totalVotes).not.toBeNull();
  });
});
