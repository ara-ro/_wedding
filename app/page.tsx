import { SectionNav } from "@/components/invitation/section-nav";

export default function Home() {
  return (
    <main className="relative mx-auto min-h-screen max-w-lg pb-24">
      {/* 메인 / 커버 */}
      <section
        id="cover"
        className="flex min-h-[70vh] flex-col items-center justify-center px-6 py-16"
      >
        <p className="text-sm tracking-[0.3em] text-stone-500">WEDDING INVITATION</p>
        <h1 className="mt-4 font-serif text-2xl tracking-wide text-stone-800 sm:text-3xl">
          홍길동 · 김영희
        </h1>
        <p className="mt-6 text-center text-sm leading-relaxed text-stone-600">
          2026년 3월 15일 일요일
          <br />
          오후 2시
        </p>
      </section>

      {/* 소개 */}
      <section
        id="intro"
        className="border-t border-stone-200 bg-white px-6 py-14"
      >
        <h2 className="text-center font-serif text-lg text-stone-800">두 사람을 소개합니다</h2>
        <div className="mt-8 flex flex-col gap-10 sm:flex-row sm:justify-center sm:gap-16">
          <div className="text-center">
            <div className="mx-auto h-24 w-24 rounded-full bg-stone-200" aria-hidden />
            <p className="mt-3 font-medium text-stone-800">홍길동</p>
            <p className="mt-1 text-sm text-stone-500">신랑</p>
          </div>
          <div className="flex items-center justify-center text-stone-300" aria-hidden>
            <span className="text-2xl">♥</span>
          </div>
          <div className="text-center">
            <div className="mx-auto h-24 w-24 rounded-full bg-stone-200" aria-hidden />
            <p className="mt-3 font-medium text-stone-800">김영희</p>
            <p className="mt-1 text-sm text-stone-500">신부</p>
          </div>
        </div>
      </section>

      {/* 일시·장소 */}
      <section
        id="when-where"
        className="border-t border-stone-200 px-6 py-14"
      >
        <h2 className="text-center font-serif text-lg text-stone-800">일시와 장소</h2>
        <div className="mt-8 space-y-6 text-center text-stone-600">
          <p className="text-sm">
            <strong className="text-stone-800">2026년 3월 15일 (일) 오후 2시</strong>
          </p>
          <p>
            ○○웨딩컨벤션 3층 그랜드볼룸
            <br />
            <span className="text-sm">서울시 강남구 ○○로 123</span>
          </p>
        </div>
      </section>

      {/* 갤러리 */}
      <section
        id="gallery"
        className="border-t border-stone-200 bg-white px-6 py-14"
      >
        <h2 className="text-center font-serif text-lg text-stone-800">갤러리</h2>
        <div className="mt-8 grid grid-cols-2 gap-3">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="aspect-square rounded-lg bg-stone-200"
              aria-hidden
            />
          ))}
        </div>
      </section>

      {/* 방명록 */}
      <section
        id="guestbook"
        className="border-t border-stone-200 px-6 py-14"
      >
        <h2 className="text-center font-serif text-lg text-stone-800">방명록</h2>
        <p className="mt-6 text-center text-sm text-stone-500">
          축하 메시지를 남겨주세요. (준비 중)
        </p>
      </section>

      {/* 오시는 길 */}
      <section
        id="directions"
        className="border-t border-stone-200 bg-white px-6 py-14"
      >
        <h2 className="text-center font-serif text-lg text-stone-800">오시는 길</h2>
        <div className="mt-8 aspect-video rounded-lg bg-stone-200" aria-hidden />
        <p className="mt-4 text-center text-sm text-stone-600">
          지하철 2호선 ○○역 5번 출구 도보 5분
        </p>
      </section>

      <SectionNav />
    </main>
  );
}
