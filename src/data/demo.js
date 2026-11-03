// Synthetic, illustrative data. NOT real player tracking or live match statistics.
export const players = [
  {id:1,name:'Goalkeeper',number:1,role:'GK',x:8,y:50,passes:28,distance:2.3},
  {id:2,name:'Right Back',number:2,role:'DEF',x:28,y:83,passes:61,distance:8.4},
  {id:3,name:'Centre Back A',number:3,role:'DEF',x:22,y:62,passes:78,distance:7.5},
  {id:4,name:'Centre Back B',number:4,role:'DEF',x:22,y:38,passes:74,distance:7.7},
  {id:5,name:'Left Back',number:5,role:'DEF',x:28,y:17,passes:58,distance:8.8},
  {id:6,name:'Holding Mid',number:6,role:'MID',x:45,y:50,passes:91,distance:10.1},
  {id:8,name:'Central Mid',number:8,role:'MID',x:60,y:35,passes:86,distance:10.8},
  {id:10,name:'Attacking Mid',number:10,role:'MID',x:67,y:65,passes:68,distance:9.7},
  {id:7,name:'Right Winger',number:7,role:'FWD',x:80,y:86,passes:44,distance:9.2},
  {id:9,name:'Striker',number:9,role:'FWD',x:87,y:50,passes:33,distance:8.5},
  {id:11,name:'Left Winger',number:11,role:'FWD',x:80,y:14,passes:49,distance:9.5}
];
export const passingLinks = [
  [1,3,14],[1,4,12],[3,4,22],[3,6,28],[4,6,26],[5,8,17],[2,10,15],
  [6,8,34],[6,10,27],[8,11,20],[10,7,24],[8,9,12],[10,9,18],[7,9,11]
];
// Deterministic movement offsets, in normalized pitch coordinates (0-100).
export function positionAt(player, seconds) {
  if (player.role === 'GK') return {x:player.x + Math.sin(seconds/14)*1.2,y:player.y+Math.cos(seconds/18)*3};
  const phase=seconds/8+player.id*1.7;
  return {x:Math.max(4,Math.min(96,player.x+Math.sin(phase)*6+Math.cos(phase*.43)*2)),y:Math.max(5,Math.min(95,player.y+Math.cos(phase*.83)*8))};
}
export function heatPoints(player, seconds) {
  return Array.from({length:24},(_,i)=>positionAt(player,Math.max(0,seconds-i*5)));
}
