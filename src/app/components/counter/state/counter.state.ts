export interface CounterState {
  counter: number;
  channelName: string;
}

export const initiallState: CounterState = {
  counter: 0,
  channelName: 'test'
};
