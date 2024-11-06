import { Card } from "@/components";

interface PostBriefProps {
  title: string;
  description: string;
  tags: string[];
}

const PostBrief: React.FC<PostBriefProps> = ({ title, description, tags }) => {
  return (
    <Card
      w={981}
      h={280}
      className="hover:bg-dark-blue-selected box-border flex min-h-[280px] min-w-[981px] cursor-pointer flex-col gap-6 px-6 py-8 transition-all"
    >
      <h1 className="font-poppins text-2xl font-medium text-gray-200">
        {title}
      </h1>

      <p className="font-poppins text-sm text-gray-400">{description}</p>
      <div className="flex gap-3">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="text-primary-800 rounded-md bg-primary-100 px-2 py-1 text-sm font-bold transition-all hover:bg-primary-400 hover:text-white"
          >
            {tag}
          </div>
        ))}
      </div>
    </Card>
  );
};

export default PostBrief;
