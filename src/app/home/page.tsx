import { About, PostList } from "./_components";

const Home = () => {
  return (
    <main className="container flex h-screen gap-8 px-4 py-8">
      <About />
      <PostList />
    </main>
  );
};

export default Home;
