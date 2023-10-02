// This function does not need to be a hook, but for the exercise’s sake, let’s pretend it’s a good hook.
export function useFormattedDate(date = new Date()) {
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed.
	const day = String(date.getDate()).padStart(2, '0');

	return `${year}-${month}-${day}`;
}