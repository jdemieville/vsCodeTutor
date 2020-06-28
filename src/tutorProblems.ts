import axios from 'axios';
import MockAxios from 'axios-mock-adapter';

let mock = new MockAxios(axios);
mock.onGet('/problems').reply(200, {
    className: 'Coding Clean',
    functionName: 'helloWorld',
    language: 'Java',
    problem: 'Print \'Hello World\'',
    inputs: [{
        inputName: null,
        inputType: null,
        inputValue: null
    }],
    outputs: [{
        outputType: 'string',
        outputValue: 'Hello World'
    }]
})
export class TutorProblems {

    getProblems = async () => {
        const response = await axios.get('/problems')
        if(!response.data) return [];
        return response.data;
    }
}
