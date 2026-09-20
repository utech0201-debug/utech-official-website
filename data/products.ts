export type Product = { slug:string; category:string; name:string; description:string; status:"Planned"|"Coming soon" };
export const products: Product[] = [
 {slug:"starter-template-pack",category:"Templates",name:"UTECH Starter Template Pack",description:"Premium starting points for developers building modern web projects.",status:"Planned"},
 {slug:"developer-toolkit",category:"Digital Tools",name:"UTECH Developer Toolkit",description:"A future collection of practical utilities for everyday builders.",status:"Planned"},
 {slug:"raspberry-pi-lab-kit",category:"Hardware",name:"Raspberry Pi Lab Kit",description:"A curated hardware setup for learning Linux, networking and physical computing.",status:"Coming soon"},
 {slug:"creator-peripherals",category:"Peripherals",name:"Creator Peripherals",description:"Useful accessories selected for developers, creators and technology enthusiasts.",status:"Coming soon"},
];
