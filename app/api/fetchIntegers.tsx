function* range(start, end, step) {
  while (start < end) {
    yield start;
    start += step;
  }
}

export default async function getIntegers(limit, offset) {
  // const body = await request.json();
  console.log("errrrm");
  try {
    const generatedInts = Array.from(range(offset, offset + 20, 1));
    return { results: generatedInts, nextOffset: offset + 20 };
  } catch (error) {
    console.error("ERROR", error);
    return { results: [], error: true };
  }
}
