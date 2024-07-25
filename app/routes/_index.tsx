import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "an." },
    { name: "description", content: "an. personal website" },
  ];
};

export default function Index() {
  return (
    <div className="font-sans p-4">
      <h1 className="text-3xl">an. personal website</h1>

      <p>Cool things will come</p>
    </div>
  );
}
