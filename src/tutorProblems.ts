import axios from 'axios';
import MockAxios from 'axios-mock-adapter';

let mock = new MockAxios(axios);
mock.onGet('/problems').reply(200, {
    className: 'CS101',
    assignments: [
        {
            functionName: 'product',
            language: 'Java',
            problem: 'Multiply two number and return the result',
            inputs: [{
                inputName: 'num1',
                inputType: 'int',
                inputValue: 2
            },
            {
                inputName: 'num2',
                inputType: 'int',
                inputValue: 3
            }],
            outputs: [{
                outputType: 'int',
                outputValue: 6
            }]
        },
        {
            functionName: 'sum',
            language: 'Java',
            problem: 'Add two numbers and return the result',
            inputs: [{
                inputName: 'num1',
                inputType: 'int',
                inputValue: 2
            },
            {
                inputName: 'num2',
                inputType: 'int',
                inputValue: 3
            }],
            outputs: [{
                outputType: 'int',
                outputValue: 5
            }]
        }
    ]
})
export class TutorProblems {

    getProblems = async () => {
        const response = await axios.get('/problems')
        if(!response.data) return [];
        return response.data;
    }
}
