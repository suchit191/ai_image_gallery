// src/components/TestData.tsx
import data from '../data/images.json';
import { ImageData } from '../types';

const TestData = () => {
  const imageData = data as ImageData;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Test Data Output</h2>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-auto">
        {JSON.stringify(imageData, null, 2)}
      </pre>
    </div>
  );
};

export default TestData;