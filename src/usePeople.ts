import * as React from 'react'

export interface People {
  generatedAt: string;
  counts: {
    count: number;
    description: string;
    query: string;
    title: string;
  }[];
}

export interface PeopleState {
  people?: People;
  isLoading: boolean;
  error?: Error;
}

const PEOPLE_SOURCE = `${process.env.REACT_APP_PEOPLE_SOURCE}`;

export const usePeople = (): PeopleState => {
  const [state, setState] = React.useState<PeopleState>({isLoading: false});

  React.useEffect(() => {(
    async () => {
      setState({isLoading: true});
      try {
        const response = await fetch(PEOPLE_SOURCE);
        if(response.status !== 200) {
            throw new Error('Error response from API.');
        }
        setState({isLoading: false, people: await response.json()});
      } catch(error) {
        setState({isLoading: false, error});
      }
    }
  )();}, [setState]);

  return state;
}

export default usePeople;
