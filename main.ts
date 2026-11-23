import F from'fs'
function run(P,q,u){const n=P.length,D=new Int32Array(576),O=new Uint8Array(65536)
let S=0,c=0,l=0,j=0,p=0,t=1e6,o,v,a,b,w,i
try{for(;;){
if(!t--)throw 10
if(p>>>0>=n)throw 9
v="0Dt19:>?xxxxxxxx6666666566656666666xxxxxxxxxxxxxPQQP0xxxxxxxxxxx52xxxxxxxxxxxxxx1141".charCodeAt(o=P[p]);if(!(v<117))throw 5
i=(v-=48)>>4;v&=15;a=v&3;b=v>>2
p+=1+i
if(p>n)throw 9
if(S<a|S-a+b>256)throw S<a?2:3
if(o==0)throw 0
else if(o<3)D[S++]=o==1?P[p-1]<<24>>24:P.readInt32LE(p-4)
else if(o<7&o!=5)o==3?S--:(D[S]=D[S-1-(o>5)],S++)
else if(o==5)v=D[S-1],D[S-1]=D[S-2],D[S-2]=v
else if(o==7)v=D[S-3],D.copyWithin(S-3,S-2,S),D[S-1]=v
else if(o<35){if(o==23|o==27)D[S-1]=~D[S-1]+(o==23);else if(o!=31){b=D[S-1];a=D[S-2];v=a>>>0;w=b>>>0;if(o%19<4&!b)throw 4;D[--S-1]=[a+b,a-b,Math.imul(a,b),a/b|0,a%b|0,v/w|0,v%w|0,0,a&b,a|b,a^b,0,a<<b,a>>b,a>>>b,0,+(a==b),+(a<b),+(v<w)][o-16]}}
else if(o<51){v=o==48?0:D[--S];if(o<50?!v:v)p+=P.readInt16LE(p-2)}
else if(o<52){if(c==64)throw 7;D[512+c++]=p;p=P[p-2]|P[p-1]<<8}
else if(o<53){if(!c)throw 8;p=D[512+--c]}
else if(o<66){v=D[S-1];if(v&~255)throw 6;o==64?D[S-1]=D[v+256]:(D[v+256]=D[S-2],S-=2)}
else if(o<81){w=''+D[--S];if(l+w.length>65536)throw 11;for(v in w)O[l++]=w.charCodeAt(v)}
else if(o<82){if(l>65535)throw 11;O[l++]=D[--S]&255}
else if(o<83)D[S++]=q[j++]??-1
else throw D[--S]&255
}}catch(e){let W=F.writeFileSync;W(u+'stdout.bin',O.slice(0,l));W(u+'exit.txt',e+'')}}
for(let d of F.readdirSync('/input')){let y='/input/'+d+'/',u='/output/'+d+'/';F.mkdirSync(u,{recursive:true});run(F.readFileSync(y+'program.bin'),F.readFileSync(y+'input.bin'),u)}
