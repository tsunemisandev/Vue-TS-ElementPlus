export type Data = {
  title: string;
  description: string;
};
export function useAddRow() {
  const data = ref<Data[]>([]);

  const addRow = () => {
    data.value.push({ title: "New title", description: "New description" });
  };

  return { data, addRow };
}
