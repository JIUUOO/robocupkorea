import robotNews from "../../../assets/images/logo/robot-news.png";

export default function About() {
  return (
    <div className="about">
      <div className="container">
        <h1 className="text-3xl pb-5">한국로보컵협회를 소개합니다</h1>
        <div className="flex justify-center items-center">
          <iframe
            className="about-video min-w-full aspect-video"
            src="https://www.youtube.com/embed/OoY9wlojwzQ"
            title="국제 로봇월드컵 개막…“2050년 사람과도 경기할 것” / KBS  2023.12.08."
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpplicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="py-3 inline-block">
          <a
            href="https://www.irobotnews.com/news/articleView.html?idxno=34077"
            target="_blank"
            className="flex items-center"
          >
            <img src={robotNews} className="inline h-10 pr-2"></img>
            <span className="text-md font-thin underline underline-offset-2">
              2024 코리아 로보컵 오픈대회 18일 성료
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
