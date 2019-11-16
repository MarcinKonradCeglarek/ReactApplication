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
            Users={[{ id: '1', name: store.state.CurrentUsername, vote: 3 }, { id: '2', name: 'User2', vote: 2 }]}
            CurrentUsername={store.state.CurrentUsername}
            CurrentUserId={'1'}
            StoryReveal={() => store.set({ IsVoteRevealed: true })}
            StoryReset={() => store.set({ IsVoteRevealed: true, Title: '' })}
            StoryRename={(newTitle: string) => store.set({ Title: newTitle })}
            UserRename={(newName: string) => store.set({ CurrentUsername: newName })}
        />
    ))
);
