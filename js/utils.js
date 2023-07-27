// utility function

export function setAttribute(id, attr, value) {
  return document.getElementById(id).setAttribute(attr, value);
}

export function removeAttribute(id, attr) {
  return document.getElementById(id).removeAttribute(attr);
}

export function addChildAsFirst(id, tag, classValue, content) {
  const el = document.createElement(tag);
  el.classList.add(classValue);
  el.innerHTML = content;
  document.getElementById(id).prepend(el);
}

export function setClassValue(el, classvalue) {
  el.classList.add(classvalue.trim());
}

export function removeClassValue(el, classvalue) {
  el.classList.remove(classvalue.trim());
}
export function toggleClassValue(el, classvalue) {
  el.classList.toggle(classvalue.trim());
}
