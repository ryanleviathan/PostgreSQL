CREATE TABLE albums (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  artist TEXT NOT NULL,
  album_title TEXT NOT NULL,
  year_of INT NOT NULL
);

CREATE TABLE bikes (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  make TEXT NOT NULL,
  model TEXT NOT NULL,
  specialization TEXT NOT NULL
);

CREATE TABLE cars (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  make TEXT NOT NULL,
  model TEXT NOT NULL,
  year_of INT NOT NULL
);

CREATE TABLE houses (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  bedrooms INT NOT NULL,
  bathrooms INT NOT NULL,
  sqr_footage INT NOT NULL
);

CREATE TABLE phones (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  make TEXT NOT NULL,
  model TEXT NOT NULL,
  five_g BOOLEAN NOT NULL
);