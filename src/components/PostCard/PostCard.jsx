import { Link } from "react-router-dom";
const PostCard = ({ post }) => {
  return (
    <div className="p-5">
      <Link to={`/details/${post.id}`}>
        <div className="bg-secondary border-gray-900 border h-60 w-[400px] overflow-hidden text-ellipsis flex flex-col gap-10 p-5 rounded-xl text-center ">
          <h1 className="text-black text-xl ">{post.title}</h1>
          <p className="overflow-hidden text-black text-md text-start">
            {post.body}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default PostCard;
