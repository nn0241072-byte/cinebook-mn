export type Movie = {id:number;title:string;overview:string;poster_path:string|null;backdrop_path:string|null;release_date:string;vote_average:number};
export type Entry = {movie:Movie; rating:number; watched:boolean; watchlist:boolean; review:string; updatedAt:string};
export const poster=(path:string|null,size='w500')=>path?`https://image.tmdb.org/t/p/${size}${path}`:'';
export const year=(date:string)=>date?.slice(0,4)||'—';
export const storageKey='cinebook-mn-entries-v1';
export function loadEntries():Record<number,Entry>{try{return JSON.parse(localStorage.getItem(storageKey)||'{}')}catch{return {}}}
export function saveEntries(entries:Record<number,Entry>){localStorage.setItem(storageKey,JSON.stringify(entries))}
