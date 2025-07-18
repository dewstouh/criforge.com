import { db } from "@criforge/database";

export default async function IndexPage() {
  const users = await db.user.findMany();

  return (
    <div>
      <h1>Hello World</h1>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  );
}
