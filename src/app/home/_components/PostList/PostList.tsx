import { Card } from "@/components";
import { Post } from "../../_interfaces";
import PostBrief from "../PostBrief/PostBrief";

const PostList = () => {
  const dummyData: Post[] = [
    {
      title: "Javascript e o maldito Event-loop...",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et justo libero. In dapibus semper ipsum, at malesuada lacus tristique feugiat. Mauris eu dolor sem. Morbi ante mi, congue at varius vel, varius eu quam. Cras porttitor ornare mauris, sed malesuada diam convallis non. Etiam vel dolor ante. Pellentesque feugiat augue a molestie lacinia. Fusce rutrum est quis diam hendrerit, nec volutpat lectus pellentesque. Donec congue sem eleifend tortor convallis, id sollicitudin lectus venenatis.",
      tags: ["Javascript", "Typescript"],
    },
    {
      title: "Javascript e o maldito Event-loop...",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et justo libero. In dapibus semper ipsum, at malesuada lacus tristique feugiat. Mauris eu dolor sem. Morbi ante mi, congue at varius vel, varius eu quam. Cras porttitor ornare mauris, sed malesuada diam convallis non. Etiam vel dolor ante. Pellentesque feugiat augue a molestie lacinia. Fusce rutrum est quis diam hendrerit, nec volutpat lectus pellentesque. Donec congue sem eleifend tortor convallis, id sollicitudin lectus venenatis.",
      tags: ["Javascript", "Typescript"],
    },
    {
      title: "Javascript e o maldito Event-loop...",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et justo libero. In dapibus semper ipsum, at malesuada lacus tristique feugiat. Mauris eu dolor sem. Morbi ante mi, congue at varius vel, varius eu quam. Cras porttitor ornare mauris, sed malesuada diam convallis non. Etiam vel dolor ante. Pellentesque feugiat augue a molestie lacinia. Fusce rutrum est quis diam hendrerit, nec volutpat lectus pellentesque. Donec congue sem eleifend tortor convallis, id sollicitudin lectus venenatis.",
      tags: ["Javascript", "Typescript"],
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      <Card h={111} w={981} className="flex items-center justify-center p-6">
        <h1 className="from-secundary-100 bg-gradient-to-r to-primary-400 bg-clip-text text-5xl font-bold text-transparent">
          Devbox
        </h1>
      </Card>
      <div className="no-scrollbar flex flex-col gap-5 overflow-auto">
        {dummyData.map(({ description, tags, title }, index) => (
          <PostBrief
            key={index}
            title={title}
            description={description}
            tags={tags}
          />
        ))}
      </div>
    </div>
  );
};

export default PostList;
