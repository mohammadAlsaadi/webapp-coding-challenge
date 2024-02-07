import { useQuery } from "react-query";
import { getAllUsers } from "../services/apiGitHub";

export function useUsers() {
  const {
    data: users,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });
  return { users, isLoading, error };
}
