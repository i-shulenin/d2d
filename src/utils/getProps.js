export default function getProps(props) {
  let _props = {};
  for(let key in props) {
    if (
      key !== 'children'
      && typeof props[key] !== 'undefined'
      && !key.match(/^on[A-Z]/)
    ) {
      _props[key] = props[key];
    }
  }

  return _props; 
}

