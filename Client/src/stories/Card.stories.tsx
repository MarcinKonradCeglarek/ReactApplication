import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { withState } from '@dump247/storybook-state';
import { action } from '@storybook/addon-actions';
import { withKnobs, number } from '@storybook/addon-knobs';

import Card from '../components/card';
import Cards from '../components/cards';


interface CardsProps {
    SelectedValue: number | null;
}

storiesOf('Cards', module)
    .addDecorator(withKnobs)
    .add(
        'Card with knobs and store',
        withState({ IsSelected: false })(({ store }) => (
            <Card
                Value={number('Value', 3)}
                IsSelected={store.state.IsSelected}
                onClick={() => {
                    store.set({ IsSelected: !store.state.IsSelected });
                    action('clicked');
                }}
            />
        ))
    )
    .add(
        'Cards with store',
        withState<CardsProps>({ SelectedValue: null })(({ store }) => (
            <Cards SelectedValue={store.state.SelectedValue} onSelect={value => store.set({ SelectedValue: value })}></Cards>
        ))
    );
