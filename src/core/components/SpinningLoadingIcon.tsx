import LoadingIcon from '@mdi/svg/svg/loading.svg';
import React, { PureComponent } from 'react';

import styles from './SpinningLoadingIcon.module.scss';

export default class SpinningLoadingIcon extends PureComponent<{}> {
  render() {
    return <img src={LoadingIcon} className={styles.spin} alt="..." />;
  }
}
