import { IInitState } from './app';
import { useSelector, AppModelState } from 'umi';

export default function(initialState: IInitState) {
  // const { activeCode } = useSelector(
  //   ({ app }: { app: AppModelState }) => ({
  //     activeCode: app.activeCode
  //   }),
  // );
  // console.log('access', activeCode)
  return {
    index: false,
  };
}
