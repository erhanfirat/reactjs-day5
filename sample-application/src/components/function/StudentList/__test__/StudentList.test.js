import { render, screen, cleanup, fireEvent, waitFor } from '@testing-library/react';
import StudentList from './../StudentList';
import { store } from './../../../../state/store';
import { Provider } from 'react-redux';
import { act } from 'react-dom/test-utils';


// test("should render StudentList component", () => {
//     render(<StudentList />);
// });

beforeAll(() => {
    jest.useFakeTimers();
})

afterAll(() => {
    jest.useRealTimers()
})


const renderWithProvider = (component) => {
    return { ...render(<Provider store={store}>{component}</Provider>) }
}

test("should render StudentList component 2", () => {
    renderWithProvider(<StudentList />);

    const studentList = screen.getByTestId("StudentList");
    expect(studentList).toBeInTheDocument();

    fireEvent.click(screen.getByText('Load Students'));
    expect(studentList).toHaveTextContent("Loading...");

    act(() => {
        jest.advanceTimersByTime(3000);
        expect(studentList).toHaveTextContent("Zehra");
    });

})

test('test', () => {
    expect(true).toBe(true);
})

