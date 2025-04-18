import Recipe from "./Recipe";

function Menu({ title, recipes }) {
  return (
    <>
      <article>
        <header>
          <h1>{title}</h1>
        </header>
        <div className="recipes">
          {recipes.map(() => (
            <Recipe key={i} {...recipe} />
          ))}
        </div>
      </article>
    </>
  );
}

export default Menu;
