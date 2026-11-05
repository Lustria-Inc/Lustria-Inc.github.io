/* =====================================================================
   LUSTRIA: ALL THE TEXT ON THE SITE LIVES IN THIS FILE
   ---------------------------------------------------------------------
   Only change the words between the "quotes". Don't touch the commas,
   brackets or quotes themselves.
   - Quote mark inside text? Write \" instead of ".
   - Leave a field as "" to hide it.
   - To add a card: copy a whole { ... }, line, paste it below, and edit.
   - To remove a card: delete its whole { ... }, line.
   Cards keep their shape however much (or little) you write.
   ===================================================================== */

const SITE={ footer:"Orvella · Re-founded after the Vault" };

/* ---------- HOME ---------- */
const HOME={
 eyebrow:"Orvella · Re-founded Beyond the Vault",
 tagline:"Our parents built the engines of a nation. We will build what comes next.",
 intro:"A century after famine, war and nuclear fire drove the Republic of Orvella underground, Lustria Corporation returns. We are leaving Vault E to explore the unknown, uncover its resources and rebuild a company as great as the one that came before.",
 buttons:[ {label:"Join the Corporation", go:"join"}, {label:"Our Heritage", go:"history"} ],
 label:"Explore", title:"The Corporation",
 tiles:[
  {title:"History", text:"Heritage and the long road from Republic to Vault to Surface.", go:"history"},
  {title:"Founders", text:"Two houses, one corporation, and the heirs carrying it forward.", go:"founders"},
  {title:"Industries", text:"What the new Lustria will build, research and trade.", go:"industries"},
  {title:"Our Vision", text:"What we intend to achieve, and how.", go:"vision"},
  {title:"Join Us", text:"Take your place at the works.", go:"join"}
 ]
};

/* ---------- HISTORY ---------- */
const HISTORY={
 label:"Our Heritage", title:"A name that outlived the world that made it",
 paragraphs:[
  "Lustria Corporation was once the most celebrated locomotive and vehicle manufacturer in the Republic of Orvella. Its engines carried grain, ore and people across the nation, and its works shaped the towns around them. Then the vorax fungus blighted the world’s crops, famine bred war, and on 26 November 1998 the bombs fell. The survivors sheltered in the vaults.",
  "A hundred years on, with Vault E preparing to unseal, the founders’ heir and the heir of a partner family are taking up the legacy together. They will not rebuild the old trade. Lustria will be a new enterprise, built on the same craftsmanship and ambition, and just as vital to the survival of Orvella."
 ],
 stats:[
  {num:"100", text:"Years beneath the earth"},
  {num:"2", text:"Founding families, reunited"},
  {num:"1", text:"Mission: rebuild Orvella"}
 ],
 timelineLabel:"The Long Road", timelineTitle:"From Republic to Vault to Surface",
 timeline:[
  {date:"1984–91", title:"The Vorax", text:"A crop-destroying fungus appears in Fölterme and spreads worldwide. Orvella introduces rationing in 1989, and in 1991 a global famine is declared."},
  {date:"1991–94", title:"Seeds and Vaults", text:"The Agricultural Preservation Initiative builds vaults to protect seed stocks. Midway through, they are redesigned to shelter people as well."},
  {date:"1994–98", title:"The War", text:"A raid on Retuid food stores ignites a chain of alliances and a world war. Orvella’s command collapses into civil war, and on 26 November 1998 the nuclear exchange ends the old world."},
  {date:"1998", title:"Vault E Opens", text:"Survivors flood into the vaults. Under Overseer Amedeo, Vault E begins a hundred years of sealed life."},
  {date:"1998–2098", title:"A Century Below", text:"Overseers rise and fall. The Dead Air Incident, the Hydroponics Famine and the East Wing Fire test the vault, and all who remember the surface pass away."},
  {date:"Now", title:"The Unsealing", text:"Vault E announces its opening. Charterholders prepare to leave with GENESIS settlement kits. Lustria Corporation goes with them to explore, research, trade and build."}
 ]
};

/* ---------- FOUNDERS ----------
   portrait: a file inside the assets folder, e.g. "assets/tug.jpg"
   note: a bold line at the bottom; cards with a note get a dashed border.   */
const FOUNDERS={
 label:"The Founders", title:"Two Houses, One Corporation",
 intro:"The Volkovs, a line of scientists, metalworkers and researchers, and the family of lawyers and businessmen beside them once allied to form the greatest corporation in Orvella’s history. A hundred years later, their heirs carry it forward.",
 people:[
  {
   name:"Mikhail Volkov",
   facts:"Age 26 · House Volkov · Science & Engineering",
   portrait:"assets/mikhail.jpg",
   about:[
    "Mikhail is hardly a man of discipline. He is found roaming the Vault’s halls, charming company, chasing romances that never end well, and wading into affairs that are none of his business. Yet beneath the carefree air lies a first-rate education in chemistry, engineering and the workings of machinery.",
    "Heir to a longstanding family mandate, he hopes to turn that knowledge toward rebuilding the enterprise his family once helped to rule. With the Vaults preparing to open, he is eager for a world beyond the walls to explore, experiment with and perhaps make something worthwhile of his life."
   ],
   appearance:"",
   temperament:"",
   note:""
  },
  {
   name:"Tug",
   facts:"Heir · Law, Commerce & Industry",
   portrait:"",
   about:[
    "Heir to a family of lawyers, merchants and businessmen, the partner house that stood beside the Volkovs when the two allied to build the great corporation.",
    "Where Mikhail brings the science, Tug’s family brought the contracts, the capital and the negotiating skill to turn invention into an empire."
   ],
   appearance:"",
   temperament:"",
   note:"Full profile to be unveiled soon."
  }
 ]
};

/* ---------- INDUSTRIES ---------- */
const INDUSTRIES={
 label:"The New Lustria", title:"Our Industries",
 intro:"Locomotives built Orvella once. The new Lustria will build whatever its people need to live, and thrive, in a world we have yet to see.",
 cards:[
  {title:"Exploration & Discovery", text:"Expeditions beyond the vault to map the land, find new resources and learn what the world has become."},
  {title:"Research & Engineering", text:"Studying how the things we find actually work, so we can understand, repair and improve them."},
  {title:"Essential Production", text:"GENESIS kits are only a beginning. Lustria produces the tools, materials and supplies that make new settlements last."},
  {title:"Trade & Reconstruction", text:"Supply lines, settlements and trade that connect the Corporation to the world outside."}
 ]
};

/* ---------- OUR VISION: write your own here ---------- */
const VISION={
 label:"Our Vision", title:"What We Intend to Build",
 intro:"Get money.",
 goals:[
  {title:"Explore", text:"Leave the vault, map the world beyond it and find the resources a new civilisation will need."},
  {title:"Understand", text:"Research how what we find actually works, so that nothing is wasted and nothing is lost."},
  {title:"Rebuild", text:"Mass-produce what survival demands and grow Lustria into a corporation as great as our parents’."}
 ]
};

/* ---------- JOIN US ----------
   link: paste your Google Form (or other) link between the quotes.
   For the staff button, go:"founders" opens the Founders tab; or use link:"https://..." instead. */
const JOIN={
 label:"Recruitment", title:"Take Your Place at the Works",
 intro:"The vault doors are about to open. Join the founding crew of the new Lustria, whether you already serve or want to be one of the first through the gate.",
 staff:{label:"Existing Staff", title:"Meet our Company", text:"Meet the people building the new Lustria.", button:"View Staff", go:"founders", link:""},
 apply:{label:"Prospective Staff", title:"Job Applications", text:"Explore open positions and join the organisation.", button:"View Positions"},
 deptLabel:"Open Departments",
 departments:[
  {title:"Legal Affairs", text:"Diplomacy and negotiation with whoever lives above ground: treaties, land claims and first contact.", link:"https://forms.example.com/lustria-legal"},
  {title:"Expeditions", text:"Explore the unknown world, survey the land and discover new resources.", link:"https://forms.example.com/lustria-expeditions"},
  {title:"Engineering & Manufacturing", text:"Research how found technology works, then mass-produce what survival demands.", link:"https://forms.example.com/lustria-engineering"},
  {title:"Logistics & Trade", text:"Supply lines, stockpiles and trade with the world beyond the vault.", link:"https://forms.example.com/lustria-logistics"},
  {title:"Security & Defence", text:"Protect expeditions, settlements and Lustria’s people in an unfamiliar world.", link:"https://forms.example.com/lustria-security"}
 ]
};
