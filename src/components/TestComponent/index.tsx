import React, { useState } from 'react';
import { Switch } from 'antd';
import { Text, SwitchWrapper } from './index.styled';
import styles from './switch.module.less';

const SwitchComponent: React.FC = () => {
  const [checked, setChecked] = useState(false);

  const checkHandler = () => {
    setChecked(prev => !prev);
  };

  return (
    <SwitchWrapper>
      <Text>{checked ? 'Да' : 'Нет'}</Text>
      <Switch
        checked={checked}
        onClick={checkHandler}
        className={styles.customSwitch}
      />
    </SwitchWrapper>
  );
};

export default SwitchComponent;
