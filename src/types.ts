export interface PokemonType {
    type: {
      name: string;
    };
}
  
export interface PokemonData {
    name: string;
    height: number;
    weight: number;
    sprites: {
      front_default: string;
    };
    types: PokemonType[];
}
  
export interface PokemonListResponse {
    results: { name: string }[];
    count: number;
}
  
export interface PokemonCardProps {
    id: number;
    name: string;
}
  
export interface PaginationControlsProps {
    page: number;
    total: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    pageSize: number;
}
  
export interface PokemonDetailsTableProps {
  data: PokemonData;
}

export interface PokemonCardProps {
  id: number;
  name: string;
}