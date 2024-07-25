import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "an." },
    { name: "description", content: "an. personal website" },
  ];
};

interface HomeBoxProps {
  children: React.ReactNode;
  className?: string;
}
function HomeBox({ children, className }: HomeBoxProps) {
  return (
    <div
      className={`bg-gray-400 rounded-lg flex items-center justify-center ${className}`}
    >
      {children}
    </div>
  );
}

export default function Index() {
  return (
    <div className="font-sans p-4 bg-gray-200 w-[100vw] h-[100vh] flex flex-row">
      <section className="flex-1 items-stretch flex flex-col">
        <HomeBox className="flex-[2] mb-4">
          <p>Side Box 1</p>
        </HomeBox>
        <HomeBox className="flex-1">
          <p>Side Box 2</p>
        </HomeBox>
      </section>
      <section className="flex-1 items-stretch mx-4">
        <HomeBox className="h-[100%] flex-col">
          <div className="text-center">
            <h1 className="text-xl font-semibold">an. personal website</h1>
            <p>cool things will come</p>
          </div>
        </HomeBox>
      </section>
      <section className="flex-1 items-stretch flex flex-col">
        <HomeBox className="flex-1">
          <p>Side Box 1</p>
        </HomeBox>
        <HomeBox className="flex-[2] mt-4">
          <p>Side Box 2</p>
        </HomeBox>
      </section>
    </div>
  );
}
