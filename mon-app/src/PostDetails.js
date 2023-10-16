import { useParams } from "react-router-dom";
import { useContext } from "react";
import { postsContext } from "./contexts/postsContext";

export default function PostDetails() {
  const posts = useContext(postsContext);
  console.log(posts);
  const { postId } = useParams();
  const post = posts.find((p) => {
    return p.id == postId;
  });
  console.log(post);
  if (post) {
    return (
      <>
        <h1>Post Destracter page</h1>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </>
    );
  } else {
    return (
      <>
        <h1>The post with id:{postId} is not fond</h1>
      </>
    );
  }
}
