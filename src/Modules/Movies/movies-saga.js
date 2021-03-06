import { all, fork, takeEvery, put, call, select } from "redux-saga/effects";
import {
  MOVIE_LOADED,
  setBannerMovie,
  setSuggestionMovie,
  setLatestMovie,
  setLoadingLoaded,
  GET_DETAIL_MOVIE,
  setDetailMovie,
  MOVIE_DISCOVER_LOADED,
  setMovieDiscover
} from "./movies-action";
import { httpGet } from "../../Helper/HttpFetch";
import moment from "moment";

// Load movie when user in home screen
function* __getMovie() {
  try {
    let page = 0;
    const date = moment().format("YYYY-MM-DD");
    const year = moment().format("YYYY");
    while (true) {
      const uriDiscover = "/3/discover/movie?";
      const uriGetBanner = `${uriDiscover}page=${page}&sort_by=popularity.desc&release_date.gte=${date}&year=${year}`;
      const uriGetSuggestion = `${uriDiscover}page=${page}&sort_by=vote_average.desc&release_date.gte=${date}&year=${year}`;
      const uriGetLatest = `${uriDiscover}page=${page}&sort_by=vote_average.desc&release_date.gte=${date}&year=${year}`;

      const [respBanner, respSuggestion, respLatest] = yield all([
        call(httpGet, uriGetBanner),
        call(httpGet, uriGetSuggestion),
        call(httpGet, uriGetLatest)
      ]);

      // Set to state only if receive status 200
      if (respBanner.status === 200) {
        const response = yield call([respBanner, respBanner.json]);
        //Set only max 6 movie
        const max = 0;
        const arr = [];
        for (let i = 0; i < max; i++) {
          if (max > 6) break;
          response.map((item, index) => {
            if (item && item.backdrop_path) {
              arr.push(item);
              max++;
            }
          });
        }
        yield put(setBannerMovie(arr));
      }

      // Set all suggestion
      if (respSuggestion.status === 200) {
        const response = yield call([respSuggestion, respSuggestion.json]);
        yield put(setSuggestionMovie(response.results));
      }

      // Set latest movie
      if (respLatest.status === 200) {
        const response = yield call([respLatest, respLatest.json]);
        yield put(setLatestMovie(response.results));
        yield put(setLoadingLoaded(true));
      }

      page++;
      if (page > 5) {
        break;
      }
    }
  } catch (error) {
    throw error;
  }
}

// Load movie handling when user in home screen
export function* getMovie() {
  yield takeEvery(MOVIE_LOADED, __getMovie);
}

// Get detail movie including video, images, credits and jobs
function* __getDetailMovie(action) {
  try {
    const movieId = action.movieId;
    const uri = `/3/movie/${movieId}?append_to_response=video,images,credits,jobs`;
    const response = yield call(httpGet, uri);
    if (response.status === 200) {
      let json = yield call([response, response.json]);
      json.loaded = true;
      yield put(setDetailMovie(json));
    }
  } catch (error) {
    throw error;
  }
}

// Get detail movie handling when use click watch now
export function* getDetailMovie() {
  yield takeEvery(GET_DETAIL_MOVIE, __getDetailMovie);
}

function* __discoverLoaded() {
  try {
    const year = moment().format("YYYY");
    const uri = `/3/discover/movie?page=1&sort_by=popularity.desc&year=${year}`;
    const response = yield call(httpGet, uri);
    if (response.status === 200) {
      let json = yield call([response, response.json]);
      yield put(setMovieDiscover(json.results));
    }
  } catch (error) {
    throw error;
  }
}

// Get movie list from discover api
export function* discoverLoaded() {
  yield takeEvery(MOVIE_DISCOVER_LOADED, __discoverLoaded);
}

export default function* rootSaga() {
  yield all([fork(getMovie), fork(getDetailMovie), fork(discoverLoaded)]);
}
