import { Link } from "@mongez/react-router";
import blog_img_1 from "../../../../../shared/assets/images/blogImages/blog_img_1.jpg";
import blog_img_2 from "../../../../../shared/assets/images/blogImages/blog_img_2.jpg";
import blog_img_3 from "../../../../../shared/assets/images/blogImages/blog_img_3.jpg";
import blog_img_4 from "../../../../../shared/assets/images/blogImages/blog_img_4.jpg";
type blogDataProps = {
  id: number;
  tag: string;
  title: string;
  description: string;
  author: string;
  date: string;
  image: string;
};
const blogData: blogDataProps[] = [
  {
    id: 1,
    tag: "Technology",
    title: "The Smartphone Has Just Launched in Mar 2022",
    description:
      "iPad Pro is the fastest device of its kind. It’s designed to take full advantage of next‑level performance and custom technologies like the advanced image signal processor and unified memory architecture of M1. And with the incredible power efficiency of M1.",
    author: "ALO Support",
    date: "Mar 7, 2022",
    image: blog_img_1,
  },
  {
    id: 2,
    tag: "Technology",
    title: "The Smartphone Has Just Launched in Sep 2022",
    description:
      "iPad Pro is the fastest device of its kind. It’s designed to take full advantage of next‑level performance and custom technologies like the advanced image signal processor and unified memory architecture of M1. And with the incredible power efficiency of M1.",
    author: "ALO Support",
    date: "Sep 7, 2022",
    image: blog_img_2,
  },
  {
    id: 3,
    tag: "Technology",
    title: "The Smartphone Has Just Launched in Oct 2023",
    description:
      "iPad Pro is the fastest device of its kind. It’s designed to take full advantage of next‑level performance and custom technologies like the advanced image signal processor and unified memory architecture of M1. And with the incredible power efficiency of M1.",
    author: "ALO Support",
    date: "Oct 7, 2023",
    image: blog_img_3,
  },
  {
    id: 4,
    tag: "Technology",
    title: "The Smartphone Has Just Launched in Mar 2024",
    description:
      "iPad Pro is the fastest device of its kind. It’s designed to take full advantage of next‑level performance and custom technologies like the advanced image signal processor and unified memory architecture of M1. And with the incredible power efficiency of M1.",
    author: "ALO Support",
    date: "Mar 5, 2024",
    image: blog_img_4,
  },
];
function truncateText(text: string, maxLength?: number) {
  if (!maxLength) maxLength = 60;
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
}
const BlogCard = () => {
  return (
    <div className="py-5 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {blogData &&
        blogData.map(blogPost => (
          <div
            className="overflow-hidden group shadow-md rounded"
            key={blogPost.id}>
            <div className="overflow-hidden">
              <img
                src={blogPost.image}
                className="w-full group-hover:scale-110 transition duration-500 linear"
                alt={`${blogPost.title}-${blogPost.id}`}
              />
            </div>
            <div className="bg-white p-6">
              <Link
                to="/blogs/technology"
                className="block text-blue mb-3 text-md uppercase font-bold">
                {blogPost.tag}
              </Link>
              <h3 className="mb-3">
                <Link
                  to={`/blogs/technology/${blogPost.title}`}
                  className="text-primary font-bold text-xl hover:text-blue transition duration-500 linear leading-7">
                  {blogPost.title}
                </Link>
              </h3>
              <p className="text-darkGray uppercase mb-4 text-sm font-semibold">
                Post By {blogPost.author}
              </p>
              <p className="text-[#515d66] text-lg mb-6">
                {truncateText(blogPost.description, 80)}
              </p>
              <div className="flex items-start justify-between pt-5 border-t border-borderLight">
                <Link to="#" className="text-primary font-bold uppercase">
                  Read More
                </Link>
                <span className="text-darkGray">{blogPost.date}</span>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default BlogCard;
