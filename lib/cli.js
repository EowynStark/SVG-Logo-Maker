// required files and packages
const fs = require('fs/promises');
const inquirer = require('inquirer');
const SVG = require('./svg.js');
const {Circle, Triangle, Square } = require('./shapes.js');
const { writeFile } = require('fs');

// creates inquirer prompt to gather information from user
class CLI {
    run() {
        return inquirer
        .createPromptModule([
            {
                name: 'text',
                type: 'input',
                message: 'Enter the text for your logo. Must be no more than 3 characters long.',
                validate: (text) => text.length <= 3 || 'The text must not contain more than 3 characters',
            },
            {
                name: 'textColor',
                type: 'input',
                message: 'Enter a color for your text',
            },
            {
                name: 'shapeType',
                type: 'list',
                message: 'Select a shape for your logo',
                choices: ['circle', 'square', 'triangle'],
            },
            {
                name: 'shapeColor',
                type: 'input',
                message: 'Enter a color for your shape'
            }
        ])
        // based on choices switch cases handles shapes
        .then(({ text, textColor, shapeType, shapeColor }) =>{
            let shape;
            switch (shapeType){
                case 'circle':
                    shape = new Circle();
                    break;
                case 'square':
                    shape = new Square();
                    break;
                default:
                    shape = new Triangle();
                    break;
            }
            shape.setColor(shapeColor);
            const svg = new SVG();
            svg.setText(text, textColor);
            svg.setShape(shape);
            return writeFile('logo.svg', svg.render());
        })
        .then(() => {
            console.log('New Logo.svg Generated!');
        })
        .catch((error) => {
            console.log(error);
            console.log('Oh No! Something went wrong! Try again later');
        });
    }
}

module.exports = CLI;