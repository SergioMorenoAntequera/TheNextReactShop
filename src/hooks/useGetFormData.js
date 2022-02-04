export default function useGetFormData(form, fields) {
  function getData() {
    const formData = new FormData(form.current);
    var finalData = {};
    fields.forEach((f) => (finalData = { ...finalData, [f]: formData.get(f) }));
    return finalData;
  }

  return [getData];
}
