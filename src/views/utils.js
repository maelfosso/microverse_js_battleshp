const coerce = element => {
  if (element === null) return document.createDocumentFragment();
  switch (typeof element) {
    case 'string':
    case 'number':
      return document.createTextNode(element);
    case 'boolean':
    case 'undefined':
      return document.createDocumentFragment();
    default:
      return element;
  }
}

export const Fragment = props => {
  const parent = document.createDocumentFragment();
  props.children.forEach(child => {
    if (Array.isArray(child)) {
      child.forEach(node => parent.appendChild(node));
    } else {
      parent.appendChild(child);
    }
  });
  return parent;
}

export const el = (type, attrs, ...children) => {
  if (typeof type === 'function') {
    const props = { ...attrs, children };
    props.context = {};
    return type(props);
  }
  let node;
  try {
    node = document.createElement(type);
  } catch (e) {
    return document.createTextNode(type);
  }
  if (attrs) {
    Object.keys(attrs).forEach(key => {
      if (key.startsWith('on')) {
        node.addEventListener(key.slice(2).toLowerCase(), attrs[key]);
      } else if (key === 'className') {
        node.setAttribute('class', attrs[key]);
      } else if (key === 'ref') {
        const { context } = attrs;
        if (!context)
          throw new Error('The context must be provided when using ref');
        context[attrs[key]] = node;
      } else {
        node.setAttribute(key, attrs[key]);
      }
    });
  }
  children.forEach(child => {
    if (Array.isArray(child))
      child.forEach(gdChild => node.appendChild(coerce(gdChild)));
    else node.appendChild(coerce(child));
  });
  return node;
}

export const mount = (node, host) => {
  host.innerHTML = '';
  if (Array.isArray(node)) node.forEach(child => host.appendChild(child));
  else host.appendChild(coerce(node));
}

// export const Fragment = props => {
//   const parent = document.createDocumentFragment();
//   props.children.forEach(child => {
//     if (Array.isArray(child)) {
//       child.forEach(node => parent.appendChild(node));
//     } else {
//       parent.appendChild(child);
//     }
//   });
//   return parent;
// };

// export const mount = (node, host) => {
//   while (host.firstChild) host.removeChild(host.firstChild);

//   if (Array.isArray(node)) node.forEach(child => host.appendChild(child));
//   else host.appendChild(coerce(node));
// };
