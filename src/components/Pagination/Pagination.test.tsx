import { fireEvent, render, screen } from '@testing-library/react';
import Pagination from './Pagination';

it('size 3 prop check', () => {
    render(<Pagination size={3} />);
});

it('size 10000 prop check', () => {
    render(<Pagination size={10000} perPage={10} current={0} visible={15} />);
    expect(screen.getByText(/1000/i)).toBeTruthy();
});

it('current prop check', () => {
    render(<Pagination size={1000} perPage={10} current={66} />);
    expect(screen.getByText(/66/i)).toBeTruthy();
});

it('visible prop check', () => {
    render(<Pagination visible={2} current={3} />);
});

it('click arrow check', () => {
    const { container } = render(<Pagination size={100} withIcons />);
    const items = container.querySelectorAll('.page-item');
    expect(items[1].classList.contains('active')).toBeTruthy();
    expect(items[2].classList.contains('active')).toBeFalsy();

    fireEvent.click(items[items.length - 1]);
    expect(items[1].classList.contains('active')).toBeFalsy();
    expect(items[2].classList.contains('active')).toBeTruthy();

    fireEvent.click(items[0]);
    expect(items[1].classList.contains('active')).toBeTruthy();
    expect(items[2].classList.contains('active')).toBeFalsy();
});

it('click middle page check', () => {
    const { container } = render(<Pagination size={1000} withIcons={false} />);
    const items = container.querySelectorAll('.page-item');
    fireEvent.click(items[3]);
    expect(items[3].classList.contains('active')).toBeTruthy();
    fireEvent.click(items[items.length - 1]);
    fireEvent.click(items[0]);
});

it('click last page check', () => {
    const { container } = render(<Pagination size={1000} withIcons={false} />);
    const items = container.querySelectorAll('.page-item');
    fireEvent.click(items[items.length - 1]);
});

it('click first page check', () => {
    const { container } = render(
        <Pagination size={1000} current={100} withIcons={false} />
    );
    const items = container.querySelectorAll('.page-item');
    fireEvent.click(items[0]);
});
