import F from'fs'
for(let d of F.readdirSync('/input')){let y='/input/'+d+'/',u='/output/'+d+'/';F.mkdirSync(u,{recursive:!0});let R=F.readFileSync,P=R(y+'program.bin'),q=R(y+'input.bin'),S=0,c=0,l=0,j=0,p=0,t=1e6,W=F.writeFileSync,T=e=>{throw e},n=P.length,D=new Int32Array(576),O=Buffer.alloc(7e4),o,v,a,b,w
try{for(;t--;){
p>>>0>=n&&T(9)
v="0Dt19:>?xxxxxxxx6666666566656666666xxxxxxxxxxxxxPQQP0xxxxxxxxxxx52xxxxxxxxxxxxxx1141".charCodeAt(o=P[p])-48;v<69||T(5)
a=v&3;b=v>>2&3
p+=1+(v>>4)
p>n&&T(9)
S<a?T(2):S-a+b>256&&T(3)
o<3?o?(D[S++]=o<2?P[p-1]<<24>>24:P.readInt32LE(p-4)):T(0)
:o<8?o==5?(v=D[S-1],D[S-1]=D[S-2],D[S-2]=v):o>6?(v=D[S-3],D.copyWithin(S-3,S-2,S),D[S-1]=v):o<4?S--:(D[S]=D[S-1-(o>5)],S++)
:o<35?(o==23|o==27)?D[S-1]=~D[S-1]+(o<24):o!=31&&(b=D[S-1],a=D[S-2],v=a>>>0,w=b>>>0,o%19<4&!b&&T(4),D[--S-1]=[a+b,a-b,Math.imul(a,b),a/b|0,a%b|0,v/w|0,v%w|0,,a&b,a|b,a^b,,a<<b,a>>b,a>>>b,,a==b|0,a<b|0,v<w|0][o-16])
:o<53?o<51?(v=o<49?0:D[--S],(o<50?!v:v)&&(p+=P.readInt16LE(p-2))):o<52?(c==64&&T(7),D[512+c++]=p,p=P[p-2]|P[p-1]<<8):(c||T(8),p=D[512+--c])
:o<66?(v=D[S-1],v>>>8&&T(6),v+=256,o<65?D[S-1]=D[v]:(D[v]=D[S-2],S-=2))
:o<81?(w=''+D[--S],l+w.length>65536&&T(11),l+=O.write(w,l)):o<82?(l>65535&&T(11),O[l++]=D[--S]&255):o<83?D[S++]=q[j++]??-1:T(D[--S]&255)
}T(10)}catch(e){W(u+'stdout.bin',O.slice(0,l));W(u+'exit.txt',e+'')}}
