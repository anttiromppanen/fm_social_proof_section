import starIcon from "../assets/images/icon-star.svg";

function Review({ text }: { text: string }) {
  return (
    <article
      className="
        bg-userLightGrayishMagenta flex flex-col space-y-4 rounded-lg py-4 lg:max-w-md
          lg:flex-row lg:px-8 lg:py-1"
    >
      <div className="flex items-center justify-center space-x-2">
        <img src={starIcon} alt="star" />
        <img src={starIcon} alt="star" />
        <img src={starIcon} alt="star" />
        <img src={starIcon} alt="star" />
        <img src={starIcon} alt="star" />
      </div>
      <p className="text-userDarkMagenta text-lg font-bold leading-none lg:ml-6 lg:pb-3">
        {text}
      </p>
    </article>
  );
}

export default Review;
