export function debounce<T extends (...args: any[]) => void>(fn: T, delay: number) {
  let timer: ReturnType<typeof setTimeout> | null = null;

  return (...args: Parameters<T>) => {
    // 타이머가 있다면 취소됨, 이 동작 때문에 일정 시간 안에 전달된 콜백 인스턴스에 대해서는
    // 타이머만 취소되고 콜백이 실행되지 않음
    if (timer) clearTimeout(timer);
    // 타이머가 없다면 타이머 설정, 이 동작 때문에 일정 시간 후에 단 한 번만 콜백이 실행됨
    timer = setTimeout(() => fn(...args), delay);
  };
}
