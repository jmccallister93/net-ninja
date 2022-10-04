import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')

  return (
    <div className="home">
        {error && <div>{ error }</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={ blogs } title="All Blogs" />}
    </div>
  );
};

export default Home;

// const [name, setName] = useState("mario");
// useEffect(() => {
//     console.log("effect ran");
//   }, [name]);

// const handleDelete = (id) => {
// const newBlogs = blogs.filter((blog) => blog.id !== id);
// setBlogs(newBlogs);
//   };
// <button onClick={() => setName("luigi")}>change name</button>
{
  /* <p>{name}</p> */
}
