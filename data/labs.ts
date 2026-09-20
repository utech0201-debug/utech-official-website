export type Lab = { slug:string; code:string; title:string; description:string; experiments:string[] };
export const labs: Lab[] = [
 {slug:"software-lab",code:"LAB-01",title:"Software Lab",description:"Build and test web apps, APIs and developer workflows in a practical engineering environment.",experiments:["Frontend systems","API experiments","Developer tooling","Performance tests"]},
 {slug:"ai-lab",code:"LAB-02",title:"AI Lab",description:"Prototype useful AI workflows, assistants and intelligent systems with responsible experimentation.",experiments:["Prompt systems","AI assistants","Automation","Model experiments"]},
 {slug:"security-lab",code:"LAB-03",title:"Security Lab",description:"Study defensive security, secure development and controlled testing without touching systems you do not own.",experiments:["Threat modeling","Web security","Network defense","Security audits"]},
];
