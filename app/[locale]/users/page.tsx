import { useTranslations } from "next-intl";

export const dynamic = "force-dynamic";

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export default async function Posts() {
   const t = useTranslations("AboutPage");
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return (
    <div>
      <h1>{t("title")}</h1>
      <ul className="space-y-4 p-4">
        {
            users.map((user: User) => (
                <li key={user.id} className="bg-white p-4 rounded-lg shadow-md text-gray-700">
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <p>{user.phone}</p>
                </li>
            ))
        }

      </ul>
    </div>
  );
}


