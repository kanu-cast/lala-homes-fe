import { useRouter } from "next/router";

const Logout = () => {
  const router = useRouter();

  const handleLogout = () => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/logout`, {
      method: "POST",
      credentials: "include",
    }).then(() => {
      router.push("/");
    });
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
