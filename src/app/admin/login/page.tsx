import { prisma } from "lib/prisma";

function LocalStrategy() {
  return (
    <>
      <div className="mt-3">
        <label className="block text-gray-700" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="text"
          placeholder="Email"
          className="w-full py-2 px-3 text-gray-700 leading-tight shadow appearance-none border rounded focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mt-3">
        <label className="block text-gray-700" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="Password"
          className="w-full py-2 px-3 text-gray-700 leading-tight shadow appearance-none border rounded focus:outline-none focus:shadow-outline"
        />
      </div>
    </>
  );
}

export default async function AdminLoginPage() {
  const strategies = await prisma.adminAuthStrategy.findMany();

  if (strategies.length === 0) {
    strategies.push({ id: "", name: "Local", type: "LOCAL", config: null });
  }

  const hasLocalStrategy = strategies.find((s) => s.type === "LOCAL");
  const otherStrategies = strategies.filter((s) => s.type !== "LOCAL");

  return (
    <div className="w-full max-w-lg rounded-xl shadow-xl">
      <h1 className="text-2xl font-bold">Login to Editorial</h1>
      {hasLocalStrategy && <LocalStrategy />}
      {otherStrategies.map((strategy) => (
        <button key={strategy.id}>{strategy.name}</button>
      ))}
    </div>
  );
}
