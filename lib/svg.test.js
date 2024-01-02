const SVG = require('./svg.js');
const {Circle, Triangle, Square } = require('./shapes.js');

test('should render a 300 x 200 svg element', () => {
    const expectedSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>`;
    const svg = new SVG();
    expectedSvg(svg.render()).toEqual(expectedSvg);
});

test('should add to text element', () => {
    const expectedSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">A</text></svg>`;
    const svg = new SVG();
    svg.setText('A', 'white');
    expect(svg.render()).toEqual(expectedSvg);
});

test('should add text color and message', () => {
    const expectedSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="#333">SVG</text></svg>`;
    const svg = new SVG();
    svg.setText('SVG', '#333');
    expect(svg.render()).toEqual(expectedSvg);
});

test('should read as an error if text is too long', () => {
    const expectedError = new Error('Text must not have more than 3 characters');
    const svg = new SVG();
    expect(()=> svg.setText('Hello', '#333')).toThrow(expectedError);
});