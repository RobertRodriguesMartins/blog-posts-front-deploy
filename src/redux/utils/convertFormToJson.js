export default function generateJsonFormData(form, expect) {
  const mappedValues = expect.map((el) => {
    return {
      [el]: form.get(el),
    };
  });
  const reducedValues = mappedValues.reduce((curr, acc) => {
    return { ...curr, ...acc };
  }, {});

  if(reducedValues.categories) {
    reducedValues.categories = reducedValues.categories.split(',');
  } else {
    reducedValues.categories = [];
  }

  return JSON.stringify(reducedValues);
}
