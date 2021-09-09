export function fakeReq<T = unknown>({
  data,
  time,
  succ = true,
}: {
  data: T;
  time: number;
  succ?: boolean;
}) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      succ ? resolve(data) : reject(data);
    }, time);
  });
}
