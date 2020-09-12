import { CHANGE_TEXT } from '../constants';

export function changeText(text) {
    console.log("changeText", text)
    return {
        type: CHANGE_TEXT,
        text
    }
};