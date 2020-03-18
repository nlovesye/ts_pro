import React from 'react';
import { useSelector, AppModelState } from 'umi';
import { authByCode } from '@/utils/logic';
import NotAuth from '@/pages/401';

export default (props: { children: React.ReactChild }) => {
  const { activeCode } = useSelector(({ app }: { app: AppModelState }) => ({
    activeCode: app.activeCode,
  }));
  // console.log('wrapper', authByCode(activeCode));
  if (authByCode(activeCode)) {
    return props.children;
  } else {
    return <NotAuth />;
  }
};
