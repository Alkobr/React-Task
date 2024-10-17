import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const DetailsPage = () => {
  const { id } = useParams();
  const { posts, isPending, error } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  return (
    <div className="flex flex-col items-center p-10">
      {error && <div className="text-red-500">{error}</div>}
      {isPending && <div className="text-gray-500">Loading...</div>}
      {posts && (
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            {posts.title}
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">{posts.body}</p>
        </div>
      )}
    </div>
  );
};

export default DetailsPage;
