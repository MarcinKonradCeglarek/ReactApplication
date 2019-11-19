import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, optionsKnob, boolean } from '@storybook/addon-knobs';
import { OptionsKnobOptions } from '@storybook/addon-knobs/dist/components/types';
import User from '../components/user';

interface UserProps {
    Vote: number | null;
}

const voteValues = {
    '1': 1,
    '2': 2,
    '3': 3,
    '5': 5,
    '8': 8,
    '13': 13,
};
const optionsObj: OptionsKnobOptions = {
    display: 'select',
};

storiesOf('User', module)
    .addDecorator(withKnobs)
    .add('User', () => (
        <User
            Id="SomeId"
            Name="Bob"
            Vote={optionsKnob('Vote', voteValues, 3, optionsObj)}
            IsVoteRevealed={boolean('IsVoteRevealed', false)}
            IsMe={boolean('IsMe', false)}
        />
    ));
