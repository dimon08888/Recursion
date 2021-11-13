// recursion.
function querySelector(selector: string): Element | null {
  return querySelectorInner(document.documentElement, selector);
}

function querySelectorInner(el: Element, selector: string): Element | null {
  if (el.matches(selector)) {
    return el;
  }

  for (const child of Array.from(el.children)) {
    const result = querySelectorInner(child, selector);
    if (result !== null) {
      return result;
    }
  }

  return null;
}

// recursion.
function querySelectorAll(selector: string): Element[] {
  const elements: Element[] = [];

  traverse(document.documentElement, (el) => {
    if (el.matches(selector)) {
      elements.push(el);
    }
  });

  return elements;
}

function traverse(el: Element, fn: (el: Element) => void) {
  fn(el);
  Array.from(el.children).forEach((child) => traverse(child, fn));
}

console.log(querySelector('.hello'));
console.log(querySelectorAll('li'));
