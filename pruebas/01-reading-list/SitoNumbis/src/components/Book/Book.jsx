import PropTypes from "prop-types";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";

// styles
import styles from "./styles.module.css";

function Book({ title, pages, genre, cover, synopsis, year, ISBN, author }) {
  const { languageState } = useLanguage();

  return (
    <article className="w-full relative">
      <img
        className="w-full h-full object-cover object-center shadow-[black] shadow-md transition"
        src={cover}
        alt={`${title}-${languageState.texts.book.cover}`}
      />
      <div
        role="info"
        className="absolute top-0 left-0 w-full h-full bg-dark-alt-bg-opacity opacity-0 transition hover:opacity-100 flex flex-col justify-between items-start p-3"
      >
        <div className="">
          <p className="text-dark-text">{title}</p>
          <p className="text-dark-alt-text">
            {genre} ({pages}) {languageState.texts.book.pages}
          </p>
          <p className="text-dark-text mt-2">
            {author.name} <span className="text-dark-alt-text">({year})</span>
          </p>
        </div>
        <button className="cta">{languageState.texts.book.add}</button>
      </div>
    </article>
  );
}

Book.propTypes = {
  title: PropTypes.string,
  pages: PropTypes.number,
  genre: PropTypes.string,
  cover: PropTypes.string,
  synopsis: PropTypes.string,
  year: PropTypes.number,
  ISBN: PropTypes.string,
  author: PropTypes.shape({
    name: PropTypes.string,
    otherBooks: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default Book;