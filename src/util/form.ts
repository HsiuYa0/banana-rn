import React, { useState, RefObject, createRef } from 'react';
import {
	FormTextInput,
	FormImageInput,
} from '@elements';
import { Checkbox } from 'react-native-paper';
import {
	View,
	TextInput,
	Text,
	StyleProp,
	TextStyle,
	TextInputProps,
} from 'react-native';


export const focusHolder = (arr: string[]) => {
	//const array = arr;
	const inputRefs: { [key: string]: RefObject<TextInput> } = {};
	arr.forEach(function(value){
		inputRefs[value] = createRef();
	});
	const [ focusNum, setFocusNum ] = useState(1);
	const focusNextField = () => {
		setFocusNum(focusNum+1); 
		//console.log(focusNum, arr[focusNum]); 
		inputRefs[arr[focusNum]].current?.focus();
	}
	return { inputRefs, focusNextField };
}