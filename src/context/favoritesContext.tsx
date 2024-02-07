import React, {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  Dispatch,
} from "react";

interface User {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  isFavorit: boolean;
}

interface FavoritesState {
  favList: User[];
}

type FavoritesAction =
  | { type: "ADD_FAVORITE"; payload: User }
  | { type: "REMOVE_FAVORITE"; payload: User };

const FavoritesContext = createContext<
  | {
      favList: User[];
      dispatch: Dispatch<FavoritesAction>;
    }
  | undefined
>(undefined);

const initialState: FavoritesState = {
  favList: [],
};

function reducer(
  state: FavoritesState,
  action: FavoritesAction
): FavoritesState {
  switch (action.type) {
    case "ADD_FAVORITE":
      return { ...state, favList: [...state.favList, action.payload] };
    case "REMOVE_FAVORITE":
      return {
        ...state,
        favList: state.favList.filter(
          (user) => user.login !== action.payload.login
        ),
      };
    default:
      throw new Error("Unknown Action!");
  }
}

export default function FavoritesProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [{ favList }, dispatch] = useReducer(reducer, initialState);

  return (
    <FavoritesContext.Provider value={{ favList, dispatch }}>
      {children}
    </FavoritesContext.Provider>
  );
}

function useFavorites() {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error("Context was used outside Provider");
  }

  return context;
}

export { FavoritesProvider, useFavorites };
