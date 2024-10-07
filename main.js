const a = [
    {
        "ship_id": "3494769",
        "ship_name": "BBG YULIN"
    },
    {
        "ship_id": "408463",
        "ship_name": "CAPELLA"
    }
]

const b = [
    {
        "ship_id": "3494769",
        "barge_name": "KALIMANTAN TUJUH"
    },
    {
        "ship_id": "3494769",
        "barge_name": "ROBBY 96"
    },
    {
        "ship_id": "3494769",
        "barge_name": "ROBBY 362"
    },
    {
        "ship_id": "408463",
        "barge_name": "ROBBY 135"
    },
    {
        "ship_id": "408463",
        "barge_name": "ROBBY 337"
    },
    {
        "ship_id": "408463",
        "barge_name": "ROBBY 116"
    },
    {
        "ship_id": "408463",
        "barge_name": "KALIMANTAN ABADI 03"
    }
]
const c = []
for (const element_of_a of a) {
    const answer = b.filter(item => item.ship_id === element_of_a.ship_id)
    c.push({
        ship_id: element_of_a.ship_id,
        ship_name: element_of_a.ship_name,
        barges: answer
    })
}


console.log(JSON.stringify(c))

/*
ผลลัพธ์
[{"ship_id":"3494769","ship_name":"BBG YULIN","barges":[{"ship_id":"3494769","barge_name":"KALIMANTAN TUJUH"},{"ship_id":"3494769","barge_name":"ROBBY 96"},{"ship_id":"3494769","barge_name":"ROBBY 362"}]},{"ship_id":"408463","ship_name":"CAPELLA","barges":[{"ship_id":"408463","barge_name":"ROBBY 135"},{"ship_id":"408463","barge_name":"ROBBY 337"},{"ship_id":"408463","barge_name":"ROBBY 116"},{"ship_id":"408463","barge_name":"KALIMANTAN ABADI 03"}]}]
*/