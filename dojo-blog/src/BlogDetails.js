import { useParams } from "react-router-dom";

const BlogDetails = () => {
    const { id, setID } = useParams()

    return ( 
        <div className="blog-details">
            <h2>Blog Details - { id }</h2>
        </div>
     );
}
 
export default BlogDetails;