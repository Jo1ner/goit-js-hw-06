const categoryItems = document.querySelector('#categories');
const childrenUl = categoryItems.children;

console.log('Number of categories:', childrenUl.length);

Array.from(childrenUl).forEach(child => {

  const categoryTitle = child.firstElementChild.textContent;
  const categoryItems = child.lastElementChild.children.length;
  console.log('Category:', categoryTitle);
  console.log('Number of items:', categoryItems);
});