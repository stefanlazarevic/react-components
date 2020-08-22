export default function useClassNames(...classes: (string | undefined)[]) {
  return Array.from(classes)
    .filter((c) => c)
    .join(" ")
    .trim();
}