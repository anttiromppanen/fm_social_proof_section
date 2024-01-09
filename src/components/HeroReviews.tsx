import Review from "./Review";

function HeroReview() {
  return (
    <section className="mt-10 space-y-4 lg:w-1/2 lg:[&>*:nth-child(2)]:ml-10 lg:[&>*:nth-child(3)]:ml-20">
      <Review text="Rated 5 Stars in Reviews" />
      <Review text="Rated 5 Stars in Report Guru" />
      <Review text="Rated 5 Stars in BestTech" />
    </section>
  );
}

export default HeroReview;
