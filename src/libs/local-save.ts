const MEMO_STORAGE_KEY = "__local_save_memo";

export type Memo = {
	title: string;
	tags: string[];
	markdown: string;
};

export const getMemo = (): Memo =>
	JSON.parse(localStorage.getItem(MEMO_STORAGE_KEY) ?? null) as Memo;

export const saveMemo = (memo: Memo): void =>
	localStorage.setItem(MEMO_STORAGE_KEY, JSON.stringify(memo));

export const deleteMemo = (): void => localStorage.removeItem(MEMO_STORAGE_KEY);
