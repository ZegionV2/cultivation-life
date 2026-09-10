const positions:Record<string,number>={Chronicle:0,Cultivation:1,Activities:2,Inventory:3,School:4,Occupation:5,Relationships:6,Time:7,Fate:8};
export function GameIcon({name}:{name:string}){const i=positions[name]??0;return <span aria-hidden="true" className="game-icon" style={{backgroundPosition:`${i%3*50}% ${Math.floor(i/3)*50}%`}}/>}
export function GameLogo(){return <img className="game-logo" src="/art/logo.png" alt="" aria-hidden="true"/>}
