import Carousel from "../Carousel/Carousel";
import "./Blog.css";
import blogPosts from "/src/data/blog_posts.js";

export default function Blog() {
  return (
    <section id="blog">
      <h2 id="blog-header">Blog</h2>
      <Carousel params={blogPosts} />
    </section>
  );
}
