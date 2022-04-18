import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Checkbox } from '../components';
import nftImg from '../assets/static/nft-1.png';

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => {
    const [checked, setChecked] = useState(args.checked);
    return <Checkbox {...args} checked={checked} onChange={setChecked} />;
};

export const Default = Template.bind({});

Default.args = {
    label: 'Label',
    size: 's',
};

Default.storyName = 'Default';

export const Checked = Template.bind({});

Checked.args = {
    label: 'Label',
    checked: true,
};

Checked.storyName = 'Default w/ checked';

export const Disable = Template.bind({});

Disable.args = {
    label: 'Label',
    checked: true,
    disabled: true,
};

Disable.storyName = 'Default w/ disable';

export const IconStatic: ComponentStory<typeof Checkbox> = (args) => {
    const [checked, setChecked] = useState(args.checked);
    return (
        <div style={{ width: '150px' }}>
            <Checkbox {...args} checked={checked} onChange={setChecked} />
        </div>
    );
};

IconStatic.args = {
    label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    checked: true,
    iconLeft: {
        size: 22,
        file: nftImg,
    },
};

IconStatic.storyName = 'Default w/ icon static';

export const IconSvg = Template.bind({});

IconSvg.args = {
    label: 'Icon checkbox',
    checked: true,
    iconRight: {
        size: 15,
        name: 'badge-nft',
    },
};

IconSvg.storyName = 'Default w/ icon svg';

export const SizeSmall = Template.bind({});

SizeSmall.args = {
    label: 'Checkbox small',
    checked: true,
    size: 's',
};

SizeSmall.storyName = 'Default w/ size small';

export const SizeMiddle = Template.bind({});

SizeMiddle.args = {
    label: 'Checkbox middle',
    checked: true,
    size: 'm',
};

SizeMiddle.storyName = 'Default w/ size middle';
