export const Routes = {
  MAIN: `/`,
  LOGIN: `/login`,
  MY_LIST: `/mylist`,
  FILM: `/films/:id`,
  ADD_REVIEW: `/films/:id/review`,
  PLAYER: `/player/:id`,
};

export const FilmRating = [
  {value: 0, mark: `Bad`},
  {value: 3, mark: `Normal`},
  {value: 5, mark: `Good`},
  {value: 8, mark: `Very good`},
  {value: 10, mark: `Awesome`},
];
