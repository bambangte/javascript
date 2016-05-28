$(function() {
    $(putEmoAbove)
 .before('<div style="text-align:center" class="emoWrap"><b>Klik emoticon untuk melihat kode!</b><br/>Untuk sisipkan emoticon, taruh kode di komentar dan beri 1 spasi sebelum kode.<br/><br/> :14: :c: :37: :38: :i: :d: :f: :g: :k: :l: :p: :r: :s: :t: :u: :v: :w: :q: :y: :2: :6: :17: :21: :26: :27: :29: :30: :) :)) ;(( :-) =)) ;( ;-( :d :-d @-) :p :o :&gt;) (o) [-( 8-) :-b  b-( (k) (h) (c) cheer </div>');
 $(putEmoAbove1)
 .before('<div style="text-align:center" class="emoWrap"> :146: :140: :141: :142: :143: :144: :145: :39: :40: :41: :42: :43: :44: :45: :46: </div>');
  $(putEmoAbove2)
 .before('<div style="text-align:center" class="emoWrap"> :) :)) ;(( :-) =)) ;( ;-( :d :-d @-) :p :o :&gt;) (o) [-( 8-) :-b  b-( (k) (h) (c) cheer </div>');
  $(putEmoAbove3)
 .before('<div style="text-align:center" class="emoWrap"> :48: :79: :51: :97: :99: :96: :55: :56: :88: :60: :61: :65: :62: :63: :72: :76: :92: :64: :86: :90: :91: </div>');
  $(putEmoAbove4)
 .before('<div style="text-align:center" class="emoWrap"> :103: :104: :105: :106: :107: :108: :109: :110: :111: :112: :113: :114: :115: :116: :117: :118: :119: </div>');
   $(putEmoAbove5)
 .before('<div style="text-align:center" class="emoWrap"> :120: :121: :122: :123: :124: :125: :126: :127: :128: :129: :130: :131: :132: :133: :134: :135: :136: :137: :138: :139:  </div>');
    $(putEmoAbove6)
 .before('<div style="text-align:center" class="emoWrap"> :14: :c: :37: :38: :i: :d: :f: :g: :s: :t: :u: :v: :2: :6: :21: :26: :27: </div>');
    var emo = function(emo, imgRep, emoKey) {
        $(emoRange)
            .each(function() {
            $(this)
                .html($(this)
                .html()
                .replace(/<br>:/g, "<br> :")
                .replace(/<br>;/g, "<br> ;")
                .replace(/<br>=/g, "<br> =")
                .replace(/<br>\^/g, "<br> ^")
                .replace(emo, " <img style='max-height:35px' src='" + imgRep + "' class='emo delayLoad' alt='" + emoKey + "' />"));
        });
    };

emo(/\s:a:/ig, "https://lh6.googleusercontent.com/-NMQeXjTevk0/U29DA-YrKqI/AAAAAAAADBk/SYsZ_wOW4e0/h120/a+ultah.gif", ":a:");
emo(/\s:b:/ig, "https://lh6.googleusercontent.com/-CTjnqv9YNo8/U29DBSJt_qI/AAAAAAAADBs/haJHvGVkJT4/h120/b+traveller.gif",  ":b:");
emo(/\s:c:/ig, "https://lh4.googleusercontent.com/-253YadZTcYw/U29DBjSyobI/AAAAAAAADBw/BOtHO-F4tC8/h120/c+toastcendol.gif", ":c:");
emo(/\s:d:/ig, "https://lh6.googleusercontent.com/-0gxE0kUo54Q/U29DB6nDGYI/AAAAAAAADCQ/IdO0-nkQ-ps/h120/d+fd_5.gif",  ":d:");
emo(/\s:e:/ig, "https://lh3.googleusercontent.com/-mzr2gYJYkW4/U29DCUEyGII/AAAAAAAADB8/Dyk9tdTHsjY/h120/e+fd_5.gif",  ":e:");
emo(/\s:f:/ig, "https://lh6.googleusercontent.com/-JT-kxLp1rps/U29DC7l_3bI/AAAAAAAADB4/SJx9nWTozyE/h120/f+sundul.gif", ":f:");
emo(/\s:g:/ig, "https://lh3.googleusercontent.com/-iFdlqAc076Q/U29DD9qEpuI/AAAAAAAADCM/2iyTQDErJV8/h120/g+sorry.gif", ":g:");
emo(/\s:h:/ig, "https://lh6.googleusercontent.com/-ywDciho59I8/U29DFdnx3TI/AAAAAAAADCc/wZu3cL1iIyo/h120/h+shakehand2.gif", ":h:");
emo(/\s:i:/ig, "https://lh5.googleusercontent.com/-b6b9xILe7QQ/U29DIcCscxI/AAAAAAAADCk/Q39Rrfo5d2Q/h120/i+selamat.gif", ":i:");
emo(/\s:j:/ig, "https://lh4.googleusercontent.com/-VHryfne_lAI/U29DKCXQQbI/AAAAAAAADCs/Y5oi6MmoWFI/h120/j+lebaran03.gif", ":j:");
emo(/\s:k:/ig, "https://lh5.googleusercontent.com/-pJtrHvdYzAo/U29DPA5BN1I/AAAAAAAADC0/81Gfddsk0Eo/h120/k+salah_kamar.gif", ":k:");
emo(/\s:l:/ig, "https://lh5.googleusercontent.com/-RgOEgVqaxIc/U29DPyim40I/AAAAAAAADC8/rAUkZcbRJWU/h120/l+request.gif", ":l:");
emo(/\s:m:/ig, "https://lh6.googleusercontent.com/-OE_ZSi6xL2w/U29DUilcLBI/AAAAAAAADDM/Gv9FgvYXeeQ/h120/m+fd_7.gif", ":m:");
emo(/\s:n:/ig, "https://lh6.googleusercontent.com/-JldI4BS-J5U/U29DVUKdteI/AAAAAAAADDU/gQmEaLyb_hk/h120/n+s_sm_repost2.gif", ":n:");
emo(/\s:o:/ig, "https://lh4.googleusercontent.com/-b9cuWYpSFeg/U29DWPr4XEI/AAAAAAAADDc/RV4PnXXx_uA/h120/o+s_sm_repost1.gif", ":o:");
emo(/\s:p:/ig, "https://lh6.googleusercontent.com/-6Btbod_nWbY/U29DW8vnjEI/AAAAAAAADDk/Pxot9Tiz8rU/h120/p+recseller.gif", ":p:");
emo(/\s:q:/ig, "https://lh4.googleusercontent.com/-Am-WOettyQ8/U29DX6g1WWI/AAAAAAAADDs/D6vfzVyF2Tg/h120/q+rate5.gif", ":q:");
emo(/\s:r:/ig, "https://lh6.googleusercontent.com/-6X3CbOlBj50/U29DYYiNzXI/AAAAAAAADD0/Vi3vKDPiakk/h120/r+peluk.gif", ":r:");
emo(/\s:s:/ig, "https://lh4.googleusercontent.com/-WovXoTcSgvs/U29DZYDr2KI/AAAAAAAADD8/qWUT_Vp63sU/h120/s+nosara.gif", ":s:");
emo(/\s:t:/ig, "https://lh5.googleusercontent.com/-vPC506O06sY/U29DafQ824I/AAAAAAAADEE/V59tUFMNWLg/h120/t+nohope.gif", ":t:");
emo(/\s:u:/ig, "https://lh6.googleusercontent.com/-NnfmuYPuuSs/U29Da58fWbI/AAAAAAAADEM/eSQHfKfScKs/h120/u+ngakak.gif", ":u:");
emo(/\s:v:/ig, "https://lh6.googleusercontent.com/-g2PntoFMAYw/U29Dby4HM_I/AAAAAAAADEU/veFTTzYC5Dg/h120/v+ngacir2.gif", ":v:");
emo(/\s:w:/ig, "https://lh3.googleusercontent.com/-osmpH3qXHeE/U29DeJo_voI/AAAAAAAADEc/3wtA0mWp9Sk/h120/w+ngacir3.gif", ":w:");
emo(/\s:x:/ig, "https://lh4.googleusercontent.com/-gDzDob7j14Q/U29DfWQbU_I/AAAAAAAADEk/UU0FRjUnUkU/h120/x+najis.gif", ":x:");
emo(/\s:y:/ig, "https://lh5.googleusercontent.com/-Y8r8DrAnYWM/U29DgfawSCI/AAAAAAAADEs/RwCa5nNC3Gk/h120/y+mewek.gif", ":y:");
emo(/\s:z:/ig, "https://lh3.googleusercontent.com/-h7JfcTI4H9U/U29Dgkm9yrI/AAAAAAAADE0/b1rMSoR3u00/h120/z+matabelo1.gif", ":z:");
emo(/\s:1:/g, "https://lh4.googleusercontent.com/-t-Z4t5IQv_A/U29IFv26vWI/AAAAAAAADFE/AsairJDO47M/h120/1+marah.gif", ":1:");
emo(/\s:2:/g, "https://lh3.googleusercontent.com/-v4Da06JYg3U/U29IKcMuabI/AAAAAAAADGQ/vMZzZ1BFZFE/h120/2+malu.gif", ":2:");
emo(/\s:3:/g, "https://lh4.googleusercontent.com/-M144AvC64OA/U29IOz2FMcI/AAAAAAAADHw/aiApmUTngHQ/h120/3+lebaran04.gif", ":3:");
emo(/\s:4:/g, "https://lh4.googleusercontent.com/-Pn4gZ_Ng_YA/U29ISAxkJWI/AAAAAAAADIs/BkoRecdcD04/h120/4+lebaran01.gif", ":4:");
emo(/\s:5:/g, "https://lh6.googleusercontent.com/-7D2emGpjqq8/U29IS_4XsfI/AAAAAAAADI8/WqLkAdIwq2o/h120/5+fd_6.gif", ":5:");
emo(/\s:6:/g, "https://lh3.googleusercontent.com/-Nm_KB3FacQw/U29ITd5K4eI/AAAAAAAADJA/9NktniaePhI/h120/6+kaskus_radio.gif", ":6:");
emo(/\s:7:/g, "https://lh3.googleusercontent.com/-OgBCpnBMSWY/U29IT9F8EHI/AAAAAAAADJI/fjbhdHUnXPg/h120/7+cewek.gif", ":7:");
emo(/\s:8:/g, "https://lh6.googleusercontent.com/-WOSnljTjPfM/U29IUfz13AI/AAAAAAAADJQ/r0UH_TemDHY/h120/8+kimpoi.gif", ":8:");
emo(/\s:9:/g, "https://lh6.googleusercontent.com/-CYkyHZPxmMc/U29IVEleTXI/AAAAAAAADJc/MkzuIEnJwj8/h120/9+lebaran05.gif", ":9:");
emo(/\s:10:/g, "https://lh4.googleusercontent.com/-4uu_7cM1p78/U29IFedzSzI/AAAAAAAADFI/OBJmPvYRLkk/h120/10+fd_4.gif", ":10:");
emo(/\s:11:/g, "https://lh3.googleusercontent.com/-ZvWHw85PBns/U29IFfryasI/AAAAAAAADFA/sgQxATJifzk/h120/11+fd_8.gif", ":11:");
emo(/\s:12:/g, "https://lh5.googleusercontent.com/-sUButwmXD6U/U29IGpQDCXI/AAAAAAAADFY/Iuk5VB1M-Yo/h120/12+fd_1.gif", ":12:");
emo(/\s:13:/g, "https://lh6.googleusercontent.com/-HtA2tuEaMhc/U29IHOmCu5I/AAAAAAAADFc/dg9lqJEuE_M/h120/13+s_sm_ilovekaskus.gif", ":13:");
emo(/\s:14:/g, "https://lh6.googleusercontent.com/-InclzN18-2I/U29IHBbueEI/AAAAAAAADFk/yVtlucwuOBE/h120/14+I-Luv-Indonesia.gif", ":14:");
emo(/\s:15:/g, "https://lh5.googleusercontent.com/-W3thxdH_dPM/U29IHpu38MI/AAAAAAAADFo/3vqHpjgFiFI/h120/15+hoax.gif", ":15:");
emo(/\s:16:/g, "https://lh4.googleusercontent.com/-leMCwE52iA4/U29IHxEJ0WI/AAAAAAAADFw/_9i4Ar5Kac4/h120/16+hotnews.gif", ":16:");
emo(/\s:17:/g, "https://lh5.googleusercontent.com/-fAlXgiXMAwM/U29IJYJ4HpI/AAAAAAAADGA/3od2lHVYGcg/h120/17+hammer.gif", ":17:");
emo(/\s:18:/g, "https://lh6.googleusercontent.com/-fhoKKEKcU6I/U29IJyM_40I/AAAAAAAADGI/uxMRwwYZzzg/h120/18+games.gif", ":18:");
emo(/\s:19:/g, "https://lh5.googleusercontent.com/-CDuxZqKkIKg/U29IKF3V8DI/AAAAAAAADGM/USvggCBb9d4/h120/19+dp.gif", ":19:");
emo(/\s:20:/g, "https://lh3.googleusercontent.com/-0Xuuo7RJ3rA/U29IKhwZXsI/AAAAAAAADGU/rPjwzvW-52s/h120/20+cystg.gif", ":20:");
emo(/\s:21:/g, "https://lh4.googleusercontent.com/-AM336MDEbes/U29IK_6JyuI/AAAAAAAADGc/j1NtIgzszzw/h120/21+cool2.gif", ":21:");
emo(/\s:22:/g, "https://lh5.googleusercontent.com/-5lN5kwGiA5M/U29ILovnOkI/AAAAAAAADGk/6VJkuXhxMTk/h120/22+s_big_cendol.gif", ":22:");
emo(/\s:23:/g, "https://lh3.googleusercontent.com/-B2aoca5eQ44/U29IL3AEnxI/AAAAAAAADGs/ZXaMtlEIbJw/h120/23+cekpm.gif", ":23:");
emo(/\s:24:/g, "https://lh5.googleusercontent.com/-dcsgdaoqm4U/U29IMNZhQwI/AAAAAAAADG0/rbO_05Z6rng/h120/24+fd_2.gif", ":24:");
emo(/\s:25:/g, "https://lh3.googleusercontent.com/-c1_Sv3p3qAI/U29IMahuuzI/AAAAAAAADG8/gGv6ki2daek/h120/25+bola.gif", ":25:");
emo(/\s:26:/g, "https://lh4.googleusercontent.com/-fcYLKJuiYAU/U29IMxIhkoI/AAAAAAAADHA/oGUvG9F6OT4/h120/25+capede.gif", ":26:");
emo(/\s:27:/g, "https://lh5.googleusercontent.com/-F8GJWBBZacw/U29INrYXyvI/AAAAAAAADHM/nlwj_4hdSwM/h120/27+bingung.gif", ":27:");
emo(/\s:28:/g, "https://lh4.googleusercontent.com/-1fisxfuXgj0/U29INgzqQqI/AAAAAAAADHg/ftnL4fzBWno/h120/28+fd_3.gif", ":28:");
emo(/\s:29:/g, "https://lh5.googleusercontent.com/-_MCm44N2fwU/U29IN_x-6jI/AAAAAAAADHQ/RGJi-4ugDiQ/h120/29+s_sm_maho.gif", ":29:");
emo(/\s:30:/g, "https://lh5.googleusercontent.com/-Z9crZqc94ro/U29IPLcF8OI/AAAAAAAADHs/R76vC_cqq1s/h120/30+berduka.gif", ":30:");
emo(/\s:31:/g, "https://lh5.googleusercontent.com/-pmFht_tT48Y/U29IPfFMLqI/AAAAAAAADH4/wwGq3FvQiOc/h120/31+lebaran02.gif", ":31:");
emo(/\s:32:/g, "https://lh5.googleusercontent.com/-8TUIQbXYKSs/U29IP7UyXvI/AAAAAAAADIA/MARwGQD5jr4/h120/32+s_big_batamerah.gif", ":32:");
emo(/\s:33:/g, "https://lh6.googleusercontent.com/-hWbW5_uRVlg/U29IQPk27UI/AAAAAAAADIE/apvbGY3sgyo/h120/33+babygirl.gif", ":33:");
emo(/\s:34:/g, "https://lh4.googleusercontent.com/-jjQFWtQdzDQ/U29IQhLSuVI/AAAAAAAADIM/fAxkrDndoC0/h120/34+babyboy1.gif", ":34:");
emo(/\s:35:/g, "https://lh3.googleusercontent.com/-le_xiz_Mx_8/U29IQw8oFaI/AAAAAAAADIU/8kCEWSZ00Hg/h120/35+babyboy.gif", ":35:");
emo(/\s:36:/g, "https://lh4.googleusercontent.com/-QUdQQtPJww0/U29IRAecLpI/AAAAAAAADIY/BWJOm2g0l18/h120/36+angel1.gif", ":36:");
emo(/\s:37:/g, "https://lh6.googleusercontent.com/-EvvkkUSgyAk/U29IRcLJ9-I/AAAAAAAADIk/15byGEuTYpg/h120/37+jempol2.gif", ":37:");
emo(/\s:38:/g, "https://lh4.googleusercontent.com/-xWwpg7YYqKY/U29IRxcNzzI/AAAAAAAADJg/lqQoChIcw78/h120/38+jempol1.gif", ":38:");
emo(/\s:39:/g, "http://1.bp.blogspot.com/-bIBXt9ZTjpE/UO-7KXFzOrI/AAAAAAAABmQ/wKAFZpkHpvE/s1600/seociyus_panda_007.gif", ":39:");
emo(/\s:40:/g, "http://1.bp.blogspot.com/-_0BK6jw-H9g/UO-7KWe5FjI/AAAAAAAABmM/h8PH6GSg9P8/s1600/seociyus_panda_001.gif", ":40:");
emo(/\s:41:/g, "http://4.bp.blogspot.com/-tdSLZUcN-dM/UO-7KbEtbXI/AAAAAAAABmU/ybKdXmOHLeA/s1600/seociyus_panda_009.gif", ":41:");
emo(/\s:42:/g, "http://4.bp.blogspot.com/-8S3_qXrjUm8/UO_iTlQkeeI/AAAAAAAABqw/m80x8DR7La4/s1600/seociyus_panda_003.gif", ":42:");
emo(/\s:43:/g, "http://3.bp.blogspot.com/-l_HQntccGok/UO-7Lu9MwrI/AAAAAAAABmg/T-kHVv5URok/s1600/seociyus_panda_015.gif", ":43:");
emo(/\s:44:/g, "http://2.bp.blogspot.com/-IG4VKvB6eZs/UO-7LjQ1HEI/AAAAAAAABmk/ySWZCIo5iSw/s1600/seociyus_panda_016.gif", ":44:");
emo(/\s:45:/g, "http://1.bp.blogspot.com/-w2YZFFO6q3U/UO-7MOsCncI/AAAAAAAABms/FWSEkN_tS-g/s1600/seociyus_panda_019.gif", ":45:");
emo(/\s:46:/g, "http://2.bp.blogspot.com/-7xgx5D5b_kg/UO-7Mtf3NdI/AAAAAAAABm0/Ki-QYYKXlsA/s1600/seociyus_panda_020.gif", ":46:");
emo(/\s:47:/g, "http://3.bp.blogspot.com/-_-f2HKRWDnE/UZmH7Fr59aI/AAAAAAAAAjk/Kyeg3Lh_Gvg/s1600/a.gif", ":47:");
emo(/\s:48:/g, "http://1.bp.blogspot.com/-c2GYIse0h94/UZmH7iv2a9I/AAAAAAAAAjs/bHgwTKcb2Es/s1600/b.gif", ":48:");
emo(/\s:49:/g, "http://1.bp.blogspot.com/-MuJk7zIAwfk/UZmIHeIKysI/AAAAAAAAAkE/hndZOHO7qgY/s1600/c.gif", ":49:");
emo(/\s:50:/g, "http://3.bp.blogspot.com/-JG6Y4KgBzgs/UZmIGtGmqBI/AAAAAAAAAj8/Qh_rCKbM3Jc/s1600/d.gif", ":50:");
emo(/\s:51:/g, "http://4.bp.blogspot.com/-t1QdvGo95hI/UZmIHyVqVSI/AAAAAAAAAkM/1iiaKnhN418/s1600/e.gif", ":51:");
emo(/\s:52:/g, "http://1.bp.blogspot.com/-9VLGZSxoPgs/UZmUkjw65TI/AAAAAAAAAmU/wQylGHX76bg/s1600/f.gif", ":52:");
emo(/\s:53:/g, "http://4.bp.blogspot.com/-Mcy-6Go-WhE/UZmINgOTP8I/AAAAAAAAAkU/ek84Ky95qx0/s1600/g.gif", ":53:");
emo(/\s:54:/g, "http://3.bp.blogspot.com/-oUacvmRTDqk/UZmINwvAuEI/AAAAAAAAAkg/-_RCsIPT-Y0/s1600/h.gif", ":54:");
emo(/\s:55:/g, "http://3.bp.blogspot.com/-TfwrFtIZ_AE/UZmIYJNiz0I/AAAAAAAAAks/MtSHCR9Gdis/s1600/i.gif", ":55:");
emo(/\s:56:/g, "http://1.bp.blogspot.com/-rk8-e5yfC4U/UZmIe8fZ0tI/AAAAAAAAAk0/ewgj1tvPOxU/s1600/j.gif", ":56:");
emo(/\s:57:/g, "http://2.bp.blogspot.com/-24C6X0Bv3Ho/UZmIgiMwZlI/AAAAAAAAAk8/nDMJTqV_1i8/s1600/k.gif", ":57:");
emo(/\s:58:/g, "http://3.bp.blogspot.com/-THkSVkqacPg/UZmIlvqbRrI/AAAAAAAAAlE/xR5G8xZ9oPk/s1600/l.gif", ":58:");
emo(/\s:59:/g, "http://3.bp.blogspot.com/-cUzrnPmRnoI/UZmInIzwiFI/AAAAAAAAAlM/y1qaTyaNur8/s1600/m.gif", ":59:");
emo(/\s:60:/g, "http://4.bp.blogspot.com/-XQc6kTmARXY/UZmIxAWA3HI/AAAAAAAAAlU/aeRMZHgIz7A/s1600/n.gif", ":60:");
emo(/\s:61:/g, "http://1.bp.blogspot.com/-yrxtZ-Jz4TI/UZmIy59BB5I/AAAAAAAAAlc/DndPlxVxW30/s1600/o.gif", ":61:");
emo(/\s:62:/g, "http://2.bp.blogspot.com/-gcHTn7L62Qc/UZmI5EUWQdI/AAAAAAAAAlk/Wsy8aH151aI/s1600/p.gif", ":62:");
emo(/\s:63:/g, "http://1.bp.blogspot.com/-IbmRfS94_6g/UZmJWJckVwI/AAAAAAAAAl8/FkSBqim3dm0/s1600/q.gif", ":63:");
emo(/\s:64:/g, "http://1.bp.blogspot.com/-iMxgwOu11ls/UZmJHoDRU5I/AAAAAAAAAls/xZ2i-RKtbXk/s1600/r.gif", ":64:");
emo(/\s:65:/g, "http://4.bp.blogspot.com/-5mZN40zZBGs/UZmJVQItw8I/AAAAAAAAAl0/Qld129GjmUU/s1600/s.gif", ":65:");
emo(/\s:66:/g, "http://2.bp.blogspot.com/-7BWljhlUlzc/UZmJdfUZscI/AAAAAAAAAmE/MOYYmiNGNFk/s1600/t.gif", ":66:");
emo(/\s:67:/g, "http://4.bp.blogspot.com/-ctq1JGSfi04/VMs_DO-IawI/AAAAAAAAGDo/TXNXabJEhxw/s1600/023.gif", ":67:");
emo(/\s:68:/g, "http://3.bp.blogspot.com/-ppxwA2txMDk/VMs_GQk3_xI/AAAAAAAAGDw/5pnTmRL2O7g/s1600/037.gif", ":68:");
emo(/\s:69:/g, "http://4.bp.blogspot.com/-wbB4rtqx3rg/VMs7Vt22SXI/AAAAAAAAF_Y/QyPg1J_KnPI/s1600/0fbbf481.gif", ":69:");
emo(/\s:70:/g, "http://4.bp.blogspot.com/-7_Ev245oaYM/VMs7RJz1jxI/AAAAAAAAF_A/2U6GQ1Yuqdw/s1600/04a97f13.gif", ":70:");
emo(/\s:71:/g, "http://2.bp.blogspot.com/-kmfaq-yDJgA/VMs7cRGmiEI/AAAAAAAAGAA/cK5i-IQpb0Y/s1600/4d6161fd.gif", ":71:");
emo(/\s:72:/g, "http://2.bp.blogspot.com/-BO9Q0oFU47k/VMs7gngNoDI/AAAAAAAAGAI/nNfLQZRUWDY/s1600/5c745924.gif", ":72:");
emo(/\s:73:/g, "http://1.bp.blogspot.com/-3qBqDF3Ft80/VMs7i_nv3HI/AAAAAAAAGAQ/sGlXzD_puEw/s1600/5fc0f220.gif", ":73:");
emo(/\s:74:/g, "http://2.bp.blogspot.com/-GkW4IXd21rk/VMs-wiC6PaI/AAAAAAAAGDg/7jp8r6L28p4/s1600/047352f3.gif", ":74:");
emo(/\s:75:/g, "http://1.bp.blogspot.com/-ROUUKMxI4as/VMs7nJrNPPI/AAAAAAAAGAo/hCVWIW0GQb4/s1600/6f428754.gif", ":75:");
emo(/\s:76:/g, "http://1.bp.blogspot.com/-Qda3GKDfzYU/VMs7bAaCgZI/AAAAAAAAF_4/iWqOqcNkugQ/s1600/33c4b951.gif", ":76:");
emo(/\s:77:/g, "http://2.bp.blogspot.com/-akwsID-aYXE/VMs7jrTCOyI/AAAAAAAAGAY/tQv6CzHc8ac/s1600/63d4808b.gif", ":77:");
emo(/\s:78:/g, "http://4.bp.blogspot.com/-dABm_wew45I/VMs7mUo-OiI/AAAAAAAAGAg/9LJTXcim_yU/s1600/64caf316.gif", ":78:");
emo(/\s:79:/g, "http://4.bp.blogspot.com/-PNbtNh5bTJk/VMs7Spcc4DI/AAAAAAAAF_Q/4mCJbobt29w/s1600/069.gif", ":79:");
emo(/\s:80:/g, "http://1.bp.blogspot.com/-NcUA3S-bDYY/VMs7RiDYxiI/AAAAAAAAF_E/OyDC_pBLVG8/s1600/071.gif", ":80:");
emo(/\s:81:/g, "http://1.bp.blogspot.com/-UNvhL_SWPIk/VMs7Z5II8QI/AAAAAAAAF_w/d4F5zh1dJ-U/s1600/233cd70a.gif", ":81:");
emo(/\s:82:/g, "http://3.bp.blogspot.com/-SnhVy_ltt24/VMs7W2eP9KI/AAAAAAAAF_o/KTHZGJuyIfw/s1600/154218d4.gif", ":82:");
emo(/\s:83:/g, "http://4.bp.blogspot.com/-2W9lrVReHLs/VMs7ogVCT1I/AAAAAAAAGAw/aQdVWo0VQWk/s1600/875328cc.gif", ":83:");
emo(/\s:84:/g, "http://3.bp.blogspot.com/-HMCJcYTmqI8/VMs7q72q4pI/AAAAAAAAGA4/jP9R9_zQ-pQ/s1600/967339c1.gif", ":84:");
emo(/\s:85:/g, "http://1.bp.blogspot.com/-dC_WSRwJLCw/VMs7WHbfIJI/AAAAAAAAF_c/KLBjSlkpYH8/s1600/1205051df32b34dq7.gif", ":85:");
emo(/\s:86:/g, "http://3.bp.blogspot.com/-4GCbBoW99gk/VMs7ry1X_1I/AAAAAAAAGBA/bZyNcl7uzAk/s1600/af48944b.gif", ":86:");
emo(/\s:87:/g, "http://3.bp.blogspot.com/-kyO4u2tSGAI/VMs7t6Dke6I/AAAAAAAAGBI/r_dyqXnVzYc/s1600/b210e58c.gif", ":87:");
emo(/\s:88:/g, "http://2.bp.blogspot.com/-vIj2seiqDTw/VMs76XURuMI/AAAAAAAAGB4/v5kxHonm3F8/s1600/onionfacepalmplz.gif", ":88:");
emo(/\s:89:/g, "http://4.bp.blogspot.com/-c3k3qZtyFS4/VMs720MqMnI/AAAAAAAAGBo/KsSQttswkQ0/s1600/one.gif", ":89:");
emo(/\s:90:/g, "http://1.bp.blogspot.com/-IcZ_754zFdE/VMs713OS_lI/AAAAAAAAGBg/dRMFROZy3ek/s1600/loveloveplz.gif", ":90:");
emo(/\s:91:/g, "http://3.bp.blogspot.com/-szlDjtLd6pM/VMs70IwWK8I/AAAAAAAAGBY/8giZ0Os3h-c/s1600/embarrassed4-onion-head-emoticon.gif", ":91:");
emo(/\s:92:/g, "http://4.bp.blogspot.com/-NtrwTXeO1sk/VMs7vuLlNSI/AAAAAAAAGBQ/Z1KNcaSAz5M/s1600/e111de78.gif", ":92:");
emo(/\s:93:/g, "http://4.bp.blogspot.com/-Ec8hhRGuGC4/VMs753AbPCI/AAAAAAAAGBw/GEq04pN0kOQ/s1600/onicheer.gif", ":93:");
emo(/\s:94:/g, "http://4.bp.blogspot.com/-RcuJUKZjUJQ/VMs8J5b1OzI/AAAAAAAAGCo/RsNclSHs0hk/s1600/th_106_.gif", ":94:");
emo(/\s:95:/g, "http://2.bp.blogspot.com/-In-rZWCdTrQ/VMs8GD-ejgI/AAAAAAAAGCg/Na-Yfkh5jSA/s1600/th_104_.gif", ":95:");
emo(/\s:96:/g, "http://2.bp.blogspot.com/-_TXU7PwKvGQ/VMs8DdlShxI/AAAAAAAAGCY/wDpGRMraFQg/s1600/th_101_.gif", ":96:");
emo(/\s:97:/g, "http://1.bp.blogspot.com/-Ldg_dB62pno/VMs8CQ8GiSI/AAAAAAAAGCQ/tGzLzii9C7Q/s1600/th_099_.gif", ":97:");
emo(/\s:98:/g, "http://1.bp.blogspot.com/-75NXI_DOb1w/VMs7_PcCZnI/AAAAAAAAGCI/QcG3p9WTeVI/s1600/th_087_.gif", ":98:");
emo(/\s:99:/g, "http://2.bp.blogspot.com/-1QHr8uH_UB8/VMs77nMxtNI/AAAAAAAAGCA/08aZUnVHj5g/s1600/th_059_.gif", ":99:");
emo(/\s:100:/g, "http://1.bp.blogspot.com/-qVcaIaNNV5I/VMs8OzC4aLI/AAAAAAAAGDA/blypiajd-mo/s1600/th_116_.gif", ":100:");
emo(/\s:101:/g, "http://1.bp.blogspot.com/-G4G-waRUvr0/VMs8NiR_ndI/AAAAAAAAGC4/ayoDVxjbA0c/s1600/th_113_.gif", ":101:");
emo(/\s:102:/g, "http://1.bp.blogspot.com/--Kvkhagz5Hk/VMs8KX6pDxI/AAAAAAAAGCw/bXBcqhyMnEY/s1600/th_110_.gif", ":102:");

emo(/\s:103:/g, "http://2.bp.blogspot.com/-meMg61mPDVk/VMyLma3zcTI/AAAAAAAAGKM/bZghqeXMoMw/s1600/000.gif", ":103:");
emo(/\s:104:/g, "http://1.bp.blogspot.com/-Iu1qdb_Ohhw/VMyLm7gc1BI/AAAAAAAAGKQ/TgurKf5tuww/s1600/001.gif", ":104:");
emo(/\s:105:/g, "http://1.bp.blogspot.com/-Q8TCKxD3X0U/VMyLnnf8i4I/AAAAAAAAGKc/GsOYUqv0Wls/s1600/003.gif", ":105:");
emo(/\s:106:/g, "http://4.bp.blogspot.com/-V1I4rZIxFkg/VMyLqx00b3I/AAAAAAAAGKk/VRQ5xvhbvVs/s1600/007.gif", ":106:");
emo(/\s:107:/g, "http://2.bp.blogspot.com/-7StRx2_lNRI/VMyLsggLtJI/AAAAAAAAGKs/Zg4Vg3RqQTg/s1600/008.gif", ":107:");
emo(/\s:108:/g, "http://2.bp.blogspot.com/-XDhQRJpbTqI/VMyLufmk17I/AAAAAAAAGK0/3Wg-yYrTcBM/s1600/019.gif", ":108:");
emo(/\s:109:/g, "http://4.bp.blogspot.com/-LQ4ygNV5V50/VMyLx8crRnI/AAAAAAAAGK8/Vx2c2UMj9pA/s1600/023%2B(1).gif", ":109:");
emo(/\s:110:/g, "http://3.bp.blogspot.com/-_jdW4VcPN0A/VMyLzSoGTWI/AAAAAAAAGLE/HKBJxgOJDCU/s1600/024.gif", ":110:");
emo(/\s:111:/g, "http://1.bp.blogspot.com/-VOsC-tQbk5c/VMyL0A6izmI/AAAAAAAAGLM/KQnIgq5ZBCM/s1600/027.gif", ":111:");
emo(/\s:112:/g, "http://1.bp.blogspot.com/-pPsROgZk_Hs/VMyL3TvALPI/AAAAAAAAGLU/HUaIxaKMMP4/s1600/031.gif", ":112:");
emo(/\s:113:/g, "http://1.bp.blogspot.com/-i5pP4B3bNwE/VMyL4hYtCjI/AAAAAAAAGLc/BEsHLwQXa-U/s1600/034.gif", ":113:");
emo(/\s:114:/g, "http://1.bp.blogspot.com/-UYZ1C3dxhto/VMyL6ZioxdI/AAAAAAAAGLk/wuiiz425Lng/s1600/036.gif", ":114:");
emo(/\s:115:/g, "http://3.bp.blogspot.com/-gk3MYmE5bkQ/VMyL-NCYuaI/AAAAAAAAGLs/D7yWH3AoQMs/s1600/040.gif", ":115:");
emo(/\s:116:/g, "http://1.bp.blogspot.com/-RgJnj5p7S1Q/VMyL_9z7ikI/AAAAAAAAGL0/-X1nXdQMAyw/s1600/041.gif", ":116:");
emo(/\s:117:/g, "http://2.bp.blogspot.com/-SVHxyL6psls/VMyMBDDS8QI/AAAAAAAAGL8/ZfZOpmVxCjQ/s1600/050.gif", ":117:");
emo(/\s:118:/g, "http://3.bp.blogspot.com/-27AMXPyRwig/VMyMEZtbnDI/AAAAAAAAGME/4Ta7aQ7hAa4/s1600/052.gif", ":118:");
emo(/\s:119:/g, "http://2.bp.blogspot.com/-JJwhP7xRfeo/VMyMFBEc92I/AAAAAAAAGMI/d_cF62CSCIk/s1600/056.gif", ":119:");

emo(/\s:120:/g, "http://2.bp.blogspot.com/-ob9x9OP3fGM/VMyKl4dZYHI/AAAAAAAAGKA/LXRUc6tWOiw/s1600/image.gif", ":120:");
emo(/\s:121:/g, "http://4.bp.blogspot.com/-fpvKoSQlG_A/VMyKQUQv2UI/AAAAAAAAGIo/AxImgY9xAVQ/s1600/image%2B(18).gif", ":121:");
emo(/\s:122:/g, "http://3.bp.blogspot.com/-GDqBPAw4oxU/VMyKPU1EyvI/AAAAAAAAGIg/qUCiSOAdUkc/s1600/image%2B(17).gif", ":122:");
emo(/\s:123:/g, "http://4.bp.blogspot.com/-q0vc-9JjHtA/VMyKEo7gFQI/AAAAAAAAGH4/i9HE0nKZMsQ/s1600/image%2B(12).gif", ":123:");
emo(/\s:124:/g, "http://2.bp.blogspot.com/-ayjok4LMclc/VMyKFhxIGxI/AAAAAAAAGIA/ciWoBPO5Y9Q/s1600/image%2B(13).gif", ":124:");
emo(/\s:125:/g, "http://2.bp.blogspot.com/-DocYZ0eTwns/VMyKD_ICHyI/AAAAAAAAGHw/nFJcFIdJ_ho/s1600/image%2B(11).gif", ":125:");
emo(/\s:126:/g, "http://1.bp.blogspot.com/-5A87vKmsmC0/VMyKIg3bCyI/AAAAAAAAGII/X5It1oW8wiQ/s1600/image%2B(14).gif", ":126:");
emo(/\s:127:/g, "http://1.bp.blogspot.com/-2cfYEUDWlP8/VMyKK3QzBTI/AAAAAAAAGIY/RylkqNMQT4M/s1600/image%2B(16).gif", ":127:");
emo(/\s:128:/g, "http://3.bp.blogspot.com/-ug5rWTEYhNo/VMyKJwujfJI/AAAAAAAAGIQ/Quk6rnX_WJE/s1600/image%2B(15).gif", ":128:");
emo(/\s:129:/g, "http://3.bp.blogspot.com/-zcg0E7-lwLk/VMyJ_nLXz4I/AAAAAAAAGHo/NuX54JTHxjM/s1600/image%2B(10).gif", ":129:");
emo(/\s:130:/g, "http://3.bp.blogspot.com/-hSQzXFofgWg/VMyKjH2xoKI/AAAAAAAAGJ4/CRslqDhkI4U/s1600/image%2B(8).gif", ":130:");
emo(/\s:131:/g, "http://3.bp.blogspot.com/-zv21hyy97MI/VMyKh9s4-WI/AAAAAAAAGJw/drNkyx2cZ9A/s1600/image%2B(9).gif", ":131:");
emo(/\s:132:/g, "http://1.bp.blogspot.com/-BkYwXdZDpOQ/VMyKbiY7QPI/AAAAAAAAGJY/zPVCSDa7W1w/s1600/image%2B(5).gif", ":132:");
emo(/\s:133:/g, "http://2.bp.blogspot.com/-Bs_-uqviPFg/VMyKgt1072I/AAAAAAAAGJo/-_cCpHXcDfE/s1600/image%2B(7).gif", ":133:");
emo(/\s:134:/g, "http://4.bp.blogspot.com/-EqckmACq-pg/VMyKdBJpgfI/AAAAAAAAGJg/MTINofagVMo/s1600/image%2B(6).gif", ":134:");
emo(/\s:135:/g, "http://2.bp.blogspot.com/-QY8x9Epz89o/VMyJ-DGMBTI/AAAAAAAAGHg/x8FOmBfQTHk/s1600/image%2B(1).gif", ":135:");
emo(/\s:136:/g, "http://4.bp.blogspot.com/-2nQK1tl4JLw/VMyKUnHim7I/AAAAAAAAGI4/eK0gQ0F4c_I/s1600/image%2B(2).gif", ":136:");
emo(/\s:137:/g, "http://1.bp.blogspot.com/-0iLxcbo8RN0/VMyKWul1TpI/AAAAAAAAGJI/1Jq6jY68-9k/s1600/image%2B(3).gif", ":137:");
emo(/\s:138:/g, "http://4.bp.blogspot.com/-uyHQmL1GJyo/VMyKZ4xfpLI/AAAAAAAAGJQ/x0Y0v4hVXAE/s1600/image%2B(4).gif", ":138:");
emo(/\s:139:/g, "http://4.bp.blogspot.com/-s7mBuu5cZAw/VMyJ9RzYRzI/AAAAAAAAGHY/0KIuGNIFQXw/s1600/10_002.gif", ":139:");

emo(/\s:140:/g, "http://2.bp.blogspot.com/-jl-KagZQTMg/VM0ltMq6RQI/AAAAAAAAGMg/QkEiHw05ORc/s1600/QQ_1648_1.gif", ":140:");
emo(/\s:141:/g, "http://3.bp.blogspot.com/-ae3nSzju38c/VM0lt6abhkI/AAAAAAAAGMs/vya62nCvXYo/s1600/QQ_2043_2.gif", ":141:");
emo(/\s:142:/g, "http://1.bp.blogspot.com/-oaWzN-0pc3A/VM0luSgna4I/AAAAAAAAGNE/kewchLlj8MU/s1600/QQ_2152.gif", ":142:");
emo(/\s:143:/g, "http://1.bp.blogspot.com/-pmd8GCWnUoc/VM0lujdYnBI/AAAAAAAAGM8/WaVruwCUcJI/s1600/QQ_2622.gif", ":143:");
emo(/\s:144:/g, "http://1.bp.blogspot.com/-8XIck8-LgEU/VM0lu8AxwUI/AAAAAAAAGNA/Wu7w__9QNZU/s1600/QQ_2861.gif", ":144:");
emo(/\s:145:/g, "http://4.bp.blogspot.com/-LXFlpBtCLTY/VM0ls00ZGLI/AAAAAAAAGMc/tI4_I9uzLtw/s1600/QQ_14400.gif", ":145:");
emo(/\s:146:/g, "http://3.bp.blogspot.com/-2Z3oJPcgEX4/VM0ls6vgpNI/AAAAAAAAGMo/ciXutfFF6Q8/s1600/QQ_1458.gif", ":146:");

 emo(/\s:\)\)+/g, "https://lh3.googleusercontent.com/-duNoMAb1RS4/T2WEWrOfR8I/AAAAAAAACZ0/ObgHf-PmTuE/s36/03.gif", ":))");
    emo(/\s;\(\(+/g, "https://lh6.googleusercontent.com/-LIr-ZdDp2xI/T2WEYDacVnI/AAAAAAAACaY/W7MF5qKO2sE/s47/06.gif", ";((");
    emo(/\s:\)+/g, "https://lh6.googleusercontent.com/-Q5lMkgcmVR4/T2WEWkNi3MI/AAAAAAAACZ4/7VBYeVbx7kA/s36/01.gif", ":)");
    emo(/\s:-\)+/g, "https://lh3.googleusercontent.com/-mCsZPeixHvA/T2WEWivv9FI/AAAAAAAACZw/64ZGRgdlDeg/s36/02.gif", ":-)");
    emo(/\s=\)\)+/g, "https://lh5.googleusercontent.com/-u__sc3DgZ2c/T2d0_lDLueI/AAAAAAAACkw/YbeuRNde61Q/s36/03a.gif", "=))");
    emo(/\s;\(+/g, "https://lh5.googleusercontent.com/-EwonQGBTYwo/T2WEXeVq3oI/AAAAAAAACZ8/4ixt2ZVlqrI/s36/04.gif", ";(");
    emo(/\s;-\(+/g, "https://lh3.googleusercontent.com/-fMtAZDakmBI/T2WEXswr5BI/AAAAAAAACaA/83R1X_PumTk/s36/05.gif", ";-(");
    emo(/\s:d/ig, "https://lh3.googleusercontent.com/-Em3lvBgvYlI/T2WElbV0BaI/AAAAAAAACdI/ApynphQdka8/s36/7.gif", ":d");
    emo(/\s:-d/ig, "https://lh4.googleusercontent.com/-0R7-2DC1klM/T2WEmMQajfI/AAAAAAAACdM/-4JFCeC6QD8/s36/8.gif", ":-d");
    emo(/\s@-\)+/g, "https://lh5.googleusercontent.com/-PE2GWBseiGk/T2acYH_uNRI/AAAAAAAAChg/HloTeaRIdyQ/s36/09.gif", "@-)");
    emo(/\s:p/ig, "https://lh5.googleusercontent.com/-nkyzLkHUPg8/T2WEYdFqFxI/AAAAAAAACaQ/Mu1yPq91yuc/s36/10.gif", ":p");
    emo(/\s:o/ig, "https://lh6.googleusercontent.com/-0-zgLVgK2Cg/T2WEY10FXuI/AAAAAAAACag/dyKQ5pPUIGQ/s36/11.gif", ":o");
    emo(/\s:&gt;\)+/g, "https://lh3.googleusercontent.com/-xbWqvOWJNE0/T2WEZM-VLTI/AAAAAAAACak/8dLATIlXRDk/s36/12.gif", ":&gt;)");
    emo(/\s\(o\)+/ig, "https://lh4.googleusercontent.com/-cguZVxYzR3o/T2WEZSgFvUI/AAAAAAAACas/nDJgr6YcuaI/s36/13.gif", "(o)");
    emo(/\s\[-\(+/g, "https://lh5.googleusercontent.com/-VKGWq-wPGUw/T2WEaEQLA9I/AAAAAAAACa4/ZDnLP29mlgk/s36/14.gif", "[-(");
    emo(/\s:-\?/g, "https://lh6.googleusercontent.com/-hIVRIc7IAJw/T2WEaO5ASUI/AAAAAAAACaw/FLmCvzeMSbc/s36/15.gif", ":-?");
    emo(/\s\(p\)+/ig, "https://lh4.googleusercontent.com/-hk3q3tP-0Pg/T2WEcRONc5I/AAAAAAAACbY/bJ00rge5Mq8/s36/16.gif", "(p)");
    emo(/\s:-s/ig, "https://lh5.googleusercontent.com/-cysJNcXxT-Q/T2WEcxVM5dI/AAAAAAAACbU/Mvuc437f1ZI/s36/17.gif", ":-s");
    emo(/\s\(m\)+/ig, "https://lh6.googleusercontent.com/-H20tIsy7Hvw/T2WEbDW0R7I/AAAAAAAACbE/DymXsZOmO3s/s36/18.gif", "(m)");
    emo(/\s8-\)+/ig, "https://lh4.googleusercontent.com/-IvNFZtzJJYI/T2WEcDj-0NI/AAAAAAAACbM/kiqtHbdkarQ/s36/19.gif", "8-)");
    emo(/\s:-t/ig, "https://lh5.googleusercontent.com/-XCXdaCYaOGE/T2WEcmd15EI/AAAAAAAACbQ/Z5UyZCuX4Xo/s36/20.gif", ":-t");
    emo(/\s:-b/ig, "https://lh4.googleusercontent.com/-g6V0tBD1vwk/T2WEdRGJfWI/AAAAAAAACbo/P8P_SGEdhzI/s36/21.gif", ":-b");
    emo(/\sb-\(+/ig, "https://lh6.googleusercontent.com/-ErUGB8ea0H4/T2WEdm5-ZSI/AAAAAAAACbs/245Hxnaa82g/s35/22.gif", "b-(");
    emo(/\s:-#/ig, "https://lh6.googleusercontent.com/-p-5AT-amLik/T2WEi_MJDqI/AAAAAAAACco/5J-MqivSQw4/s36/23.gif", ":-#");
    emo(/\s=p~/ig, "https://lh3.googleusercontent.com/-H8izCFTaHFE/T2b39mmu2NI/AAAAAAAACkM/k4bDdFe301U/s36/24.gif", "=p~");
    emo(/\s\$-\)+/ig, "https://lh5.googleusercontent.com/-LZn6dX8GslQ/T2W30lpp_kI/AAAAAAAAChA/Rym2Ql5H-jU/s36/25.gif", "$-)");
    emo(/\s\(b\)+/ig, "https://lh5.googleusercontent.com/-k6r8YBUhxVk/T2WEgBtjFtI/AAAAAAAACcE/U5U5uPCpxq8/s36/26.gif", "(b)");
    emo(/\s\(f\)+/ig, "https://lh5.googleusercontent.com/-pj6fMvZXTyc/T2WEga9-gjI/AAAAAAAACcM/kVpUCa7uqpw/s36/27.gif'", "(f)");
    emo(/\sx-\)+/ig, "https://lh3.googleusercontent.com/-zI2UJmwerDM/T2WEhSRkuTI/AAAAAAAACcc/Gr3xFDrZF3Y/s36/28.gif", "x-)");
    emo(/\s\(k\)+/ig, "https://lh3.googleusercontent.com/-ilBYLLWFQJQ/T2WEiJXJ7LI/AAAAAAAACcY/bXpkIPuVUto/s36/29.gif", "(k)");
    emo(/\s\(h\)+/ig, "https://lh5.googleusercontent.com/-_NHYkuf5bZg/T2WEjOhTIxI/AAAAAAAACcg/76qRE27R_ig/s36/30.gif", "(h)");
    emo(/\s\(c\)+/ig, "https://lh6.googleusercontent.com/-O6m44_Z-8AA/T2WEjLRImnI/AAAAAAAACck/c_jh643HU6o/s36/31.gif", "(c)");
    emo(/\scheer/ig, "https://lh5.googleusercontent.com/-9TYEg93ImUM/T2WEjvuhxTI/AAAAAAAACc0/KQRBXuuV_Yg/s36/32.gif", "cheer");
    
// Show alert one times!
   
    // Click to show the code!
       $('.emo')
        .css('cursor', 'pointer')
        .live("click", function(e) {
        $('.emoKey')
            .remove();
        $(this)
            .after('<input class="emoKey" type="text" size="' + this.alt.length + '" value=" ' + this.alt + '" />');
$('.emoKey')
            .trigger("select");
e.stopPropagation();
    });
    $('.emoKey')
        .live("click", function() {
        $(this)
            .focus()
            .select();
    });
});
