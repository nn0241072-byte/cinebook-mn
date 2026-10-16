# Cinebook MN (Letterboxd-ээс санаа авсан MVP)

## Ажиллуулах
1. Node.js 20.9+ суулгана.
2. Энэ хавтас дотор terminal нээнэ.
3. `npm install`
4. `.env.example` файлыг `.env.local` нэрээр хуулж, TMDB API Read Access Token оруулна. Token: https://www.themoviedb.org/settings/api
5. `npm run dev`
6. http://localhost:3000 хаяг нээнэ.

## Юу ажиллах вэ?
- TMDB-ийн долоо хоногийн тренд кино
- Киноны хайлт
- Кино бүрийн дэлгэрэнгүй мэдээлэл
- 1–5 одны үнэлгээ, үзсэн тэмдэглэгээ, үзэх жагсаалт, хувийн review
- Браузерын localStorage-д хадгална (өөр төхөөрөмж рүү sync хийхгүй)

## Дараагийн хөгжүүлэлт
Supabase Auth + Postgres ашиглан хэрэглэгчийн аккаунт, бусдад харагдах review, follow, likes нэмнэ. Server дээр TMDB токеныг хадгалах бөгөөд NEXT_PUBLIC_ гэж нэрлэхгүй.

TMDB attribution: This product uses the TMDB API but is not endorsed or certified by TMDB. Public launch хийхээс өмнө TMDB-ийн attribution/logo болон license дүрмийг нэмж шалга.
