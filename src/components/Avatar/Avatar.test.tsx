import { render } from '@testing-library/react';
import { Avatar } from '..';
import avatar from '../../assets/avatar.jpg';

it('checks size prop', () => {
    render(<Avatar src={avatar} size={10} />);
});

it('checks type prop', () => {
    render(<Avatar src={avatar} type="circle" />);
});
