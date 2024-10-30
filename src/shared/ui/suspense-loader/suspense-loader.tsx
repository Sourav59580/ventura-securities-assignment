import { useEffect } from 'react';
import NProgress from 'nprogress';

import style from './suspense-loader.module.scss';
import { ProgressSpinner } from 'primereact/progressspinner';

function SuspenseLoader() {
    useEffect(() => {
      NProgress.start();
  
      return () => {
        NProgress.done();
      };
    }, []);
  
    return (
      <div className={style.box}>
        <ProgressSpinner className={style.spinnerSize} />
      </div>
    );
  }
  
  export default SuspenseLoader;