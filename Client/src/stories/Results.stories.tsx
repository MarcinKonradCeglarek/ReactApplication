import React from 'react';
import { storiesOf } from '@storybook/react';
import Result from 'src/Components/Result';
import { UserData } from 'src/Store';
import { boolean } from '@storybook/addon-knobs';

const users: UserData[] = [
    { id: '1', name: '1', vote: null },
    { id: '2', name: '2', vote: 3 },
    { id: '3', name: '3', vote: 5 },
    { id: '4', name: '4', vote: 8 },
];

storiesOf('Results', module).add('4 users, 3 votes: 5.3', () => <Result IsVoteRevealed={boolean('IsVoteRevealed', true)} Users={users} />);
