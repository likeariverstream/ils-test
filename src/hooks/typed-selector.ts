import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { SelectEffect, select } from 'redux-saga/effects';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export function* appSelector<T>(selector: (state: RootState) => T): Generator<SelectEffect, T, T> {
	return yield select(selector);
}
