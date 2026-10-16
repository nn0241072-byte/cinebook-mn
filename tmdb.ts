import type {Movie} from './types';
export async function tmdb(path:string,params:Record<string,string>={}){
 const token=process.env.TMDB_READ_ACCESS_TOKEN;
 if(!token||token.includes('PASTE_YOUR')) throw new Error('TMDB_READ_ACCESS_TOKEN тохируулаагүй байна. .env.local файлаа шалгана уу.');
 const url=new URL('https://api.themoviedb.org/3'+path);
 Object.entries({language:'en-US',...params}).forEach(([key,value])=>url.searchParams.set(key,value));
 const response=await fetch(url,{headers:{Authorization:`Bearer ${token}`,accept:'application/json'},next:{revalidate:3600}});
 if(!response.ok)throw new Error(`TMDB API алдаа: ${response.status}`);
 return response.json() as Promise<{results?:Movie[]}&Movie>;
}
