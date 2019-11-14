import React from 'react';
import { storiesOf } from '@storybook/react';
import Story from '../Components/Story';
import { withState } from '@dump247/storybook-state';

storiesOf('Story', module).add(
    'with 2 users',
    withState({ IsVoteRevealed: false, Title: 'Story title 1', CurrentUsername: 'User1' })(({ store }) => (
        <Story
            Title={store.state.Title}
            IsVoteRevealed={store.state.IsVoteRevealed}
            Users={[
                { Id: '1', Name: store.state.CurrentUsername, Vote: 3 },
                { Id: '2', Name: 'User2', Vote: 2 },
            ]}
            CurrentUsername={store.state.CurrentUsername}
            StoryReveal={() => store.set({ IsVoteRevealed: true })}
            StoryReset={() => store.set({ IsVoteRevealed: true, Title: '' })}
            StoryRename={(newTitle: string) => store.set({ Title: newTitle })}
            UserRename={(newName: string) => store.set({ CurrentUsername: newName })}
        />
    ))
);
