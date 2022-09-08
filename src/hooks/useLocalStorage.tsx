import { useEffect, useState } from "react";

type Keys = "filters" | "correctAnswers" | 'path';

const useLocalStorage = (key: Keys) => {
  const [value, setValue] = useState<any>([]);

  function getDataFromLocalStorage() {
    let data = localStorage.getItem(key);
    if (data !== null) {
      return JSON.parse(data);
    }
    return [];
  }

  function setDataTolocalSotage(value: any) {
    let dataFromStorage = getDataFromLocalStorage();
    if (key === "filters" || key === "path" ) {
      localStorage.setItem(key, JSON.stringify(value));
    }
    else{
      dataFromStorage.push(value);
      localStorage.setItem(key, JSON.stringify(dataFromStorage));
    }
  }

  useEffect(() => {
    let dataFromStorage = getDataFromLocalStorage();
    setValue(dataFromStorage);
  }, []);

  return [value, setDataTolocalSotage ];
};

export default useLocalStorage;
