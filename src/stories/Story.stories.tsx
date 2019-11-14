import React from 'react';
import { storiesOf } from '@storybook/react';
import Story from '../Components/Story';

storiesOf('Story', module).add('with 2 users', () => (
    <Story
        Title="Story title 1"
        IsVoteRevealed={false}
        Users={[{ Id: '1', Name: 'User1', Vote: 3 }, { Id: '2', Name: 'User2', Vote: 2 }]}
        StoryReveal={() => {}}
        StoryReset={() => {}}
    />
));
