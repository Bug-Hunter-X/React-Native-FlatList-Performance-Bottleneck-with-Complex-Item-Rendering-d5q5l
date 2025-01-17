To address this, optimize the item component by using techniques like `useMemo` and `React.memo` to avoid unnecessary re-renders and calculations.  Additionally, consider using `getItemLayout` for improved scrolling performance.

Example Item Component (Optimized):
```javascript
import React, { useMemo } from 'react';

function MyItem({ item }) {
  const complexCalculation = useMemo(() => calculateSomethingComplex(item), [item]);
  return (
    <View>
      <Text>{complexCalculation}</Text>
    </View>
  );
}

MyItem = React.memo(MyItem);
export default MyItem;
```

Further optimizations may include using a VirtualizedList if the dataset is extremely large,  or pre-calculating values outside the render phase and storing them in a separate data structure.  Profiling your app's performance using React Profiler will also help identify additional bottlenecks.