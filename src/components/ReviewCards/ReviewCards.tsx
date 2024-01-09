import ReviewCard from "./ReviewCard";
import anneImg from "../../assets/images/image-anne.jpg";
import coltonImg from "../../assets/images/image-colton.jpg";
import ireneImg from "../../assets/images/image-irene.jpg";

interface Person {
  name: string;
  title: string;
  img: string;
  text: string;
}

const persons: Person[] = [
  {
    name: "Colton Smith",
    title: "Verified Buyer",
    img: coltonImg,
    text: `
      " We needed the same printed design as the one we had ordered a
      week prior. Not only did they find the original order, but we also
      received it in time. Excellent! "
    `,
  },
  {
    name: "Irene Roberts",
    title: "Verified Buyer",
    img: ireneImg,
    text: `
      " Customer service is always excellent and very quick turn around. Completely
      delighted with the simplicity of the purchase and the speed of delivery. "
    `,
  },
  {
    name: "Anne Wallace",
    title: "Verified Buyer",
    img: anneImg,
    text: `
    " Put an order with this company and can only praise them for the very high
    standard. Will definitely use them again and recommend them to everyone! "
    `,
  },
];

function ReviewCards() {
  return (
    <section
      className="
      auto-rows-[1fr] grid-cols-3 items-baseline gap-x-8 space-y-4 text-left font-medium text-white lg:grid
      lg:[&>*:nth-child(2)]:translate-y-4 lg:[&>*:nth-child(3)]:translate-y-8
      "
    >
      {persons.map((x) => (
        <ReviewCard
          key={x.name}
          name={x.name}
          title={x.title}
          img={x.img}
          text={x.text}
        />
      ))}
    </section>
  );
}

export default ReviewCards;
