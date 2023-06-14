export const setURLParams = (params: { [key: string]: string }) => {
  return Object.keys(params).reduce((priv, el) => {
    if (params[el]) {
      priv = priv ? '&' + priv : '';
      return `${el}=${params[el]}` + priv;
    }
    return priv;
  }, '');
};
