console.log("connected")
const human = [{
    name:"herlock sholmes",
    job:"mediocre detective",
    nationality:"Yorkshire tea",
    personality: ["80% men","4.2% women","6.9% dog","8.9% besian"],
    realcharacter: true,
},
{
    name:"Momes Jariarty",
    job:"Emoiji translation professor",
    nationality:"Kenyian  Single origin light roasted coffee bean with a 4:6 ratio coffee served at 205F",
    personality: ["90% cringe","3% socks with sandles","6.9% PEPE","0.1% kek"],
    realcharacter: false,
},
{
    name:"Jaun Jatson",
    job:"detroit urban survival training professor",
    nationality:"detiroit pineapple pizza",
    personality: ["10% mexican ","80% itlian","10% dead inside","100% getting sued","100% indebt"],
    realcharacter: false,
},
{
    name:"arsène lupin ",
    job:"homeless looter",
    nationality:"J'aime des baguettes",
    personality: ["50% moist looter","25% dishonest acts at a fair and reasonable price!","25% Britsh disaprover"],
    realcharacter: true

}]

human.forEach((human) => console.log(human.name));
human.forEach((human) => {
    human.personality.forEach((personality) => {
    console.log(personality)
})});
const status_alive = human.filter((human) => human.realcharacter === true);
    console.log(status_alive);