import { useCallback, useState } from "react";

interface ITarefa {
   id: number;
   title: string;
   isCompleted: boolean;
}

export const Dashboard = () => {

  const [lista, setLista] = useState<ITarefa[]>([]);

  const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
    if (e.key === 'Enter'){
      // if (e.currentTarget.value.trim().length === 0) return;

      // const value = e.currentTarget.value;

      // e.currentTarget.value = '';

      // setLista((prev) => {
      //   if (prev.some((listItem) => listItem.title === value)) return prev;

      //   return [...prev, {
      //     title: value,
      //     isSelected: false,
      //   }];
      // });
    }
  }, []);

  return (
    <div>
      <h2>Lista</h2>

      <input onKeyDown={handleInputKeyDown}/>

      <ul>
        {lista.map((lisItem) => {
          return <li key={lisItem.id}>
            <input type="checkbox" />
            {lisItem.title}
            </li>;
        })}
      </ul>

    </div>
  );
};

