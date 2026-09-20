export type Course = { slug:string; code:string; title:string; level:string; duration:string; description:string; modules:string[] };

export const courses: Course[] = [
 { slug:"web-foundations", code:"WEB-101", title:"Web Foundations", level:"Beginner", duration:"6 modules", description:"Build a strong foundation in HTML, CSS and JavaScript while learning how the web actually works.", modules:["HTML structure","CSS layout","Responsive design","JavaScript basics","DOM interaction","Build a landing page"] },
 { slug:"python-foundations", code:"PY-101", title:"Python Foundations", level:"Beginner", duration:"7 modules", description:"Learn Python from first principles and develop the coding mindset needed to build useful programs.", modules:["Variables & types","Input & output","Conditions","Loops","Functions","Collections","Mini project"] },
 { slug:"networking-core", code:"NET-101", title:"Networking Core", level:"Beginner", duration:"8 modules", description:"Understand networks, devices, topologies, addressing and the systems that keep modern technology connected.", modules:["Network basics","Devices","Topologies","IP addressing","Protocols","Switching","Routing","Troubleshooting"] },
 { slug:"cybersecurity-foundations", code:"SEC-101", title:"Cybersecurity Foundations", level:"Beginner", duration:"6 modules", description:"Develop practical security awareness through defensive concepts, safe testing and responsible security practice.", modules:["Security principles","Threats","Authentication","Network defense","Secure development","Security lab"] },
];
