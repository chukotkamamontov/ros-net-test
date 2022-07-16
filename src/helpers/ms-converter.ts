// export default function msConverter(ms: number): string{
//   const sec = ms / 1000
//   let hours: string | number = Math.floor(sec / 60 / 60);
//   let minutes: string | number = Math.floor(sec / 60) - hours * 60;
//   let seconds: string | number = sec % 60;

//   if (hours < 10) hours = `0${hours}`;
//   if (minutes < 10) minutes = `0${minutes}`;
//   if (seconds < 10) seconds = `0${seconds}`;
//   return `${hours}:${minutes}:${seconds}`;
// };

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