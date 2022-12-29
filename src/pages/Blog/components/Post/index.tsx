import { IPost } from "../..";
import { relativeDataFormatter } from "../../../../utils/formatter";
import { PostContainer } from "./styles";

interface PostProps {
  post: IPost;
}

export function Post({ post }: PostProps) {
  const formattedData = relativeDataFormatter(post.created_at);

  return (
    <PostContainer to={`/post/${post.number}`}>
      <div>
        <strong>{post.title}</strong>
        <span>{formattedData}</span>
      </div>
      <p>{post.body}</p>
    </PostContainer>
  );
}
