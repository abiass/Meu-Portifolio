export function Testimonial({ testimonial }) {
  return (
    <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg border border-zinc-200 dark:border-zinc-700">
      <p className="text-zinc-700 dark:text-zinc-300 italic mb-4">"{testimonial.text}"</p>
      <p className="font-semibold text-zinc-900 dark:text-white">{testimonial.name}</p>
      <p className="text-sm text-zinc-500 dark:text-zinc-400">{testimonial.role}</p>
    </div>
  );
}
