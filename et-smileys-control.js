/*
Author: Rahul Anand <et@eternal-thinker.com>
        2014-02-21

Description:
  Replace smiley symbols with emoticon images

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License. 

The smileys images are created by Rahul Anand. 
Contact if you want to re-use them for any purpose other than bundled with this script.
*/

var smileyMap = {
	" :)" : "http://lh5.ggpht.com/_qadpUUgfbYI/Sd4raNCikzI/AAAAAAAAAs8/xXazSXM5gtI/smile.png",
	" :-)" : "http://lh5.ggpht.com/_qadpUUgfbYI/Sd4raNCikzI/AAAAAAAAAs8/xXazSXM5gtI/smile.png",
	" :(" : "http://lh6.ggpht.com/_qadpUUgfbYI/Sd4raDz3n-I/AAAAAAAAAs0/wRtWViL65LM/sad.png",
	" :-(" : "http://lh6.ggpht.com/_qadpUUgfbYI/Sd4raDz3n-I/AAAAAAAAAs0/wRtWViL65LM/sad.png",
	" :|" : "http://lh5.ggpht.com/_qadpUUgfbYI/Sd4racDBxQI/AAAAAAAAAtE/azuL0zHNOdk/straight.png",
	" :-|" : "http://lh5.ggpht.com/_qadpUUgfbYI/Sd4racDBxQI/AAAAAAAAAtE/azuL0zHNOdk/straight.png",
	" ;)" : "http://lh3.ggpht.com/_qadpUUgfbYI/Sd4rfy_x61I/AAAAAAAAAtc/alrwsN93C4I/wink.png",
	" ;-)" : "http://lh3.ggpht.com/_qadpUUgfbYI/Sd4rfy_x61I/AAAAAAAAAtc/alrwsN93C4I/wink.png",
	" :D" : "http://lh3.ggpht.com/_qadpUUgfbYI/Sd4rP0aRdCI/AAAAAAAAAsU/HAIiliq_T6U/laugh.png",
	" :-D" : "http://lh3.ggpht.com/_qadpUUgfbYI/Sd4rP0aRdCI/AAAAAAAAAsU/HAIiliq_T6U/laugh.png",
	" :O" : "http://lh6.ggpht.com/_qadpUUgfbYI/Sd4rQLdnXsI/AAAAAAAAAsc/Ss7OlutoX-o/lolz.png",
	" :-O" : "http://lh6.ggpht.com/_qadpUUgfbYI/Sd4rQLdnXsI/AAAAAAAAAsc/Ss7OlutoX-o/lolz.png",
	" :r" : "http://lh5.ggpht.com/_qadpUUgfbYI/Sd4rQbMx4cI/AAAAAAAAAss/EVdAap98VDg/rotfl.png",
	" :P" : "http://lh6.ggpht.com/_qadpUUgfbYI/Sd4rapzVY2I/AAAAAAAAAtU/BYi7ipMmloE/tongue.png",
	" :-P" : "http://lh6.ggpht.com/_qadpUUgfbYI/Sd4rapzVY2I/AAAAAAAAAtU/BYi7ipMmloE/tongue.png",
	" :$" : "http://lh6.ggpht.com/_qadpUUgfbYI/Sd4rIPhTlfI/AAAAAAAAArs/HOg9vKglmP4/blush.png",
	" :~" : "http://lh4.ggpht.com/_qadpUUgfbYI/SeAlOWkKcvI/AAAAAAAAAu8/PJ5Ep3kI67I/sick.png",	
	" :/" : "https://lh3.googleusercontent.com/-aea3jldM_ls/Tkns-x36DdI/AAAAAAAACEU/APuy2bZeJdw/confused.png",
	" :-/" : "https://lh3.googleusercontent.com/-aea3jldM_ls/Tkns-x36DdI/AAAAAAAACEU/APuy2bZeJdw/confused.png",
	" 8)" : "http://lh5.ggpht.com/_qadpUUgfbYI/SeAlJJjIfcI/AAAAAAAAAuU/wb4NZ2Tajjg/cool.png",
	" 8-)" : "http://lh5.ggpht.com/_qadpUUgfbYI/SeAlJJjIfcI/AAAAAAAAAuU/wb4NZ2Tajjg/cool.png",
	" 8|" : "http://lh5.ggpht.com/_qadpUUgfbYI/SeAlOE1I91I/AAAAAAAAAu0/n6aCejkjF9w/nerd.png",
	" 8-|" : "http://lh5.ggpht.com/_qadpUUgfbYI/SeAlOE1I91I/AAAAAAAAAu0/n6aCejkjF9w/nerd.png",
	" :k" : "https://lh5.googleusercontent.com/-F-kX_jc0NyE/Tkns8zQ0v4I/AAAAAAAACDk/rp78NSFSPGs/kiss.png",	
	" :@" : "http://lh5.ggpht.com/_qadpUUgfbYI/Sd4rIPIq1nI/AAAAAAAAArk/MjFHWFS5LhE/angry.png",	
	" :L" : "http://lh3.ggpht.com/_qadpUUgfbYI/Sd4rQK9M3YI/AAAAAAAAAsk/dxLLGkqeR4Q/love.png",	
	" :v" : "http://lh6.ggpht.com/_qadpUUgfbYI/Sd4rId6WmCI/AAAAAAAAAsE/jmKzeyXLwrU/devil.png",	
	" :d" : "http://lh5.ggpht.com/_qadpUUgfbYI/Sd4rIRBh2II/AAAAAAAAAr8/ZCB_Fk-fiAI/daydream.png",
	" :f" : "http://lh5.ggpht.com/_qadpUUgfbYI/Sd4raVQpJPI/AAAAAAAAAtM/TDh-bkZgqIE/sweat.png",
	" :c" : "http://lh4.ggpht.com/_qadpUUgfbYI/Sd4rIROcQyI/AAAAAAAAAr0/lqOlet4D8yA/cry.png",
	" :o" : "https://lh6.googleusercontent.com/-qRrut8awFdM/Tkns-H3UOiI/AAAAAAAACEA/SocqNiS--6Q/wow.png",
	" :-o" : "https://lh6.googleusercontent.com/-qRrut8awFdM/Tkns-H3UOiI/AAAAAAAACEA/SocqNiS--6Q/wow.png",
	" :b" : "http://lh4.ggpht.com/_qadpUUgfbYI/SeAlJIqLK4I/AAAAAAAAAuM/LvylnHkZGsM/bow.gif",
	" :e" : "http://lh3.ggpht.com/_qadpUUgfbYI/SeAlJKmO6uI/AAAAAAAAAuc/nx-kHp7Wu8M/dance.gif",
	" :i" : "http://lh3.ggpht.com/_qadpUUgfbYI/SeAlJQypVRI/AAAAAAAAAus/HEPQGE62BxM/inverted.png",
	" :h" : "http://lh3.ggpht.com/_qadpUUgfbYI/SeAlJP6WjGI/AAAAAAAAAuk/IYgt1Pbx22o/hug.png",
	" :||" : "https://lh4.googleusercontent.com/-G1Sa40NJ8Vo/Tkns9omYDVI/AAAAAAAACD0/AGPezIwoZo8/straight%252521.png",	
	" :vD" : "https://lh5.googleusercontent.com/-Y5AXyyCvZcs/Tkns_TfiXBI/AAAAAAAACEg/S4n3F4SuDKs/evillaugh.gif",
	" o_O" : "https://lh5.googleusercontent.com/-bzEA78PKAAE/Tkns96EI0GI/AAAAAAAACD8/RzSGPz2JSnI/stunned.png",
	" ^_^" : "https://lh4.googleusercontent.com/-vFuDVm9WV94/Tkns_C3WEYI/AAAAAAAACEY/Z2-PGzBK88I/cutesmile.png",
	" xD" : "https://lh3.googleusercontent.com/-ORm4g5_jluo/Tkns-YPwepI/AAAAAAAACEM/qSv3Pzmup0E/xD.png",
	" xP" : "http://lh6.ggpht.com/_qadpUUgfbYI/Sw0aYjqmOPI/AAAAAAAABjc/WwB6T966uL4/dead.png",
	" :brow" : "https://lh5.googleusercontent.com/-jA9WqrL_JQA/Tkns-uRNy4I/AAAAAAAACEQ/fTnFhuFYaTA/brow.png",
	" :party" : "http://lh3.ggpht.com/_qadpUUgfbYI/Sw0ahj6bF3I/AAAAAAAABjw/zRoY9bG2qSM/party.png",
	" :tone" : "http://lh5.ggpht.com/_qadpUUgfbYI/Sw0ah13UhaI/AAAAAAAABj4/yv0Ul927Km0/tone.png",
	" :rainbow" : "http://lh5.ggpht.com/_qadpUUgfbYI/Sw0ahmS11RI/AAAAAAAABj0/6OtALGwl4ZM/rainbow.png",
	" :et" : "http://lh6.ggpht.com/_qadpUUgfbYI/Sw0aYnteM9I/AAAAAAAABjg/fqj4IzgqjqM/et.png",
	" :ET" : "http://lh6.ggpht.com/_qadpUUgfbYI/Sw0aYnteM9I/AAAAAAAABjg/fqj4IzgqjqM/et.png",
	" :angel" : "http://lh3.ggpht.com/_qadpUUgfbYI/Sw0aYsRjc9I/AAAAAAAABjU/qznTJ29gY9s/angel.png",
	" &lt;3" : "https://lh6.googleusercontent.com/-XK1qgf4_-r4/Tkns_fMP--I/AAAAAAAACEc/jcL9cbmif3k/heart.png",
	" <3" : "https://lh6.googleusercontent.com/-XK1qgf4_-r4/Tkns_fMP--I/AAAAAAAACEc/jcL9cbmif3k/heart.png",
	" &lt;\\3" : "https://lh4.googleusercontent.com/-diVQdpw8u3k/Tkns_XZ5WSI/AAAAAAAACEk/FoBhpuro8d8/heartbreak.png",
	" <\\3" : "https://lh4.googleusercontent.com/-diVQdpw8u3k/Tkns_XZ5WSI/AAAAAAAACEk/FoBhpuro8d8/heartbreak.png",
	" :robot" : "https://lh4.googleusercontent.com/-6JZD3MfPE-g/Tkns9krgT1I/AAAAAAAACD4/hp0MCeU9tSw/robot.png",
	" :star" : "https://lh6.googleusercontent.com/-vKJ8tT14dqA/Tkns9apf4cI/AAAAAAAACDw/qJcgU9dHLLE/star.png",
	" :mj" : "http://lh4.ggpht.com/_qadpUUgfbYI/SkdDCxq5nSI/AAAAAAAABU4/eEEj7ZUjuZc/MJ.gif",
	" :kitten" : "https://lh5.googleusercontent.com/-F4ITY_96k9Y/Tkns80WwdlI/AAAAAAAACDo/8GTzggjnuww/kitten.png",
	" :tup" : "https://lh3.googleusercontent.com/-hXSWSDWf6-4/Tkns-T187zI/AAAAAAAACEI/GqaAIlY73BI/tup.png",
	" :tdown" : "https://lh4.googleusercontent.com/-3ZGtuxVQZ0Y/Tkns9_yr3SI/AAAAAAAACEE/1m0jrImAkD4/tdown.png",
	" \\m/" : "https://lh4.googleusercontent.com/-P2WRE7yEMaE/Tkns9QZZAAI/AAAAAAAACDs/u2qcEI_wwRY/rockon.png",
	" :fire" : "http://lh6.ggpht.com/_qadpUUgfbYI/Sw0aZPBIVqI/AAAAAAAABjk/DtaGB3TPQ1c/fire.png",
	" :ice" : "http://lh4.ggpht.com/_qadpUUgfbYI/Sw0ahkdsnyI/AAAAAAAABjs/v35S1QyUfG0/ice.png",
	" &gt;.&lt;" : "http://lh6.ggpht.com/_qadpUUgfbYI/Sw0ahtHC6kI/AAAAAAAABjo/3Ah5dEC1edM/frus.png",
	" >.<" : "http://lh6.ggpht.com/_qadpUUgfbYI/Sw0ahtHC6kI/AAAAAAAABjo/3Ah5dEC1edM/frus.png",
	" xo" : "http://lh6.ggpht.com/_qadpUUgfbYI/Sw0ahtHC6kI/AAAAAAAABjo/3Ah5dEC1edM/frus.png"	
}

function etSmileys() {
    var d = document.getElementsByClassName('etSmileys');
    for (i = 0; i < d.length; i++) {    
    	d[i].innerHTML = d[i].innerHTML.replace(    	
    	/ (:(\|\||brow|party|tone|rainbow|et|ET|angel|vD|robot|star|mj|kitten|tup|tdown|fire|ice|-?[\)\(\|DOPo\/]|[\$~@rkLvdfcbeih])|8-?[\)\|]|x[DPo]|(&lt;|<)\\?3|(&gt;|>)\.(&lt;|<)|\\m\/|\^\_\^|o\_O|;-?\))/g,    	    	 
    	function(symbol) { return ' <img class="et-smiley" src="' + smileyMap[symbol] + '" style="border:0; margin:0; padding:0;" id="new" />' });    
    }    
}

