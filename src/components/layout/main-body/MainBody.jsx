import React from 'react'
import styles from './MainBody.module.css'
import Button from '../../ui/form-controls/button/Button';
import Input from '../../ui/form-controls/input/Input';

const MainBody = () => (
  <div className={styles.mainBody}>
    <h1>Welcome to Atomic Design Library</h1>
    <p>
      This is a React component library inspired by atomic design principles. Use the sidebar to navigate through components and documentation.
    </p>
    
    <h2>Button Component</h2>
    <Button buttonText={'Click Here'} />

    <h2>Input Component</h2>
    <Input />

  </div>
);

export default MainBody;