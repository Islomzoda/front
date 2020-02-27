import React from 'react';
import styles from './App.module.css'; // import styles для CSS Modules
import MemosProvider from './components/MemosProvider/MemosProvider';
import MemosList from './components/MemosList/MemosList';
import MemoEditForm from './components/MemoEditForm/MemoEditForm';


function App() {
  
  return (
    <div className={styles.App}>
      <MemosProvider>
        <MemoEditForm />
        <MemosList />
      </MemosProvider>
    
 
    </div>
  );
}

export default App;
