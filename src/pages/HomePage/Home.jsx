import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import PostCard from "../../components/PostCard/PostCard";
import useFetch from "../../hooks/useFetch";

const Home = () => {
  const { posts, isPending, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return (
    <div className="bg-primary flex flex-col gap-20 pb-10 pt-10 h-full">
      <div className="flex flex-row flex-wrap justify-between gap-4 max-h-[750px] overflow-y-scroll">
        {error && <div>{error}</div>}
        {isPending && (
          <div className="flex justify-center items-center w-full h-full">
            Loading...
          </div>
        )}
        {posts && posts.map((post) => <PostCard key={post.id} post={post} />)}
      </div>
    </div>
  );
};

export default Home;
