interface Props {
  name: string;
  title: string;
  img: string;
  text: string;
}

function ReviewCard({ name, title, img, text }: Props) {
  return (
    <article className="bg-userDarkMagenta md:max-w-1/2 h-full rounded-lg px-6 pb-6 pt-10">
      <header className="flex items-center space-x-6">
        <img src={img} alt="" className="h-10 w-10 rounded-full" />
        <article className="leading-none">
          <p className="font-bold">{name}</p>
          <p className="text-userSoftPink mt-1">{title}</p>
        </article>
      </header>
      <main className="mt-8">
        <p>{text}</p>
      </main>
    </article>
  );
}

export default ReviewCard;
