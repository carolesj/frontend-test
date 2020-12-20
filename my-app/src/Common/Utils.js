const getThumbnail = (thumbnailInfo) => (
  `${thumbnailInfo?.path}.${thumbnailInfo?.extension}`
);

const parseHeroes = (heroes=[]) => (
  heroes.reduce((acc, hero)=> ({
    ...acc,
    [hero.id]: {
      id: hero.id,
      thumbnail: getThumbnail(hero.thumbnail),
      name: hero.name,
    }
  }), {})
);

const parseComics = (comics=[]) => (
  comics.reduce((acc, comic)=> ({
    ...acc,
    [comic.id]: {
      id: comic.id,
      thumbnail: getThumbnail(comic.thumbnail),
      title: comic.title
    }
  }), {})
);

export {parseHeroes, parseComics};