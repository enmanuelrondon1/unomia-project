export const BlogList = ({ categories, filterCategory }) => {
  return (
    <>
      <div className="categories">
        {categories.map((category) => (
          <button
            className="btn-category"
            type="button"
            key={category}
            onClick={() => filterCategory(category)}
          >

            {category}
          </button>
        ))}
      </div>
    </>
  );
};
