import { QuartzComponent, QuartzComponentConstructor } from "./quartz/components/types"

const styles = `
body {
  background: radial-gradient(circle at 12% 8%, rgba(221, 197, 170, 0.28), transparent 28rem), var(--light);
}

::selection {
  background: var(--textHighlight);
  color: var(--dark);
}

.page {
  max-width: 1500px;
}

.page > #quartz-body {
  column-gap: 2rem;
  row-gap: 1.5rem;
}

.page > #quartz-body .sidebar {
  padding-top: 3.5rem;
}

.page > #quartz-body .sidebar.left {
  padding-left: 2.5rem;
}

.page > #quartz-body .sidebar.right {
  gap: 1rem;
  padding-right: 2.5rem;
}

.page > #quartz-body .center > article {
  background: color-mix(in srgb, var(--light) 92%, white);
  border: 1px solid var(--lightgray);
  border-radius: 28px;
  box-shadow: 0 18px 50px rgba(82, 62, 46, 0.08);
  padding: clamp(1.5rem, 4vw, 4rem);
}

.page-title {
  letter-spacing: -0.04em;
  line-height: 1;
}

.page-title a {
  color: var(--dark);
}

.article-title {
  font-size: clamp(2.5rem, 6vw, 4.8rem) !important;
  letter-spacing: -0.065em;
  line-height: 0.98;
  max-width: 12ch;
}

article {
  max-width: 72ch;
}

article > p:first-of-type {
  font-size: 1.08rem;
}

article h2 {
  letter-spacing: -0.04em;
}

article h2#main-categories {
  border-top: 1px solid var(--lightgray);
  padding-top: 2rem;
  margin-top: 3rem;
}

article h2#main-categories + ul {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.85rem;
  list-style: none;
  margin: 1.25rem 0 0;
  padding: 0;
}

article h2#main-categories + ul > li {
  margin: 0;
}

article h2#main-categories + ul > li > a.internal {
  align-items: center;
  background: color-mix(in srgb, var(--lightgray) 42%, var(--light));
  border: 1px solid var(--lightgray);
  border-radius: 16px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  min-height: 4.25rem;
  padding: 1rem 1.1rem;
  transition: transform 180ms ease, border-color 180ms ease, background 180ms ease;
}

article h2#main-categories + ul > li > a.internal::after {
  color: var(--tertiary);
  content: "↗";
  font-size: 1.2rem;
  margin-left: 1rem;
}

article h2#main-categories + ul > li > a.internal:hover {
  background: color-mix(in srgb, var(--textHighlight) 55%, var(--light));
  border-color: var(--tertiary);
  color: var(--secondary);
  transform: translateY(-3px);
}

.search > .search-button,
.darkmode {
  background: color-mix(in srgb, var(--lightgray) 48%, var(--light));
  border: 1px solid var(--lightgray);
  border-radius: 999px;
}

.search > .search-button {
  height: 2.4rem;
  padding-left: 0.15rem;
  padding-right: 0.15rem;
}

.darkmode {
  padding: 0.55rem;
}

.darkmode svg {
  fill: var(--secondary);
}

.sidebar.right > .toc,
.sidebar.right > .backlinks {
  background: color-mix(in srgb, var(--lightgray) 35%, var(--light));
  border: 1px solid var(--lightgray);
  border-radius: 18px;
  padding: 1rem 1.15rem;
}

footer {
  border-top-color: var(--lightgray) !important;
  color: var(--gray);
}

footer a {
  color: var(--secondary);
}

@media (max-width: 800px) {
  .page > #quartz-body .sidebar.left,
  .page > #quartz-body .sidebar.right {
    padding-left: 0;
    padding-right: 0;
  }

  .page > #quartz-body .center > article {
    border-radius: 22px;
    padding: 1.35rem;
  }

  article h2#main-categories + ul {
    grid-template-columns: 1fr;
  }
}
`

const CustomTheme: QuartzComponent = () => (
  <style dangerouslySetInnerHTML={{ __html: styles }} />
)

export default (() => CustomTheme) satisfies QuartzComponentConstructor
