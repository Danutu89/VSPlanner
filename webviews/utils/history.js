import { derived, writable } from "svelte/store";

function createHistory(state) {
	const { subscribe, update } = writable(state ? [state] : []);
	return {
		subscribe,
		push: (state) => update((n) => [...n, state]),
		back: () => update((n) => [...n.slice(0, -1)]),
	};
}

const createdHistory = createHistory({ page: "login" });

export const history = derived(createdHistory, ($createdHistory) => {
	console.log($createdHistory);
	return $createdHistory[$createdHistory.length - 1];
});

export const push = (state) => createdHistory.push(state);
export const back = () => createdHistory.back();
