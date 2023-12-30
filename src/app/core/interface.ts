export interface slotCategoriesInterface {
  games: [string];
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

export interface slotsInterface {
  category: string;
  games: [];
  name: string;
  order: number;
  platform: string;
  totalGames: number;
  type: string;
}

export interface gamesInterface {
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
