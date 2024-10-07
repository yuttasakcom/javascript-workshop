# Javascript Workshop

## โจทย์

```javascript
// มีข้อมูล 2 ชุด

const a = [
  {
    ship_id: "3494769",
    ship_name: "BBG YULIN",
  },
  {
    ship_id: "408463",
    ship_name: "CAPELLA",
  },
];

const b = [
  { ship_id: "3494769", barge_name: "KALIMANTAN TUJUH" },
  { ship_id: "3494769", barge_name: "ROBBY 96" },
  { ship_id: "3494769", barge_name: "ROBBY 362" },
  { ship_id: "408463", barge_name: "ROBBY 135" },
  { ship_id: "408463", barge_name: "ROBBY 337" },
  { ship_id: "408463", barge_name: "ROBBY 116" },
  { ship_id: "408463", barge_name: "KALIMANTAN ABADI 03" },
];

// ต้องการทำให้เป็น
const c = [
  {
    ship_id: "3494769",
    ship_name: "BBG YULIN",
    barges: [
      {
        ship_id: "3494769",
        barge_name: "KALIMANTAN TUJUH",
      },
      {
        ship_id: "3494769",
        barge_name: "ROBBY 96",
      },
      {
        ship_id: "3494769",
        barge_name: "ROBBY 362",
      },
    ],
  },
  {
    ship_id: "408463",
    ship_name: "CAPELLA",
    barges: [
      {
        ship_id: "408463",
        barge_name: "ROBBY 135",
      },
      {
        ship_id: "408463",
        barge_name: "ROBBY 337",
      },
      {
        ship_id: "408463",
        barge_name: "ROBBY 116",
      },
      {
        ship_id: "408463",
        barge_name: "KALIMANTAN ABADI 03",
      },
    ],
  },
];
```

## คำอธิบาย

```
ทำการวนลูปข้อมูลใน array a เพื่อทำการ filter ข้อมูล ship_id ที่ตรงกันกับ array b แล้วนำข้อมูลที่ filter ได้มา push เข้าไปใน array c
```
