export default function Home() {
  return (
    <div className="home">
      <div className="home-media--wrapper">
        <iframe
          className="home-media--content"
          src="https://www.youtube.com/embed/QB5dvHHnSMk?si=H8vYmersBfckFq5m&autoplay=0&mute=1&loop=1&controls=0&color=white&modestbranding=0&rel=0&playsinline=1&enablejsapi=18&playlist=QB5dvHHnSMk"
          title="RoboCup RCAP Pyeongchang 2023"
          allow="autoplay;"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
