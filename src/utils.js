import {FilmRating} from './const';

export const transformFilmObject = (film) => {
  return {
    name: film.name,
    posterImage: film.poster_image,
    previewImage: film.preview_image,
    backgroundImage: film.background_image,
    backgroundColor: film.background_color,
    description: film.description,
    rating: film.rating,
    scoresCount: film.scores_count,
    director: film.director,
    starring: film.starring,
    runTime: film.run_time,
    genre: film.genre,
    released: film.released,
    id: film.id,
    isFavorite: film.is_favorite,
    videoLink: film.video_link,
    previewVideoLink: film.preview_video_link,
  };
};

export const getFilmRating = (value) => {
  let rating = ``;
  FilmRating.forEach((item) => {
    if (value >= item.value) {
      rating = item.mark;
    }
  });
  return rating;
};
