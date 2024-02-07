import { useQuery } from "react-query";
import { getUserById } from "../services/apiGitHub";

export function useUserById({ id }: { id: number }) {
  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["users", id],
    queryFn: () => getUserById(id),
  });
  return { user, isLoading, error };
}
