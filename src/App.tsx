import React from "react";
import Textarea from "./components/Textarea";

const App = () => {
  return (
    <div className="flex items-center flex-col w-[50vw] mt-6 gap-y-2">
      <Textarea label="Address" />
      <Textarea label="Description" required />
      <Textarea label="Post" required helperText="Share someting...." />
    </div>
  );
};

export default App;
