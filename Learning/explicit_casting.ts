let something : unknown
let knowtype = <string> something // changed something type from unknown to string

let knowntype = something as number // changed something type from unknown to number

let a = knowntype as string // you cannnot change any known type to string 

let b = knowntype as unknown as string // now you have changed the knowtype type from number to unknown than from unknown to string

