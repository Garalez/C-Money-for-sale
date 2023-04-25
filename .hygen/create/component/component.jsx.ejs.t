---
to: <%= absPath %>/<%= component_name %>.jsx
---
import style from './<%= component_name %>.module.scss';

export const <%= component_name %> = () => {
  console.log(style);
  return (
    <div></div>
  );
};
