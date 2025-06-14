import { NextResponse } from "next/server"


const drawings = [
    {
        id: 1,
        img: "https://res.cloudinary.com/dllyvg3us/image/upload/v1749768457/d-8_oxyad2.jpg",
        technique: "Grafito sobre papel",
        width: 720,
        height: 527
    },
    {
        id: 2,
        img: "https://res.cloudinary.com/dllyvg3us/image/upload/v1749768505/the_death_p53a8k.png",
        technique: "Carboncillo sobre papel",
        width: 1540,
        height: 2108
    },
    {
        id: 3,
        img: "https://res.cloudinary.com/dllyvg3us/image/upload/v1749768463/m-a-insp_uakxrn.jpg",
        technique: "Grafito sobre papel",
        width: 2448,
        height: 3176
    },
    {
        id: 4,
        img: "https://res.cloudinary.com/dllyvg3us/image/upload/v1749769180/scary_qi9exh.png",
        technique: "Carboncillo sobre papel",
        width: 1956,
        height: 1448
    },

];

export async function GET() {
  return NextResponse.json(drawings);
}

