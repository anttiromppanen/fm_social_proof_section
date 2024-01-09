import ReviewCards from "./components/ReviewCards/ReviewCards";
import HeroReviews from "./components/HeroReviews";
import HeroText from "./components/HeroText";

function App() {
  return (
    <main
      className="
      h-[100dvh] bg-no-repeat
      [background-image:url('/bg-pattern-top-mobile.svg')] [background-position:top]
      md:h-screen
      md:[background-image:url('/bg-pattern-top-desktop.svg'),url('/bg-pattern-bottom-desktop.svg')]
      md:[background-position:top_left,bottom_right]"
    >
      <section className="mx-auto w-full max-w-7xl space-y-10 px-6 py-20 text-center lg:space-y-20 lg:py-36 lg:text-left">
        <section className="flex flex-col lg:flex-row">
          <HeroText />
          <HeroReviews />
        </section>
        <ReviewCards />
      </section>
    </main>
  );
}

export default App;
