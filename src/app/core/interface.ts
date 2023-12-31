export interface Providers {
  games: Slots[];
  iframeH: number;
  iframeW: number;
  name: string;
  order: number;
  provider: string;
  tags: [];
  totalGames: number;
  type: string;
  vendor: string;
}

export interface SlotsResponse {
  data : Slots[]
}
export interface Slots {
  gameId: string;
  game_id: number;
  image: string;
  image2: string;
  imageSet: {};
  name: string;
  order: number;
  provider: string;
  providerName: string;
  stats: [];
  tags: [];
  url: string;
}

export interface ProviderResponse {
  data: Providers[];
}

export interface SlotsByProvider {
  games: Slots[];
  iframeH: number;
  iframeW: number;
  name: string;
  order: number;
  provider: string;
  tags: [string];
  totalGames: number;
  type: string;
  vendor: string;
}
