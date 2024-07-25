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
      className={`bg-gray-400 rounded-lg p-4 flex items-center justify-center ${className}`}
    >
      {children}
    </div>
  );
}

export default function Index() {
  return (
    <div className="font-sans p-4 bg-gray-200 w-[100vw] h-[100vh] flex flex-col md:flex-row">
      <section className="flex-1 items-stretch flex flex-row md:flex-col">
        <HomeBox className="flex-[2] mb-0 md:mb-4 mr-4 md:mr-0">
          <p>Coding loop</p>
        </HomeBox>
        <HomeBox className="flex-1">
          <p>Pen spinning loop</p>
        </HomeBox>
      </section>
      <section className="flex-1 items-stretch my-4 md:my-0 mx-0 md:mx-4">
        <HomeBox className="h-[100%] flex-col">
          <div className="text-center">
            <h1 className="text-xl font-semibold mb-2">an. personal website</h1>
            <p>•</p>
            <p>cool things will come</p>
            <p>~waving~</p>
          </div>
        </HomeBox>
      </section>
      <section className="flex-1 items-stretch flex flex-row md:flex-col">
        <HomeBox className="flex-1">
          <p>Dancing loop</p>
        </HomeBox>
        <HomeBox className="flex-[2] mt-0 ml-4 md:ml-0 md:mt-4">
          <p>Walking around loop</p>
        </HomeBox>
      </section>
    </div>
  );
}
