export const isEmpty = (value: any) =>
	value === undefined ||
	value === null ||
	(typeof value === 'object' && Object.keys(value).length === 0) ||
	(typeof value === 'string' && value.trim().length === 0);

// function to fix number to two decimal places
export const toFixed = (x: number): string => {
	return x.toFixed(2);
};
