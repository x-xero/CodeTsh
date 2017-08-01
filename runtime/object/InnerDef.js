var SCI_START = 2000;
var SCI_OPTIONAL_START = 3000;
var SCI_LEXER_START = 4000;
var SCI_ADDTEXT = 2001;
var SCI_ADDSTYLEDTEXT = 2002;
var SCI_INSERTTEXT = 2003;
var SCI_CHANGEINSERTION = 2672;
var SCI_CLEARALL = 2004;
var SCI_DELETERANGE = 2645;
var SCI_CLEARDOCUMENTSTYLE = 2005;
var SCI_GETLENGTH = 2006;
var SCI_GETCHARAT = 2007;
var SCI_GETCURRENTPOS = 2008;
var SCI_GETANCHOR = 2009;
var SCI_GETSTYLEAT = 2010;
var SCI_REDO = 2011;
var SCI_SETUNDOCOLLECTION = 2012;
var SCI_SELECTALL = 2013;
var SCI_SETSAVEPOINT = 2014;
var SCI_GETSTYLEDTEXT = 2015;
var SCI_CANREDO = 2016;
var SCI_MARKERLINEFROMHANDLE = 2017;
var SCI_MARKERDELETEHANDLE = 2018;
var SCI_GETUNDOCOLLECTION = 2019;
var SCI_POSITIONFROMPOINT = 2022;
var SCI_POSITIONFROMPOINTCLOSE = 2023;
var SCI_GOTOLINE = 2024;
var SCI_GOTOPOS = 2025;
var SCI_SETANCHOR = 2026;
var SCI_GETCURLINE = 2027;
var SCI_GETENDSTYLED = 2028;
var SCI_CONVERTEOLS = 2029;
var SCI_GETEOLMODE = 2030;
var SCI_SETEOLMODE = 2031;
var SCI_STARTSTYLING = 2032;
var SCI_SETSTYLING = 2033;
var SCI_GETBUFFEREDDRAW = 2034;
var SCI_SETBUFFEREDDRAW = 2035;
var SCI_SETTABWIDTH = 2036;
var SCI_GETTABWIDTH = 2121;
var SCI_CLEARTABSTOPS = 2675;
var SCI_ADDTABSTOP = 2676;
var SCI_GETNEXTTABSTOP = 2677;
var SCI_SETCODEPAGE = 2037;
var SCI_GETIMEINTERACTION = 2678;
var SCI_SETIMEINTERACTION = 2679;
var SCI_MARKERDEFINE = 2040;
var SCI_MARKERSETFORE = 2041;
var SCI_MARKERSETBACK = 2042;
var SCI_MARKERSETBACKSELECTED = 2292;
var SCI_MARKERENABLEHIGHLIGHT = 2293;
var SCI_MARKERADD = 2043;
var SCI_MARKERDELETE = 2044;
var SCI_MARKERDELETEALL = 2045;
var SCI_MARKERGET = 2046;
var SCI_MARKERNEXT = 2047;
var SCI_MARKERPREVIOUS = 2048;
var SCI_MARKERDEFINEPIXMAP = 2049;
var SCI_MARKERADDSET = 2466;
var SCI_MARKERSETALPHA = 2476;
var SCI_SETMARGINTYPEN = 2240;
var SCI_GETMARGINTYPEN = 2241;
var SCI_SETMARGINWIDTHN = 2242;
var SCI_GETMARGINWIDTHN = 2243;
var SCI_SETMARGINMASKN = 2244;
var SCI_GETMARGINMASKN = 2245;
var SCI_SETMARGINSENSITIVEN = 2246;
var SCI_GETMARGINSENSITIVEN = 2247;
var SCI_SETMARGINCURSORN = 2248;
var SCI_GETMARGINCURSORN = 2249;
var SCI_SETMARGINBACKN = 2250;
var SCI_GETMARGINBACKN = 2251;
var SCI_SETMARGINS = 2252;
var SCI_GETMARGINS = 2253;
var SCI_SETSELFORE = 2067;
var SCI_SETSELBACK = 2068;
var SCI_GETSELALPHA = 2477;
var SCI_SETSELALPHA = 2478;
var SCI_GETSELEOLFILLED = 2479;
var SCI_SETSELEOLFILLED = 2480;
var SCI_SETCARETFORE = 2069;
var SCI_ASSIGNCMDKEY = 2070;
var SCI_CLEARCMDKEY = 2071;
var SCI_CLEARALLCMDKEYS = 2072;
var SCI_SETSTYLINGEX = 2073;
var SCI_STYLESETVISIBLE = 2074;
var SCI_GETCARETPERIOD = 2075;
var SCI_SETCARETPERIOD = 2076;
var SCI_SETWORDCHARS = 2077;
var SCI_GETWORDCHARS = 2646;
var SCI_BEGINUNDOACTION = 2078;
var SCI_ENDUNDOACTION = 2079;
var SCI_INDICSETSTYLE = 2080;
var SCI_INDICGETSTYLE = 2081;
var SCI_INDICSETFORE = 2082;
var SCI_INDICGETFORE = 2083;
var SCI_INDICSETUNDER = 2510;
var SCI_INDICGETUNDER = 2511;
var SCI_INDICSETHOVERSTYLE = 2680;
var SCI_INDICGETHOVERSTYLE = 2681;
var SCI_INDICSETHOVERFORE = 2682;
var SCI_INDICGETHOVERFORE = 2683;
var SCI_INDICSETFLAGS = 2684;
var SCI_INDICGETFLAGS = 2685;
var SCI_SETWHITESPACEFORE = 2084;
var SCI_SETWHITESPACEBACK = 2085;
var SCI_SETWHITESPACESIZE = 2086;
var SCI_GETWHITESPACESIZE = 2087;
var SCI_SETSTYLEBITS = 2090;
var SCI_GETSTYLEBITS = 2091;
var SCI_SETLINESTATE = 2092;
var SCI_GETLINESTATE = 2093;
var SCI_GETMAXLINESTATE = 2094;
var SCI_GETCARETLINEVISIBLE = 2095;
var SCI_SETCARETLINEVISIBLE = 2096;
var SCI_GETCARETLINEBACK = 2097;
var SCI_SETCARETLINEBACK = 2098;
var SCI_STYLESETCHANGEABLE = 2099;
var SCI_AUTOCSHOW = 2100;
var SCI_AUTOCCANCEL = 2101;
var SCI_AUTOCACTIVE = 2102;
var SCI_AUTOCPOSSTART = 2103;
var SCI_AUTOCCOMPLETE = 2104;
var SCI_AUTOCSTOPS = 2105;
var SCI_AUTOCSETSEPARATOR = 2106;
var SCI_AUTOCGETSEPARATOR = 2107;
var SCI_AUTOCSELECT = 2108;
var SCI_AUTOCSETCANCELATSTART = 2110;
var SCI_AUTOCGETCANCELATSTART = 2111;
var SCI_AUTOCSETFILLUPS = 2112;
var SCI_AUTOCSETCHOOSESINGLE = 2113;
var SCI_AUTOCGETCHOOSESINGLE = 2114;
var SCI_AUTOCSETIGNORECASE = 2115;
var SCI_AUTOCGETIGNORECASE = 2116;
var SCI_USERLISTSHOW = 2117;
var SCI_AUTOCSETAUTOHIDE = 2118;
var SCI_AUTOCGETAUTOHIDE = 2119;
var SCI_AUTOCSETDROPRESTOFWORD = 2270;
var SCI_AUTOCGETDROPRESTOFWORD = 2271;
var SCI_REGISTERIMAGE = 2405;
var SCI_CLEARREGISTEREDIMAGES = 2408;
var SCI_AUTOCGETTYPESEPARATOR = 2285;
var SCI_AUTOCSETTYPESEPARATOR = 2286;
var SCI_AUTOCSETMAXWIDTH = 2208;
var SCI_AUTOCGETMAXWIDTH = 2209;
var SCI_AUTOCSETMAXHEIGHT = 2210;
var SCI_AUTOCGETMAXHEIGHT = 2211;
var SCI_SETINDENT = 2122;
var SCI_GETINDENT = 2123;
var SCI_SETUSETABS = 2124;
var SCI_GETUSETABS = 2125;
var SCI_SETLINEINDENTATION = 2126;
var SCI_GETLINEINDENTATION = 2127;
var SCI_GETLINEINDENTPOSITION = 2128;
var SCI_GETCOLUMN = 2129;
var SCI_COUNTCHARACTERS = 2633;
var SCI_SETHSCROLLBAR = 2130;
var SCI_GETHSCROLLBAR = 2131;
var SCI_SETINDENTATIONGUIDES = 2132;
var SCI_GETINDENTATIONGUIDES = 2133;
var SCI_SETHIGHLIGHTGUIDE = 2134;
var SCI_GETHIGHLIGHTGUIDE = 2135;
var SCI_GETLINEENDPOSITION = 2136;
var SCI_GETCODEPAGE = 2137;
var SCI_GETCARETFORE = 2138;
var SCI_GETREADONLY = 2140;
var SCI_SETCURRENTPOS = 2141;
var SCI_SETSELECTIONSTART = 2142;
var SCI_GETSELECTIONSTART = 2143;
var SCI_SETSELECTIONEND = 2144;
var SCI_GETSELECTIONEND = 2145;
var SCI_SETEMPTYSELECTION = 2556;
var SCI_SETPRINTMAGNIFICATION = 2146;
var SCI_GETPRINTMAGNIFICATION = 2147;
var SCI_SETPRINTCOLOURMODE = 2148;
var SCI_GETPRINTCOLOURMODE = 2149;
var SCI_FINDTEXT = 2150;
var SCI_FORMATRANGE = 2151;
var SCI_GETFIRSTVISIBLELINE = 2152;
var SCI_GETLINE = 2153;
var SCI_GETLINECOUNT = 2154;
var SCI_SETMARGINLEFT = 2155;
var SCI_GETMARGINLEFT = 2156;
var SCI_SETMARGINRIGHT = 2157;
var SCI_GETMARGINRIGHT = 2158;
var SCI_GETMODIFY = 2159;
var SCI_SETSEL = 2160;
var SCI_GETSELTEXT = 2161;
var SCI_GETTEXTRANGE = 2162;
var SCI_HIDESELECTION = 2163;
var SCI_POINTXFROMPOSITION = 2164;
var SCI_POINTYFROMPOSITION = 2165;
var SCI_LINEFROMPOSITION = 2166;
var SCI_POSITIONFROMLINE = 2167;
var SCI_LINESCROLL = 2168;
var SCI_SCROLLCARET = 2169;
var SCI_SCROLLRANGE = 2569;
var SCI_REPLACESEL = 2170;
var SCI_SETREADONLY = 2171;
var SCI_NULL = 2172;
var SCI_CANPASTE = 2173;
var SCI_CANUNDO = 2174;
var SCI_EMPTYUNDOBUFFER = 2175;
var SCI_UNDO = 2176;
var SCI_CUT = 2177;
var SCI_COPY = 2178;
var SCI_PASTE = 2179;
var SCI_CLEAR = 2180;
var SCI_SETTEXT = 2181;
var SCI_GETTEXT = 2182;
var SCI_GETTEXTLENGTH = 2183;
var SCI_GETDIRECTFUNCTION = 2184;
var SCI_GETDIRECTPOINTER = 2185;
var SCI_SETOVERTYPE = 2186;
var SCI_GETOVERTYPE = 2187;
var SCI_SETCARETWIDTH = 2188;
var SCI_GETCARETWIDTH = 2189;
var SCI_SETTARGETSTART = 2190;
var SCI_GETTARGETSTART = 2191;
var SCI_SETTARGETEND = 2192;
var SCI_GETTARGETEND = 2193;
var SCI_SETTARGETRANGE = 2686;
var SCI_GETTARGETTEXT = 2687;
var SCI_TARGETFROMSELECTION = 2287;
var SCI_TARGETWHOLEDOCUMENT = 2690;
var SCI_REPLACETARGET = 2194;
var SCI_REPLACETARGETRE = 2195;
var SCI_SEARCHINTARGET = 2197;
var SCI_SETSEARCHFLAGS = 2198;
var SCI_GETSEARCHFLAGS = 2199;
var SCI_CALLTIPSHOW = 2200;
var SCI_CALLTIPCANCEL = 2201;
var SCI_CALLTIPACTIVE = 2202;
var SCI_CALLTIPPOSSTART = 2203;
var SCI_CALLTIPSETPOSSTART = 2214;
var SCI_CALLTIPSETHLT = 2204;
var SCI_CALLTIPSETBACK = 2205;
var SCI_CALLTIPSETFORE = 2206;
var SCI_CALLTIPSETFOREHLT = 2207;
var SCI_CALLTIPUSESTYLE = 2212;
var SCI_CALLTIPSETPOSITION = 2213;
var SCI_VISIBLEFROMDOCLINE = 2220;
var SCI_DOCLINEFROMVISIBLE = 2221;
var SCI_WRAPCOUNT = 2235;
var SCI_SETFOLDLEVEL = 2222;
var SCI_GETFOLDLEVEL = 2223;
var SCI_GETLASTCHILD = 2224;
var SCI_GETFOLDPARENT = 2225;
var SCI_SHOWLINES = 2226;
var SCI_HIDELINES = 2227;
var SCI_GETLINEVISIBLE = 2228;
var SCI_GETALLLINESVISIBLE = 2236;
var SCI_SETFOLDEXPANDED = 2229;
var SCI_GETFOLDEXPANDED = 2230;
var SCI_TOGGLEFOLD = 2231;
var SCI_FOLDLINE = 2237;
var SCI_FOLDCHILDREN = 2238;
var SCI_EXPANDCHILDREN = 2239;
var SCI_FOLDALL = 2662;
var SCI_ENSUREVISIBLE = 2232;
var SCI_SETAUTOMATICFOLD = 2663;
var SCI_GETAUTOMATICFOLD = 2664;
var SCI_SETFOLDFLAGS = 2233;
var SCI_ENSUREVISIBLEENFORCEPOLICY = 2234;
var SCI_SETTABINDENTS = 2260;
var SCI_GETTABINDENTS = 2261;
var SCI_SETBACKSPACEUNINDENTS = 2262;
var SCI_GETBACKSPACEUNINDENTS = 2263;
var SCI_SETMOUSEDWELLTIME = 2264;
var SCI_GETMOUSEDWELLTIME = 2265;
var SCI_WORDSTARTPOSITION = 2266;
var SCI_WORDENDPOSITION = 2267;
var SCI_ISRANGEWORD = 2691;
var SCI_SETIDLESTYLING = 2692;
var SCI_GETIDLESTYLING = 2693;
var SCI_SETWRAPMODE = 2268;
var SCI_GETWRAPMODE = 2269;
var SCI_SETWRAPVISUALFLAGS = 2460;
var SCI_GETWRAPVISUALFLAGS = 2461;
var SCI_SETWRAPVISUALFLAGSLOCATION = 2462;
var SCI_GETWRAPVISUALFLAGSLOCATION = 2463;
var SCI_SETWRAPSTARTINDENT = 2464;
var SCI_GETWRAPSTARTINDENT = 2465;
var SCI_SETWRAPINDENTMODE = 2472;
var SCI_GETWRAPINDENTMODE = 2473;
var SCI_SETLAYOUTCACHE = 2272;
var SCI_GETLAYOUTCACHE = 2273;
var SCI_SETSCROLLWIDTH = 2274;
var SCI_GETSCROLLWIDTH = 2275;
var SCI_SETSCROLLWIDTHTRACKING = 2516;
var SCI_GETSCROLLWIDTHTRACKING = 2517;
var SCI_TEXTWIDTH = 2276;
var SCI_SETENDATLASTLINE = 2277;
var SCI_GETENDATLASTLINE = 2278;
var SCI_TEXTHEIGHT = 2279;
var SCI_SETVSCROLLBAR = 2280;
var SCI_GETVSCROLLBAR = 2281;
var SCI_APPENDTEXT = 2282;
var SCI_GETTWOPHASEDRAW = 2283;
var SCI_SETTWOPHASEDRAW = 2284;
var SCI_GETPHASESDRAW = 2673;
var SCI_SETPHASESDRAW = 2674;
var SCI_SETFONTQUALITY = 2611;
var SCI_GETFONTQUALITY = 2612;
var SCI_SETFIRSTVISIBLELINE = 2613;
var SCI_SETMULTIPASTE = 2614;
var SCI_GETMULTIPASTE = 2615;
var SCI_GETTAG = 2616;
var SCI_LINESJOIN = 2288;
var SCI_LINESSPLIT = 2289;
var SCI_SETFOLDMARGINCOLOUR = 2290;
var SCI_SETFOLDMARGINHICOLOUR = 2291;
var SCI_LINEDOWN = 2300;
var SCI_LINEDOWNEXTEND = 2301;
var SCI_LINEUP = 2302;
var SCI_LINEUPEXTEND = 2303;
var SCI_CHARLEFT = 2304;
var SCI_CHARLEFTEXTEND = 2305;
var SCI_CHARRIGHT = 2306;
var SCI_CHARRIGHTEXTEND = 2307;
var SCI_WORDLEFT = 2308;
var SCI_WORDLEFTEXTEND = 2309;
var SCI_WORDRIGHT = 2310;
var SCI_WORDRIGHTEXTEND = 2311;
var SCI_HOME = 2312;
var SCI_HOMEEXTEND = 2313;
var SCI_LINEEND = 2314;
var SCI_LINEENDEXTEND = 2315;
var SCI_DOCUMENTSTART = 2316;
var SCI_DOCUMENTSTARTEXTEND = 2317;
var SCI_DOCUMENTEND = 2318;
var SCI_DOCUMENTENDEXTEND = 2319;
var SCI_PAGEUP = 2320;
var SCI_PAGEUPEXTEND = 2321;
var SCI_PAGEDOWN = 2322;
var SCI_PAGEDOWNEXTEND = 2323;
var SCI_EDITTOGGLEOVERTYPE = 2324;
var SCI_CANCEL = 2325;
var SCI_DELETEBACK = 2326;
var SCI_TAB = 2327;
var SCI_BACKTAB = 2328;
var SCI_NEWLINE = 2329;
var SCI_FORMFEED = 2330;
var SCI_VCHOME = 2331;
var SCI_VCHOMEEXTEND = 2332;
var SCI_ZOOMIN = 2333;
var SCI_ZOOMOUT = 2334;
var SCI_DELWORDLEFT = 2335;
var SCI_DELWORDRIGHT = 2336;
var SCI_DELWORDRIGHTEND = 2518;
var SCI_LINECUT = 2337;
var SCI_LINEDELETE = 2338;
var SCI_LINETRANSPOSE = 2339;
var SCI_LINEDUPLICATE = 2404;
var SCI_LOWERCASE = 2340;
var SCI_UPPERCASE = 2341;
var SCI_LINESCROLLDOWN = 2342;
var SCI_LINESCROLLUP = 2343;
var SCI_DELETEBACKNOTLINE = 2344;
var SCI_HOMEDISPLAY = 2345;
var SCI_HOMEDISPLAYEXTEND = 2346;
var SCI_LINEENDDISPLAY = 2347;
var SCI_LINEENDDISPLAYEXTEND = 2348;
var SCI_HOMEWRAP = 2349;
var SCI_HOMEWRAPEXTEND = 2450;
var SCI_LINEENDWRAP = 2451;
var SCI_LINEENDWRAPEXTEND = 2452;
var SCI_VCHOMEWRAP = 2453;
var SCI_VCHOMEWRAPEXTEND = 2454;
var SCI_LINECOPY = 2455;
var SCI_MOVECARETINSIDEVIEW = 2401;
var SCI_LINELENGTH = 2350;
var SCI_BRACEHIGHLIGHT = 2351;
var SCI_BRACEHIGHLIGHTINDICATOR = 2498;
var SCI_BRACEBADLIGHT = 2352;
var SCI_BRACEBADLIGHTINDICATOR = 2499;
var SCI_BRACEMATCH = 2353;
var SCI_GETVIEWEOL = 2355;
var SCI_SETVIEWEOL = 2356;
var SCI_GETDOCPOINTER = 2357;
var SCI_SETDOCPOINTER = 2358;
var SCI_SETMODEVENTMASK = 2359;
var SCI_GETEDGECOLUMN = 2360;
var SCI_SETEDGECOLUMN = 2361;
var SCI_GETEDGEMODE = 2362;
var SCI_SETEDGEMODE = 2363;
var SCI_GETEDGECOLOUR = 2364;
var SCI_SETEDGECOLOUR = 2365;
var SCI_MULTIEDGEADDLINE = 2694;
var SCI_MULTIEDGECLEARALL = 2695;
var SCI_SEARCHANCHOR = 2366;
var SCI_SEARCHNEXT = 2367;
var SCI_SEARCHPREV = 2368;
var SCI_LINESONSCREEN = 2370;
var SCI_USEPOPUP = 2371;
var SCI_SELECTIONISRECTANGLE = 2372;
var SCI_SETZOOM = 2373;
var SCI_GETZOOM = 2374;
var SCI_CREATEDOCUMENT = 2375;
var SCI_ADDREFDOCUMENT = 2376;
var SCI_RELEASEDOCUMENT = 2377;
var SCI_GETMODEVENTMASK = 2378;
var SCI_SETFOCUS = 2380;
var SCI_GETFOCUS = 2381;
var SCI_SETSTATUS = 2382;
var SCI_GETSTATUS = 2383;
var SCI_SETMOUSEDOWNCAPTURES = 2384;
var SCI_GETMOUSEDOWNCAPTURES = 2385;
var SCI_SETMOUSEWHEELCAPTURES = 2696;
var SCI_GETMOUSEWHEELCAPTURES = 2697;
var SCI_SETCURSOR = 2386;
var SCI_GETCURSOR = 2387;
var SCI_SETCONTROLCHARSYMBOL = 2388;
var SCI_GETCONTROLCHARSYMBOL = 2389;
var SCI_WORDPARTLEFT = 2390;
var SCI_WORDPARTLEFTEXTEND = 2391;
var SCI_WORDPARTRIGHT = 2392;
var SCI_WORDPARTRIGHTEXTEND = 2393;
var SCI_SETVISIBLEPOLICY = 2394;
var SCI_DELLINELEFT = 2395;
var SCI_DELLINERIGHT = 2396;
var SCI_SETXOFFSET = 2397;
var SCI_GETXOFFSET = 2398;
var SCI_CHOOSECARETX = 2399;
var SCI_GRABFOCUS = 2400;
var SCI_SETXCARETPOLICY = 2402;
var SCI_SETYCARETPOLICY = 2403;
var SCI_SETPRINTWRAPMODE = 2406;
var SCI_GETPRINTWRAPMODE = 2407;
var SCI_SETHOTSPOTACTIVEFORE = 2410;
var SCI_GETHOTSPOTACTIVEFORE = 2494;
var SCI_SETHOTSPOTACTIVEBACK = 2411;
var SCI_GETHOTSPOTACTIVEBACK = 2495;
var SCI_SETHOTSPOTACTIVEUNDERLINE = 2412;
var SCI_GETHOTSPOTACTIVEUNDERLINE = 2496;
var SCI_SETHOTSPOTSINGLELINE = 2421;
var SCI_GETHOTSPOTSINGLELINE = 2497;
var SCI_PARADOWN = 2413;
var SCI_PARADOWNEXTEND = 2414;
var SCI_PARAUP = 2415;
var SCI_PARAUPEXTEND = 2416;
var SCI_POSITIONBEFORE = 2417;
var SCI_POSITIONAFTER = 2418;
var SCI_POSITIONRELATIVE = 2670;
var SCI_COPYRANGE = 2419;
var SCI_COPYTEXT = 2420;
var SCI_SETSELECTIONMODE = 2422;
var SCI_GETSELECTIONMODE = 2423;
var SCI_GETLINESELSTARTPOSITION = 2424;
var SCI_GETLINESELENDPOSITION = 2425;
var SCI_LINEDOWNRECTEXTEND = 2426;
var SCI_LINEUPRECTEXTEND = 2427;
var SCI_CHARLEFTRECTEXTEND = 2428;
var SCI_CHARRIGHTRECTEXTEND = 2429;
var SCI_HOMERECTEXTEND = 2430;
var SCI_VCHOMERECTEXTEND = 2431;
var SCI_LINEENDRECTEXTEND = 2432;
var SCI_PAGEUPRECTEXTEND = 2433;
var SCI_PAGEDOWNRECTEXTEND = 2434;
var SCI_STUTTEREDPAGEUP = 2435;
var SCI_STUTTEREDPAGEUPEXTEND = 2436;
var SCI_STUTTEREDPAGEDOWN = 2437;
var SCI_STUTTEREDPAGEDOWNEXTEND = 2438;
var SCI_WORDLEFTEND = 2439;
var SCI_WORDLEFTENDEXTEND = 2440;
var SCI_WORDRIGHTEND = 2441;
var SCI_WORDRIGHTENDEXTEND = 2442;
var SCI_SETWHITESPACECHARS = 2443;
var SCI_GETWHITESPACECHARS = 2647;
var SCI_SETPUNCTUATIONCHARS = 2648;
var SCI_GETPUNCTUATIONCHARS = 2649;
var SCI_SETCHARSDEFAULT = 2444;
var SCI_AUTOCGETCURRENT = 2445;
var SCI_AUTOCGETCURRENTTEXT = 2610;
var SCI_AUTOCSETCASEINSENSITIVEBEHAVIOUR = 2634;
var SCI_AUTOCGETCASEINSENSITIVEBEHAVIOUR = 2635;
var SCI_AUTOCSETMULTI = 2636;
var SCI_AUTOCGETMULTI = 2637;
var SCI_AUTOCSETORDER = 2660;
var SCI_AUTOCGETORDER = 2661;
var SCI_ALLOCATE = 2446;
var SCI_TARGETASUTF8 = 2447;
var SCI_SETLENGTHFORENCODE = 2448;
var SCI_ENCODEDFROMUTF8 = 2449;
var SCI_FINDCOLUMN = 2456;
var SCI_GETCARETSTICKY = 2457;
var SCI_SETCARETSTICKY = 2458;
var SCI_TOGGLECARETSTICKY = 2459;
var SCI_SETPASTECONVERTENDINGS = 2467;
var SCI_GETPASTECONVERTENDINGS = 2468;
var SCI_SELECTIONDUPLICATE = 2469;
var SCI_SETCARETLINEBACKALPHA = 2470;
var SCI_GETCARETLINEBACKALPHA = 2471;
var SCI_SETCARETSTYLE = 2512;
var SCI_GETCARETSTYLE = 2513;
var SCI_SETINDICATORCURRENT = 2500;
var SCI_GETINDICATORCURRENT = 2501;
var SCI_SETINDICATORVALUE = 2502;
var SCI_GETINDICATORVALUE = 2503;
var SCI_INDICATORFILLRANGE = 2504;
var SCI_INDICATORCLEARRANGE = 2505;
var SCI_INDICATORALLONFOR = 2506;
var SCI_INDICATORVALUEAT = 2507;
var SCI_INDICATORSTART = 2508;
var SCI_INDICATOREND = 2509;
var SCI_SETPOSITIONCACHE = 2514;
var SCI_GETPOSITIONCACHE = 2515;
var SCI_COPYALLOWLINE = 2519;
var SCI_GETCHARACTERPOINTER = 2520;
var SCI_GETRANGEPOINTER = 2643;
var SCI_GETGAPPOSITION = 2644;
var SCI_INDICSETALPHA = 2523;
var SCI_INDICGETALPHA = 2524;
var SCI_INDICSETOUTLINEALPHA = 2558;
var SCI_INDICGETOUTLINEALPHA = 2559;
var SCI_SETEXTRAASCENT = 2525;
var SCI_GETEXTRAASCENT = 2526;
var SCI_SETEXTRADESCENT = 2527;
var SCI_GETEXTRADESCENT = 2528;
var SCI_MARKERSYMBOLDEFINED = 2529;
var SCI_MARGINSETTEXT = 2530;
var SCI_MARGINGETTEXT = 2531;
var SCI_MARGINSETSTYLE = 2532;
var SCI_MARGINGETSTYLE = 2533;
var SCI_MARGINSETSTYLES = 2534;
var SCI_MARGINGETSTYLES = 2535;
var SCI_MARGINTEXTCLEARALL = 2536;
var SCI_MARGINSETSTYLEOFFSET = 2537;
var SCI_MARGINGETSTYLEOFFSET = 2538;
var SCI_SETMARGINOPTIONS = 2539;
var SCI_GETMARGINOPTIONS = 2557;
var SCI_ANNOTATIONSETTEXT = 2540;
var SCI_ANNOTATIONGETTEXT = 2541;
var SCI_ANNOTATIONSETSTYLE = 2542;
var SCI_ANNOTATIONGETSTYLE = 2543;
var SCI_ANNOTATIONSETSTYLES = 2544;
var SCI_ANNOTATIONGETSTYLES = 2545;
var SCI_ANNOTATIONGETLINES = 2546;
var SCI_ANNOTATIONCLEARALL = 2547;
var SCI_ANNOTATIONSETVISIBLE = 2548;
var SCI_ANNOTATIONGETVISIBLE = 2549;
var SCI_ANNOTATIONSETSTYLEOFFSET = 2550;
var SCI_ANNOTATIONGETSTYLEOFFSET = 2551;
var SCI_RELEASEALLEXTENDEDSTYLES = 2552;
var SCI_ALLOCATEEXTENDEDSTYLES = 2553;
var SCI_ADDUNDOACTION = 2560;
var SCI_CHARPOSITIONFROMPOINT = 2561;
var SCI_CHARPOSITIONFROMPOINTCLOSE = 2562;
var SCI_SETMOUSESELECTIONRECTANGULARSWITCH = 2668;
var SCI_GETMOUSESELECTIONRECTANGULARSWITCH = 2669;
var SCI_SETMULTIPLESELECTION = 2563;
var SCI_GETMULTIPLESELECTION = 2564;
var SCI_SETADDITIONALSELECTIONTYPING = 2565;
var SCI_GETADDITIONALSELECTIONTYPING = 2566;
var SCI_SETADDITIONALCARETSBLINK = 2567;
var SCI_GETADDITIONALCARETSBLINK = 2568;
var SCI_SETADDITIONALCARETSVISIBLE = 2608;
var SCI_GETADDITIONALCARETSVISIBLE = 2609;
var SCI_GETSELECTIONS = 2570;
var SCI_GETSELECTIONEMPTY = 2650;
var SCI_CLEARSELECTIONS = 2571;
var SCI_SETSELECTION = 2572;
var SCI_ADDSELECTION = 2573;
var SCI_DROPSELECTIONN = 2671;
var SCI_SETMAINSELECTION = 2574;
var SCI_GETMAINSELECTION = 2575;
var SCI_SETSELECTIONNCARET = 2576;
var SCI_GETSELECTIONNCARET = 2577;
var SCI_SETSELECTIONNANCHOR = 2578;
var SCI_GETSELECTIONNANCHOR = 2579;
var SCI_SETSELECTIONNCARETVIRTUALSPACE = 2580;
var SCI_GETSELECTIONNCARETVIRTUALSPACE = 2581;
var SCI_SETSELECTIONNANCHORVIRTUALSPACE = 2582;
var SCI_GETSELECTIONNANCHORVIRTUALSPACE = 2583;
var SCI_SETSELECTIONNSTART = 2584;
var SCI_GETSELECTIONNSTART = 2585;
var SCI_SETSELECTIONNEND = 2586;
var SCI_GETSELECTIONNEND = 2587;
var SCI_SETRECTANGULARSELECTIONCARET = 2588;
var SCI_GETRECTANGULARSELECTIONCARET = 2589;
var SCI_SETRECTANGULARSELECTIONANCHOR = 2590;
var SCI_GETRECTANGULARSELECTIONANCHOR = 2591;
var SCI_SETRECTANGULARSELECTIONCARETVIRTUALSPACE = 2592;
var SCI_GETRECTANGULARSELECTIONCARETVIRTUALSPACE = 2593;
var SCI_SETRECTANGULARSELECTIONANCHORVIRTUALSPACE = 2594;
var SCI_GETRECTANGULARSELECTIONANCHORVIRTUALSPACE = 2595;
var SCI_SETVIRTUALSPACEOPTIONS = 2596;
var SCI_GETVIRTUALSPACEOPTIONS = 2597;
var SCI_SETRECTANGULARSELECTIONMODIFIER = 2598;
var SCI_GETRECTANGULARSELECTIONMODIFIER = 2599;
var SCI_SETADDITIONALSELFORE = 2600;
var SCI_SETADDITIONALSELBACK = 2601;
var SCI_SETADDITIONALSELALPHA = 2602;
var SCI_GETADDITIONALSELALPHA = 2603;
var SCI_SETADDITIONALCARETFORE = 2604;
var SCI_GETADDITIONALCARETFORE = 2605;
var SCI_ROTATESELECTION = 2606;
var SCI_SWAPMAINANCHORCARET = 2607;
var SCI_MULTIPLESELECTADDNEXT = 2688;
var SCI_MULTIPLESELECTADDEACH = 2689;
var SCI_CHANGELEXERSTATE = 2617;
var SCI_CONTRACTEDFOLDNEXT = 2618;
var SCI_VERTICALCENTRECARET = 2619;
var SCI_MOVESELECTEDLINESUP = 2620;
var SCI_MOVESELECTEDLINESDOWN = 2621;
var SCI_SETIDENTIFIER = 2622;
var SCI_GETIDENTIFIER = 2623;
var SCI_RGBAIMAGESETWIDTH = 2624;
var SCI_RGBAIMAGESETHEIGHT = 2625;
var SCI_RGBAIMAGESETSCALE = 2651;
var SCI_MARKERDEFINERGBAIMAGE = 2626;
var SCI_REGISTERRGBAIMAGE = 2627;
var SCI_SCROLLTOSTART = 2628;
var SCI_SCROLLTOEND = 2629;
var SCI_SETTECHNOLOGY = 2630;
var SCI_GETTECHNOLOGY = 2631;
var SCI_CREATELOADER = 2632;
var SCI_FINDINDICATORSHOW = 2640;
var SCI_FINDINDICATORFLASH = 2641;
var SCI_FINDINDICATORHIDE = 2642;
var SCI_VCHOMEDISPLAY = 2652;
var SCI_VCHOMEDISPLAYEXTEND = 2653;
var SCI_GETCARETLINEVISIBLEALWAYS = 2654;
var SCI_SETCARETLINEVISIBLEALWAYS = 2655;
var SCI_SETLINEENDTYPESALLOWED = 2656;
var SCI_GETLINEENDTYPESALLOWED = 2657;
var SCI_GETLINEENDTYPESACTIVE = 2658;
var SCI_SETREPRESENTATION = 2665;
var SCI_GETREPRESENTATION = 2666;
var SCI_CLEARREPRESENTATION = 2667;
var SCI_STARTRECORD = 3001;
var SCI_STOPRECORD = 3002;
var SCI_SETLEXER = 4001;
var SCI_GETLEXER = 4002;
var SCI_COLOURISE = 4003;
var SCI_SETPROPERTY = 4004;
var SCI_SETKEYWORDS = 4005;
var SCI_SETLEXERLANGUAGE = 4006;
var SCI_LOADLEXERLIBRARY = 4007;
var SCI_GETPROPERTY = 4008;
var SCI_GETPROPERTYEXPANDED = 4009;
var SCI_GETPROPERTYINT = 4010;
var SCI_GETSTYLEBITSNEEDED = 4011;
var SCI_GETLEXERLANGUAGE = 4012;
var SCI_PRIVATELEXERCALL = 4013;
var SCI_PROPERTYNAMES = 4014;
var SCI_PROPERTYTYPE = 4015;
var SCI_DESCRIBEPROPERTY = 4016;
var SCI_DESCRIBEKEYWORDSETS = 4017;
var SCI_GETLINEENDTYPESSUPPORTED = 4018;
var SCI_ALLOCATESUBSTYLES = 4020;
var SCI_GETSUBSTYLESSTART = 4021;
var SCI_GETSUBSTYLESLENGTH = 4022;
var SCI_GETSTYLEFROMSUBSTYLE = 4027;
var SCI_GETPRIMARYSTYLEFROMSTYLE = 4028;
var SCI_FREESUBSTYLES = 4023;
var SCI_SETIDENTIFIERS = 4024;
var SCI_DISTANCETOSECONDARYSTYLES = 4025;
var SCI_GETSUBSTYLEBASES = 4026;

var SCI_STYLECLEARALL = 2050;
var SCI_STYLESETFORE = 2051;
var SCI_STYLESETBACK = 2052;
var SCI_STYLESETBOLD = 2053;
var SCI_STYLESETITALIC = 2054;
var SCI_STYLESETSIZE = 2055;
var SCI_STYLESETFONT = 2056;
var SCI_STYLESETEOLFILLED = 2057;
var SCI_STYLERESETDEFAULT = 2058;
var SCI_STYLESETUNDERLINE = 2059;
var SCI_STYLEGETFORE = 2481;
var SCI_STYLEGETBACK = 2482;
var SCI_STYLEGETBOLD = 2483;
var SCI_STYLEGETITALIC = 2484;
var SCI_STYLEGETSIZE = 2485;
var SCI_STYLEGETFONT = 2486;
var SCI_STYLEGETEOLFILLED = 2487;
var SCI_STYLEGETUNDERLINE = 2488;
var SCI_STYLEGETCASE = 2489;
var SCI_STYLEGETCHARACTERSET = 2490;
var SCI_STYLEGETVISIBLE = 2491;
var SCI_STYLEGETCHANGEABLE = 2492;
var SCI_STYLEGETHOTSPOT = 2493;
var SCI_STYLESETCASE = 2060;
var SCI_STYLESETSIZEFRACTIONAL = 2061;
var SCI_STYLEGETSIZEFRACTIONAL = 2062;
var SCI_STYLESETWEIGHT = 2063;
var SCI_STYLEGETWEIGHT = 2064;
var SCI_STYLESETCHARACTERSET = 2066;
var SCI_STYLESETHOTSPOT = 2409;

var STYLE_DEFAULT = 32;
var STYLE_LINENUMBER = 33;
var STYLE_BRACELIGHT = 34;
var STYLE_BRACEBAD = 35;
var STYLE_CONTROLCHAR = 36;
var STYLE_INDENTGUIDE = 37;
var STYLE_CALLTIP = 38;
var STYLE_LASTPREDEFINED = 39;
var STYLE_MAX = 255;

var SC_EOL_CRLF = 0;
var SC_EOL_CR = 1;
var SC_EOL_LF = 2;

var SCE_C_DEFAULT = 0;
var SCE_C_COMMENT = 1;
var SCE_C_COMMENTLINE = 2;
var SCE_C_COMMENTDOC = 3;
var SCE_C_NUMBER = 4;
var SCE_C_WORD = 5;
var SCE_C_STRING = 6;
var SCE_C_CHARACTER = 7;
var SCE_C_UUID = 8;
var SCE_C_PREPROCESSOR = 9;
var SCE_C_OPERATOR = 10;
var SCE_C_IDENTIFIER = 11;
var SCE_C_STRINGEOL = 12;
var SCE_C_VERBATIM = 13;
var SCE_C_REGEX = 14;
var SCE_C_COMMENTLINEDOC = 15;
var SCE_C_WORD2 = 16;
var SCE_C_COMMENTDOCKEYWORD = 17;
var SCE_C_COMMENTDOCKEYWORDERROR = 18;
var SCE_C_GLOBALCLASS = 19;
var SCE_C_STRINGRAW = 20;
var SCE_C_TRIPLEVERBATIM = 21;
var SCE_C_HASHQUOTEDSTRING = 22;
var SCE_C_PREPROCESSORCOMMENT = 23;
var SCE_C_PREPROCESSORCOMMENTDOC = 24;
var SCE_C_USERLITERAL = 25;
var SCE_C_TASKMARKER = 26;
var SCE_C_ESCAPESEQUENCE = 27;


var SC_CP_UTF8 = 65001;

var SC_MAX_MARGIN = 4;
var SC_MARGIN_SYMBOL = 0;
var SC_MARGIN_NUMBER = 1;
var SC_MARGIN_BACK = 2;
var SC_MARGIN_FORE = 3;
var SC_MARGIN_TEXT = 4;
var SC_MARGIN_RTEXT = 5;
var SC_MARGIN_COLOUR = 6;

var SC_IV_NONE = 0;
var SC_IV_REAL = 1;
var SC_IV_LOOKFORWARD = 2;
var SC_IV_LOOKBOTH = 3;

var SCFIND_WHOLEWORD = 0x2;
var SCFIND_MATCHCASE = 0x4;
var SCFIND_WORDSTART = 0x00100000;
var SCFIND_REGEXP = 0x00200000;
var SCFIND_POSIX = 0x00400000;
var SCFIND_CXX11REGEX = 0x00800000;

/* QT Key Value */
var Key_Escape = 0x01000000;
var Key_Tab = 0x01000001;
var Key_Backtab = 0x01000002;
var Key_Backspace = 0x01000003;
var Key_Return = 0x01000004;
var Key_Enter = 0x01000005;
var Key_Insert = 0x01000006;
var Key_Delete = 0x01000007;
var Key_Pause = 0x01000008;

var Key_Print = 0x01000009;
var Key_SysReq = 0x0100000a;
var Key_Clear = 0x0100000b;
var Key_Home = 0x01000010;
var Key_End = 0x01000011;
var Key_Left = 0x01000012;
var Key_Up = 0x01000013;
var Key_Right = 0x01000014;
var Key_Down = 0x01000015;
var Key_PageUp = 0x01000016;
var Key_PageDown = 0x01000017;
var Key_Shift = 0x01000020;
var Key_Control = 0x01000021;
var Key_Meta = 0x01000022;
var Key_Alt = 0x01000023;
var Key_AltGr = 0x01001103;
var Key_CapsLock = 0x01000024;
var Key_NumLock = 0x01000025;
var Key_ScrollLock = 0x01000026;
var Key_F1 = 0x01000030;
var Key_F2 = 0x01000031;
var Key_F3 = 0x01000032;
var Key_F4 = 0x01000033;
var Key_F5 = 0x01000034;
var Key_F6 = 0x01000035;
var Key_F7 = 0x01000036;
var Key_F8 = 0x01000037;
var Key_F9 = 0x01000038;
var Key_F10 = 0x01000039;
var Key_F11 = 0x0100003a;
var Key_F12 = 0x0100003b;
var Key_F13 = 0x0100003c;
var Key_F14 = 0x0100003d;
var Key_F15 = 0x0100003e;
var Key_F16 = 0x0100003f;
var Key_F17 = 0x01000040;
var Key_F18 = 0x01000041;
var Key_F19 = 0x01000042;
var Key_F20 = 0x01000043;
var Key_F21 = 0x01000044;
var Key_F22 = 0x01000045;
var Key_F23 = 0x01000046;
var Key_F24 = 0x01000047;
var Key_F25 = 0x01000048;
var Key_F26 = 0x01000049;
var Key_F27 = 0x0100004a;
var Key_F28 = 0x0100004b;
var Key_F29 = 0x0100004c;
var Key_F30 = 0x0100004d;
var Key_F31 = 0x0100004e;
var Key_F32 = 0x0100004f;
var Key_F33 = 0x01000050;
var Key_F34 = 0x01000051;
var Key_F35 = 0x01000052;
var Key_Super_L = 0x01000053;
var Key_Super_R = 0x01000054;
var Key_Menu = 0x01000055;
var Key_Hyper_L = 0x01000056;
var Key_Hyper_R = 0x01000057;
var Key_Help = 0x01000058;
var Key_Direction_L = 0x01000059;
var Key_Direction_R = 0x01000060;
var Key_Space = 0x20;
var Key_Any = Key_Space;
var Key_Exclam = 0x21;
var Key_QuoteDbl = 0x22;
var Key_NumberSign = 0x23;
var Key_Dollar = 0x24;
var Key_Percent = 0x25;
var Key_Ampersand = 0x26;
var Key_Apostrophe = 0x27;
var Key_ParenLeft = 0x28;
var Key_ParenRight = 0x29;
var Key_Asterisk = 0x2a;
var Key_Plus = 0x2b;
var Key_Comma = 0x2c;
var Key_Minus = 0x2d;
var Key_Period = 0x2e;
var Key_Slash = 0x2f;
var Key_0 = 0x30;
var Key_1 = 0x31;
var Key_2 = 0x32;
var Key_3 = 0x33;
var Key_4 = 0x34;
var Key_5 = 0x35;
var Key_6 = 0x36;
var Key_7 = 0x37;
var Key_8 = 0x38;
var Key_9 = 0x39;
var Key_Colon =     0x3a;
var Key_Semicolon = 0x3b;
var Key_Less =      0x3c;
var Key_Equal =     0x3d;
var Key_Greater =   0x3e;
var Key_Question =  0x3f;
var Key_At = 0x40;
var Key_A = 0x41;
var Key_B = 0x42;
var Key_C = 0x43;
var Key_D = 0x44;
var Key_E = 0x45;
var Key_F = 0x46;
var Key_G = 0x47;
var Key_H = 0x48;
var Key_I = 0x49;
var Key_J = 0x4a;
var Key_K = 0x4b;
var Key_L = 0x4c;
var Key_M = 0x4d;
var Key_N = 0x4e;
var Key_O = 0x4f;
var Key_P = 0x50;
var Key_Q = 0x51;
var Key_R = 0x52;
var Key_S = 0x53;
var Key_T = 0x54;
var Key_U = 0x55;
var Key_V = 0x56;
var Key_W = 0x57;
var Key_X = 0x58;
var Key_Y = 0x59;
var Key_Z = 0x5a;
var Key_ssharp = 0xdf;
var Key_Dollar = 0x24;
var Key_AsciiCircum = 0x5e;

var NoModifier      = 0x00000000;  //No modifier key is pressed.
var ShiftModifier   = 0x02000000;  //A Shift key on the keyboard is pressed.
var ControlModifier = 0x04000000;  //A Ctrl key on the keyboard is pressed.
var AltModifier     = 0x08000000;  //An Alt key on the keyboard is pressed.
var MetaModifier    = 0x10000000;  //A Meta key on the keyboard is pressed.

var SCI_CODETORMSG_ADDTAB = 9000;
var SCI_CODETORMSG_DELTAB = 9001;
var SCI_CODETORMSG_UPDTAB = 9001;

var SCE_JSON_DEFAULT = 0;
var SCE_JSON_NUMBER = 1;
var SCE_JSON_STRING = 2;
var SCE_JSON_STRINGEOL = 3;
var SCE_JSON_PROPERTYNAME = 4;
var SCE_JSON_ESCAPESEQUENCE = 5;
var SCE_JSON_LINECOMMENT = 6;
var SCE_JSON_BLOCKCOMMENT = 7;
var SCE_JSON_OPERATOR = 8;
var SCE_JSON_URI = 9;
var SCE_JSON_COMPACTIRI = 10;
var SCE_JSON_KEYWORD = 11;
var SCE_JSON_LDKEYWORD = 12;
var SCE_JSON_ERROR = 13;

var SDL_SYSTEM_CURSOR_ARROW = 0;     /**< Arrow */
var SDL_SYSTEM_CURSOR_IBEAM = 1;     /**< I-beam */
var SDL_SYSTEM_CURSOR_WAIT  = 2;     /**< Wait */
var SDL_SYSTEM_CURSOR_CROSSHAIR = 3; /**< Crosshair */
var SDL_SYSTEM_CURSOR_WAITARROW = 4; /**< Small wait cursor (or Wait if not available) */
var SDL_SYSTEM_CURSOR_SIZENWSE = 5;  /**< Double arrow pointing northwest and southeast */
var SDL_SYSTEM_CURSOR_SIZENESW = 6;  /**< Double arrow pointing northeast and southwest */
var SDL_SYSTEM_CURSOR_SIZEWE = 7;    /**< Double arrow pointing west and east */
var SDL_SYSTEM_CURSOR_SIZENS = 8;    /**< Double arrow pointing north and south */
var SDL_SYSTEM_CURSOR_SIZEALL = 9;   /**< Four pointed arrow pointing north, south, east, and west */
var SDL_SYSTEM_CURSOR_NO = 10;       /**< Slashed circle or crossbones */
var SDL_SYSTEM_CURSOR_HAND = 11;     /**< Hand */
var SDL_NUM_SYSTEM_CURSORS = 12;

EDGE_NONE = 0;
EDGE_LINE = 1;

