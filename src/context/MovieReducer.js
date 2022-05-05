import cloneDeep from 'lodash/cloneDeep';
import { movieData } from '../mock_data';

export const actions = {
  TO_EDIT: 'TO_EDIT',
  TO_ADD: 'TO_ADD',
  TO_DELETE: 'TO_DELETE',
  OPEN_DESCRIPTION: 'OPEN_DESCRIPTION',
  CLOSE_DESCRIPTION: 'CLOSE_DESCRIPTION'
};

export const initialState = {
  triggerDescription: false,
  id: '',
  moviesData: cloneDeep(movieData),
  movieContent: {
    title: '',
    movieType: '',
    id: '',
    image: '',
    year: '',
    rating: '',
    runtime: '',
    description: ''
  }
};

export const ManageMovieReducer = (state, action) => {
  const { type, payload } = action;
  const arrayToModify = cloneDeep(state.moviesData);
  switch (type) {
    case actions.TO_EDIT: {
      return {
        ...state,
        ...{
          moviesData: arrayToModify.map((movie) => {
            if (movie.id === payload.id) {
              return payload;
            }
            return movie;
          })
        }
      };
    }
    case actions.TO_ADD: {
      const generateId = payload?.title?.toLowerCase().substring(0, 3);

      return {
        ...state,
        ...{
          moviesData: [...state.moviesData, { ...payload, id: generateId }]
        }
      };
    }
    case actions.TO_DELETE:
      return {
        ...state,
        ...{ moviesData: arrayToModify.filter(({ id }) => id !== payload) }
      };

    case actions.OPEN_DESCRIPTION: {
      const filteredMovie = arrayToModify.filter(({ id }) => id === payload);
      return {
        ...state,
        ...{ triggerDescription: true },
        ...{ movieContent: filteredMovie?.[0] }
      };
    }
    case actions.CLOSE_DESCRIPTION: {
      return {
        ...state,
        ...{ triggerDescription: !state.triggerDescription }
      };
    }
    default:
      return state;
  }
};
