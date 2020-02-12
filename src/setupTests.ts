import '@testing-library/jest-dom/extend-expect';

export const waitForTime = (waitFor = 0) => new Promise((resolve) => setTimeout(resolve, waitFor));

HTMLCanvasElement.prototype.getContext = jest.fn();
