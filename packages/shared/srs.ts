export function schedule(
  card: { ease: number; interval: number; repetitions: number },
  rating: number,
  now = new Date(),
) {
  const quality = [0, 3, 4, 5][rating];
  const ease = Math.max(1.3, card.ease + 0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
  const repetitions = rating === 0 ? 0 : card.repetitions + 1;
  const interval =
    rating === 0
      ? 0
      : repetitions === 1
        ? 1
        : repetitions === 2
          ? 6
          : Math.max(
              1,
              Math.round(card.interval * ease * (rating === 1 ? 0.7 : rating === 3 ? 1.3 : 1)),
            );
  return {
    ease,
    interval,
    repetitions,
    lastReviewed: now,
    due: new Date(now.getTime() + (rating === 0 ? 600000 : interval * 86400000)),
  };
}
