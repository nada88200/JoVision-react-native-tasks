import {useEffect} from 'react';

export default function MyFunctionPage() {
  useEffect(() => {
    console.log('Loaded');
    return () => {
      console.log('unloaded');
    };
  }, []);
}
