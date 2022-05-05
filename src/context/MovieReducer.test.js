import { actions, initialState, ManageMovieReducer } from './MovieReducer';

const { TO_ADD, TO_DELETE } = actions;

describe('Reducer Function test', () => {
  it('should add a new move when TO_ADD is dispatched', () => {});
  const action = {
    type: TO_ADD,
    payload: {
      title: 'lala land',
      movieType: ' Adventure',
      image: '',
      year: '2017',
      rating: '9.8',
      runtime: '1h 47min',
      description:
        "Moana Waialiki is a sea voyaging enthusiast and the only daughter of a chief in a long line of navigators. When her island's fishermen can't catch any fish and the crops fail, she learns that the demigod Maui caused the blight by stealing the heart of the goddess, Te Fiti. The only way to heal the island is to persuade Maui to return Te Fiti's heart, so Moana sets off on an epic journey across the Pacific. The film is based on stories from Polynesian mythology."
    }
  };
  const updatedState = ManageMovieReducer(initialState, action);

  expect(updatedState.moviesData).toEqual(
    expect.arrayContaining([expect.objectContaining(action.payload)])
  );
  it('should remove move when TO_DELETE is dispatched ', () => {
    const actionToDelete = {
      type: TO_DELETE,
      payload: {
        id: 'pul1'
      }
    };
    const updatedState2 = ManageMovieReducer(initialState, actionToDelete);
    expect(updatedState2.moviesData).not.toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          title: 'Pulp Fiction',
          movieType: 'Action & Adventure',
          id: 'pul1',
          image: 'pmovie',
          year: '1996',
          rating: '9.8',
          runtime: '1h 47min',
          description:
            "Moana Waialiki is a sea voyaging enthusiast and the only daughter of a chief in a long line of navigators. When her island's fishermen can't catch any fish and the crops fail, she learns that the demigod Maui caused the blight by stealing the heart of the goddess, Te Fiti. The only way to heal the island is to persuade Maui to return Te Fiti's heart, so Moana sets off on an epic journey across the Pacific. The film is based on stories from Polynesian mythology."
        })
      ])
    );
  });
});
