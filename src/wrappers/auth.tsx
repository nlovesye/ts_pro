import { history } from 'umi';

export default props => {
  const isLogin = false;
  console.log('wrapper');
  if (isLogin) {
    return props.children;
  } else {
    // history.replace('/login')
    return null;
  }
};
