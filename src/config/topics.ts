export const imagest = [
{ src:"https://images.prod.favotrip.nl/images/1763131820600.jpg",
  title:"Wellness",
},
{ src:"https://images.prod.favotrip.nl/images/1766816838518.jpg",
  title:"Amusement parks",
}
 ] as const;



export type ImageValuet =(typeof imagest)[number];