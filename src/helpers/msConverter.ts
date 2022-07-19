export function msConverter(duration : number): string {
  const ms = duration % 1000
  let seconds = Math.abs((duration / 1000) % 60);
  let minutes = Math.abs(duration / (1000 * 60) % 60);
  let min: string | number
  let sec: string | number;
  (minutes < 10) ? min = `0${parseInt(String(minutes))}`: min = String(minutes);
  (seconds < 10) ? sec = `0${parseInt(String(seconds))}`: sec = parseInt(String(seconds));
  return min + ":" + sec + ":" + ms;
};