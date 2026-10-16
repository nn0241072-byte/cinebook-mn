import {NextRequest,NextResponse} from 'next/server';
import {tmdb} from '../../../lib/tmdb';
export async function GET(req:NextRequest){
 try{const query=(req.nextUrl.searchParams.get('q')||'').trim().slice(0,100);
 const data=query?await tmdb('/search/movie',{query,include_adult:'false'}):await tmdb('/trending/movie/week');
 return NextResponse.json({results:data.results||[]});
 }catch(e){return NextResponse.json({error:e instanceof Error?e.message:'Алдаа гарлаа'}, {status:500})}
}
