export interface Providers {
  iframeH: number;
  iframeW: number;
  name: string;
  order: number;
  provider: string;
  tags: string[];
  totalGames: number;
  type: string;
  vendor: string;
  _id: string;
}

export interface SlotsResponse {
  data: SlotsByProvider;
}
export interface Slots {
  gameId: string;
  game_id: number;
  image: string;
  image2: string;
  imageSet: {
    blurhash: string;
    original: string;
    webp: string;
  };
  name: string;
  order: number;
  provider: string;
  providerName: string;
  stats:any[];
  tags:any[];
  url: string;
}

export interface ProviderResponse {
  data: Providers[];
}

export interface SlotsByProvider extends Providers {
  games: Slots[];
}
