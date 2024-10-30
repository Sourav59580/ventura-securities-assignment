import { ProgressSpinner } from 'primereact/progressspinner'
import React from 'react'

import style from './loader.module.scss';

const Loader = () => {
  return (
    <div className={style.box}>
        <ProgressSpinner className={style.spinnerSize} />
    </div>
  )
}

export default Loader