# 时分针夹角

```ts
const ANGLE_PER_HOUR = 360 / 12;
const ANGLE_PER_MINUTE = 360 / 60;

const clockAngle = (hour: number, minute: number): number => {
  const hourAngle = (hour + minute / 60) * ANGLE_PER_HOUR;
  const minuteAngle = minute * ANGLE_PER_MINUTE;
  const angle = Math.abs(hourAngle - minuteAngle);
  return Math.min(angle, 360 - angle);
};
```
