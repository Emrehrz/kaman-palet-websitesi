import{I as x,o as s,J as l,$ as e,a0 as o,G as d,a1 as c,a2 as m,a3 as p,a4 as _,V as h,a5 as b}from"./entry.5239b415.js";import{w as y}from"./allPalettes.b2522f47.js";/* empty css                        */const w={},v={class:"mx-auto bg-my-lightOrange text-my-darkBlue rounded w-full"},k=e("div",{class:"grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"},[e("div",{class:"mx-auto place-self-center lg:col-span-12"},[e("h1",{class:"max-w-2xl mb-4 text-4xl font-extrabold tracking-b leading-none md:text-5xl xl:text-6xl"}," Ürünler"),e("h1",{class:"max-w-2xl font-bold mb-6 text-my-black lg:mb-8 md:text-lg lg:text-xl"}," Kaman Palet olarak özel ihtiyaçlarınıza yönelik özel üretim ahşap ve plastik paletler, sıfır veya ikinci el seçenekleri ve Euro palet tedarik hizmeti sunuyoruz. Müşteri memnuniyetini ön planda tutarak, kaliteli ve dayanıklı paletlerimizle lojistik süreçlerinizi kolaylaştırıyoruz. ")])],-1),P=[k];function C(r,i){return s(),l("section",v,P)}const z=x(w,[["render",C]]),B=[{id:123,title:"80 x 120 cm Plastik Palet",category:"plastic",img:"plasticPals/80x120plastik.webp",visible:!0},{id:122,title:"100 x 120 cm Plastik Palet",category:"plastic",img:"plasticPals/100x120plastik.webp",visible:!0}],D={data(){return{key1:1,key2:2,key3:3,woodPals:y,plasticPals:B,visibility:{wooden:!0,plastic:!0},whichCategory:"all",show:!1,allCategories:!1,products:[{name:"Product 1",description:"Description 1",visible:!0},{name:"Product 2",description:"Description 2",visible:!0},{name:"Product 3",description:"Description 3",visible:!0}]}},created(){},methods:{toggle(r){r=="wooden"?(this.visibility.plastic=!1,this.visibility.wooden=!0):(this.visibility.wooden=!1,this.visibility.plastic=!0),this.allCategories=!0},getAllCategories(){this.visibility.wooden=!0,this.visibility.plastic=!0,this.allCategories=!1}}},T={class:"flex flex-col mx-auto my-0 h-min-[100vw] w-[90%] rounded-md text-my-darkBlue p-4"},V={class:"bg-white w-full inline-flex flex-wrap mb-6 mx-auto md:mx-0 md:mr-auto justify-start md:p-2 gap-2 md:gap-12 text-base md:text-2xl font-bold rounded"},$={class:"grid sm:grid-cols-2 lg:grid-cols-3 grid-flow-row-dense w-[90%] h-fit mx-auto items-baseline gap-x-2 md:gap-y-4"},A={key:0,class:"flex flex-col place-self-center mb-4 sm:mb-2 lg:mb-0"},N=["src"],K={class:"px-4 -mt-4 text-center"},j={class:"bg-white text-center p-6 rounded-lg shadow-lg"},E=e("div",{class:"flex items-baseline flex-wrap"},null,-1),G={class:"flex mt-2 text-xl lg:text-base xl:text-xl font-semibold leading-tight flex-wrap"},F=e("div",{class:"mt-2 flex"},[e("span",{class:"text-gray-600 text-sm text-start"}," Kaman Palet / İstanbul / 2023"),b(),e("br")],-1),H=e("p",{class:"mt-0 text-my-black text-xs lg:text-sm text-end p-2"},"Daha fazla bilgi için bizimle iletişime geçin ",-1),I={class:"grid sm:grid-cols-2 lg:grid-cols-3 grid-flow-row-dense w-[90%] h-fit mx-auto items-baseline gap-x-2 md:gap-y-4"},J={class:"flex flex-col place-self-center mb-4 sm:mb-2 lg:mb-0"},L=["src"],M={class:"px-4 -mt-4"},O={class:"bg-white p-6 rounded-lg shadow-lg"},S=e("div",{class:"flex items-baseline flex-wrap"},null,-1),q={class:"flex mt-2 text-xl lg:text-base xl:text-xl font-semibold leading-tight flex-wrap"},Q=e("div",{class:"mt-2"},[e("span",{class:"text-gray-600 text-sm"}," Kaman Palet / İstanbul / 2023")],-1),R=e("p",{class:"mt-0 text-my-black text-xs lg:text-sm text-end p-2"},"Daha fazla bilgi için bizimle iletişime geçin ",-1);function U(r,i,g,u,a,n){return s(),l("div",T,[e("ul",V,[o(m,{name:"list"},{default:d(()=>[a.allCategories?(s(),l("li",{onClick:i[0]||(i[0]=(...t)=>n.getAllCategories&&n.getAllCategories(...t)),class:"hover:text-my-white hover:bg-my-darkBlue px-3 rounded ease-linear duration-300 cursor-pointer",key:a.key1}," Tüm ürünler ")):c("",!0),(s(),l("li",{onClick:i[1]||(i[1]=t=>n.toggle("plastic")),class:"hover:text-my-white hover:bg-my-darkBlue px-3 rounded ease-linear duration-300 cursor-pointer",key:a.key2}," Plastik")),(s(),l("li",{onClick:i[2]||(i[2]=t=>n.toggle("wooden")),class:"hover:text-my-white hover:bg-my-darkBlue px-3 rounded ease-linear duration-300 cursor-pointer",key:a.key3}," Ahşap"))]),_:1})]),e("div",$,[o(m,{name:"list"},{default:d(()=>[a.visibility.wooden?(s(!0),l(p,{key:0},_(a.woodPals,(t,f)=>(s(),l("div",{class:"w-auto lg:w-[25vw] h-fit text-gray-900 mt-0 mb-2",key:f},[t.visible?(s(),l("div",A,[e("img",{src:`/img/${t.img}`,alt:" random imgee",class:"rounded-lg shadow-lg"},null,8,N),e("div",K,[e("div",j,[E,e("h4",G,h(t.title),1),F]),H])])):c("",!0)]))),128)):c("",!0)]),_:1})]),e("div",I,[o(m,{name:"list"},{default:d(()=>[a.visibility.plastic?(s(!0),l(p,{key:0},_(a.plasticPals,t=>(s(),l("div",{class:"w-auto lg:w-[25vw] h-fit text-gray-900 mt-0",key:t.id},[e("div",J,[e("img",{src:`/img/${t.img}`,alt:" random imgee",class:"rounded-lg shadow-lg"},null,8,L),e("div",M,[e("div",O,[S,e("h4",q,h(t.title),1),Q])])]),R]))),128)):c("",!0)]),_:1})])])}const W=x(D,[["render",U]]),X={},Y={class:"min-h-fit"};function Z(r,i){const g=z,u=W;return s(),l("div",Y,[o(g),o(u)])}const le=x(X,[["render",Z]]);export{le as default};
