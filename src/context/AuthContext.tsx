import { createContext, useState, useEffect, ReactNode } from "react";
import { useRouter } from "next/router";
import { jwtDecode } from "jwt-decode";

// Define User Type
interface User {
  id: string;
  firstName: string;
  lastName: string;
}

// Define Context Type
interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  setUser: (user: User | null) => void;
  setIsLoggedIn: (status: boolean) => void;
}

// Create Context with Default Values
export const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoggedIn: false,
  setUser: () => {},
  setIsLoggedIn: () => {},
});

// Define Provider Props
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    // Function to extract and decode token
    const handleToken = (token: string) => {
      try {
        const decoded: User = jwtDecode<User>(token);
        localStorage.setItem("token", token);
        setUser(decoded);
        setIsLoggedIn(true);
      } catch (error) {
        console.error("Invalid token", error);
        localStorage.removeItem("token");
      }
    };

    // Check localStorage for token
    const storedToken = localStorage.getItem("token");
    if (storedToken) handleToken(storedToken);

    // Extract token from URL
    const { token } = router.query;
    if (typeof token === "string") {
      handleToken(token);
      router.replace(router.pathname); // Remove token from URl
    }
  }, [router.query]);

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, setUser, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
