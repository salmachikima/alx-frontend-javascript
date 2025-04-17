export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true;   // different from the one above!
    const task2 = false; // also different
  }

  return [task, task2]; // returns the ones from the outer block
}

