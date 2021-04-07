```javascript
import { useDownloadURL } from 'react-firebase-hooks/storage';

   const [value, loading, error] = useDownloadURL(
     firebase.storage().ref('/test.pdf')
   );
```

### Link

https://stackoverflow.com/questions/46590155/firestore-permission-denied-missing-or-insufficient-permissions
