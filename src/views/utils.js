
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
};

export const mount = (node, host) => {
  while (host.firstChild) host.removeChild(host.firstChild);

  if (Array.isArray(node)) node.forEach(child => host.appendChild(child));
  else host.appendChild(coerce(node));
};
