# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

########
# Vader:
########
@Vader = User.create(username: "DarthVader", password: "123123123123", profile_desc: "I enjoy long walks on the Death Star and baking snickerdoodles with my cat.", profile_img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/w_1000,h_1000,c_crop,r_max,e_saturation:-25/w_200/v1489894963/DarthVaderProfile_f1sxav.png", cover_img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1489957383/VaderPhotos12_hfs2pt.jpg")

Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1489957372/VaderPhotos15_ogwntr.jpg", owner_id: @Vader.id})

Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1489957372/VaderPhotos13_ektehy.jpg", owner_id: @Vader.id})

Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1489957374/VaderPhotos24_kudm3w.jpg", owner_id: @Vader.id})

Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1489957375/VaderPhotos25_bqwx0t.jpg", owner_id: @Vader.id})

Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1489957375/VaderPhotos7_zhpdwi.jpg", owner_id: @Vader.id})

Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1489957375/VaderPhotos28_gri77w.jpg", owner_id: @Vader.id})

Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1489957376/VaderPhotos20_kidjpx.jpg", owner_id: @Vader.id})

Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1489957377/VaderPhotos14_x6z2du.jpg", owner_id: @Vader.id})

Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1489957377/VaderPhotos18_sbqbk5.jpg", owner_id: @Vader.id})

Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1489957379/VaderPhotos5_ome6km.jpg", owner_id: @Vader.id})

Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1489957379/VaderPhotos3_fc85ks.jpg", owner_id: @Vader.id})

Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1489957380/VaderPhotos30_vdgulx.jpg", owner_id: @Vader.id})

Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1489957382/VaderPhotos21_ay6wbb.jpg", owner_id: @Vader.id})

Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1489957382/VaderPhotos26_nathme.jpg", owner_id: @Vader.id})

Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1489957382/VaderPhotos16_skvxmn.jpg", owner_id: @Vader.id})

Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1489957381/VaderPhotos1_hibmab.jpg", owner_id: @Vader.id})

Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1489957381/VaderPhotos10_tjxyhw.jpg", owner_id: @Vader.id})

Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1489957380/VaderPhotos29_n481qs.jpg", owner_id: @Vader.id})

Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1489957383/VaderPhotos11_ubgidg.jpg", owner_id: @Vader.id})

Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1489957383/VaderPhotos12_hfs2pt.jpg", owner_id: @Vader.id})

Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1489957385/VaderPhotos31_qyurwa.jpg", owner_id: @Vader.id})

Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1489957385/VaderPhotos0_wpfz1l.jpg", owner_id: @Vader.id})

Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1489957387/VaderPhotos27_hqd51j.jpg", owner_id: @Vader.id})

Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1489957387/VaderPhotos8_s7td0x.jpg", owner_id: @Vader.id})

Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1489957391/VaderPhotos19_qr23qx.jpg", owner_id: @Vader.id})

Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1489957391/VaderPhotos17_yjiqct.png", owner_id: @Vader.id})

Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1489957389/VaderPhotos22_pwehwd.jpg", owner_id: @Vader.id})

Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1489957388/VaderPhotos6_d7jnxc.jpg", owner_id: @Vader.id})

Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1489957388/VaderPhotos4_uqn87z.jpg", owner_id: @Vader.id})

########
# Luke:
########

@Luke = User.create(username: "Luke", password: "123123", profile_desc: "I am a Jedi, like my father before me. I also take photos.", profile_img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/w_1000,h_675,c_crop,r_max/w_200/v1490071478/vwtrqtxz2jzo2zpagont.png", cover_img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490072385/afl3oujujzdgotvepdgt.jpg")

Photo.create({img_url: "https://res.cloudinary.com/one-thousand-words/image/upload/v1490073347/afbs6yqmj3zut2bt9wpm.jpg", owner_id: @Luke.id})

Photo.create({img_url: "https://res.cloudinary.com/one-thousand-words/image/upload/v1490073352/lgjoubzhxcql9xvdq4bg.jpg", owner_id: @Luke.id})

Photo.create({img_url: "https://res.cloudinary.com/one-thousand-words/image/upload/v1490073352/j7fuwkormvpzye3l0nsv.jpg", owner_id: @Luke.id})

Photo.create({img_url: "https://res.cloudinary.com/one-thousand-words/image/upload/v1490073356/uvpz3b2qbhwirvzta4or.jpg", owner_id: @Luke.id})

Photo.create({img_url: "https://res.cloudinary.com/one-thousand-words/image/upload/v1490073356/fux91xmaszrr2dxwshps.jpg", owner_id: @Luke.id})

Photo.create({img_url: "https://res.cloudinary.com/one-thousand-words/image/upload/v1490073359/rdtwqdxm1cd02xkxd5yb.jpg", owner_id: @Luke.id})

Photo.create({img_url: "https://res.cloudinary.com/one-thousand-words/image/upload/v1490073345/qooxovtmvval1awaasu5.jpg", owner_id: @Luke.id})

Photo.create({img_url: "https://res.cloudinary.com/one-thousand-words/image/upload/v1490073342/elbrd6frupgfacakodbu.jpg", owner_id: @Luke.id})

Photo.create({img_url: "https://res.cloudinary.com/one-thousand-words/image/upload/v1490073341/epcuekbx8lh0s2zm58zq.jpg", owner_id: @Luke.id})

Photo.create({img_url: "https://res.cloudinary.com/one-thousand-words/image/upload/v1490073335/owqwstjvjx4o82muyioq.jpg", owner_id: @Luke.id})

Photo.create({img_url: "https://res.cloudinary.com/one-thousand-words/image/upload/v1490073335/ufsj2yzthufiotqx7whq.jpg", owner_id: @Luke.id})

Photo.create({img_url: "https://res.cloudinary.com/one-thousand-words/image/upload/v1490053775/n8iqhcgd65ve9hl6t8eq.png", owner_id: @Luke.id})

Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490121667/hrvdycnourbtf4tawmjq.jpg", owner_id: @Luke.id})

Photo.create({img_url: "https://res.cloudinary.com/one-thousand-words/image/upload/v1490071478/vwtrqtxz2jzo2zpagont.jpg", owner_id: @Luke.id})

Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490122223/x02hpywikhr8u4n9sroa.jpg", owner_id: @Luke.id})

Photo.create({img_url: "https://res.cloudinary.com/one-thousand-words/image/upload/v1490072385/afl3oujujzdgotvepdgt.jpg", owner_id: @Luke.id})

Photo.create({img_url: "https://res.cloudinary.com/one-thousand-words/image/upload/v1490072388/o9nvyigludhrog1zprzl.jpg", owner_id: @Luke.id})

Photo.create({img_url: "https://res.cloudinary.com/one-thousand-words/image/upload/v1490072388/catqt0wglaogvtcibejp.jpg", owner_id: @Luke.id})

Photo.create({img_url: "https://res.cloudinary.com/one-thousand-words/image/upload/v1490053770/ese5vqyioukb8pyitwvt.jpg", owner_id: @Luke.id})

Photo.create({img_url: "https://res.cloudinary.com/one-thousand-words/image/upload/v1490053769/eammslsn2titzdfdg1dx.jpg", owner_id: @Luke.id})

Photo.create({img_url: "https://res.cloudinary.com/one-thousand-words/image/upload/v1490053652/vnxjmyuchcjnwpovruo6.jpg", owner_id: @Luke.id})

Photo.create({img_url: "https://res.cloudinary.com/one-thousand-words/image/upload/v1490073362/egbik99radyclbak1xmk.png", owner_id: @Luke.id})

Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490120527/qg4kfwhbefkcnf0vibf1.jpg", owner_id: @Luke.id})

########
# Han:
########

@Han = User.create(username: "Han", password: "123123", profile_desc: "Yes, I shot first. Please stop asking.", profile_img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/w_450,h_450,c_crop,c_fill,g_face,r_max/w_200/v1490377502/bz42rqtw3lsueeuomglo.png", cover_img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490382352/wqd2f8a2oucjqxcuirmq.jpg")

Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490377338/p1gzsab2x7h3nf5i13re.jpg", owner_id: @Han.id})

 Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490377463/h2ppoeudlvpoobi1dbom.jpg", owner_id: @Han.id})

 Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490377502/bz42rqtw3lsueeuomglo.jpg", owner_id: @Han.id})

 Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490377529/uvq62f111wj1k9yzut0u.jpg", owner_id: @Han.id})

 Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490377544/qnaxzshlhb93ziflh34d.jpg", owner_id: @Han.id})

 Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490377562/goffjuardraejuivbjox.jpg", owner_id: @Han.id})

 Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490377588/vzpisxysmegba0n6inkf.jpg", owner_id: @Han.id})

 Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490377606/jy7g2qxgznwi0olnpbzn.jpg", owner_id: @Han.id})

 Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490377649/zxrkpub8eoib3pl7cmmz.jpg", owner_id: @Han.id})

 Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490377672/kuzfxsidbgyton2fiaup.jpg", owner_id: @Han.id})

 Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490377696/k1j0lcyyww9lmcmt6myc.jpg", owner_id: @Han.id})

 Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490377734/bsplm7gyyfv6xlrsh2zw.jpg", owner_id: @Han.id})

 Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490377775/xgocnc1ofeooqgqxo4qi.jpg", owner_id: @Han.id})

 Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490377943/jr1rhovjnscy4qtxxebl.png", owner_id: @Han.id})

 Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490377960/sajwvprsnh8qkhxbvudd.jpg", owner_id: @Han.id})

 Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490377985/ghfgggp91tubhitc54fs.jpg", owner_id: @Han.id})

 Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490378011/fvk8qeqtryjwrsaspcim.jpg", owner_id: @Han.id})

 Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490378118/yr0g9vjya2yx65lamjyt.jpg", owner_id: @Han.id})

 Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490378096/q6izcgib40mixezehxbq.jpg", owner_id: @Han.id})

 Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490378137/ehpt7csoldghj0hzdv8r.jpg", owner_id: @Han.id})

 Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490378334/zhet53fmym9flirqb6xr.jpg", owner_id: @Han.id})

 Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490382488/zvkedntf8vnxb2y8ak8i.jpg", owner_id: @Han.id})

 Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490382352/wqd2f8a2oucjqxcuirmq.jpg", owner_id: @Han.id})

 Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490382518/e7xspwsn18wwdqvalm41.jpg", owner_id: @Han.id})

########
# Leia:
########

@Leia = User.create(username: "Leia", password: "123123", profile_desc: "#REBEL WITH A CAUSE", profile_img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/w_450,h_350,c_crop,g_face,r_max/w_200/v1490073822/ek1qz4sq20xvt8z9cpc7.png", cover_img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490076972/jnugnjvdhcpivslbw1ye.jpg")

Photo.create({img_url: "https://res.cloudinary.com/one-thousand-words/image/upload/v1490076970/k6ekqy9wde8kfjdjo1bp.jpg", owner_id: @Leia.id})

Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490114620/cm0hwlcfnlves4ae2u5m.jpg", owner_id: @Leia.id})

Photo.create({img_url: "https://res.cloudinary.com/one-thousand-words/image/upload/v1490118179/xi541lhrcmtpuetmurax.jpg", owner_id: @Leia.id})

Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490119655/owhqgvn5aogvwdqkmi3u.jpg", owner_id: @Leia.id})

Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490120000/doukox1jfsstondr4rmf.jpg", owner_id: @Leia.id})

Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490118659/bdbtjnlulp5odh9wmql3.jpg", owner_id: @Leia.id})

Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490119435/rbbndufpexxnbdmysrta.jpg", owner_id: @Leia.id})

Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490118514/yhaklkzeehsapvgsbjfd.jpg", owner_id: @Leia.id})

Photo.create({img_url: "https://res.cloudinary.com/one-thousand-words/image/upload/v1490076972/tp4uwfwfvuondpij43ty.jpg", owner_id: @Leia.id})

Photo.create({img_url: "https://res.cloudinary.com/one-thousand-words/image/upload/v1490076972/bv2n6kmcrzo5slfnypxw.jpg", owner_id: @Leia.id})

Photo.create({img_url: "https://res.cloudinary.com/one-thousand-words/image/upload/v1490076972/jnugnjvdhcpivslbw1ye.jpg", owner_id: @Leia.id})

Photo.create({img_url: "https://res.cloudinary.com/one-thousand-words/image/upload/v1490076973/iseq4qwp2lzyi4yaxulc.jpg", owner_id: @Leia.id})

Photo.create({img_url: "https://res.cloudinary.com/one-thousand-words/image/upload/v1490076973/a7s43eiocpkdsvb0o3bz.jpg", owner_id: @Leia.id})

Photo.create({img_url: "https://res.cloudinary.com/one-thousand-words/image/upload/v1490076979/tfruqwlz7i44uwrxrwmt.jpg", owner_id: @Leia.id})

Photo.create({img_url: "https://res.cloudinary.com/one-thousand-words/image/upload/v1490076976/gkowaiwbbou4sn41g1uc.jpg", owner_id: @Leia.id})

Photo.create({img_url: "https://res.cloudinary.com/one-thousand-words/image/upload/v1490076986/oxx6ncrms1uw9y65ulwm.jpg", owner_id: @Leia.id})

Photo.create({img_url: "https://res.cloudinary.com/one-thousand-words/image/upload/v1490076986/m4gk82b846uvftxwxjpk.jpg", owner_id: @Leia.id})

Photo.create({img_url: "https://res.cloudinary.com/one-thousand-words/image/upload/v1490076986/ybir54hz9rxzyecrerne.jpg", owner_id: @Leia.id})

Photo.create({img_url: "https://res.cloudinary.com/one-thousand-words/image/upload/v1490076987/pppwdappvkfam0vqssak.jpg", owner_id: @Leia.id})

Photo.create({img_url: "https://res.cloudinary.com/one-thousand-words/image/upload/v1490076987/l5imnbnx6vus4eb8entp.png", owner_id: @Leia.id})

Photo.create({img_url: "https://res.cloudinary.com/one-thousand-words/image/upload/v1490076993/po7ing6gx90u1v31plb8.png", owner_id: @Leia.id})

####################
# Boba Fett:
####################

@Boba = User.create(username: "BobaFett", password: "123123", profile_desc: "Before bounty hunting, I was a bratty child. Want to hear that story?", profile_img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/w_450,h_450,c_crop,c_fill,g_face,r_max/w_200/v1490378960/dfkdtlix9atbazt7k9z5.png", cover_img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490379288/dv3zr5ekj8taovinlaez.jpg")

Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490378829/gwsbwsh75t6u41avou8w.jpg", owner_id: @Boba.id})

 Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490378960/dfkdtlix9atbazt7k9z5.jpg", owner_id: @Boba.id})

 Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490379146/b2kfhuvvjq88hvqfpkjc.jpg", owner_id: @Boba.id})

 Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490379156/w7rjujfxoyixfyg6rw69.jpg", owner_id: @Boba.id})

 Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490379174/vqpcfmhjgdb6sckvc2jf.jpg", owner_id: @Boba.id})

 Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490379228/lrttqlbbuaxwzyevdlml.jpg", owner_id: @Boba.id})

 Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490379288/dv3zr5ekj8taovinlaez.jpg", owner_id: @Boba.id})

 Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490379304/v56bqcpxqiqwpblkrquf.jpg", owner_id: @Boba.id})

 Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490379329/xzveferri41kj5wlp8cg.jpg", owner_id: @Boba.id})

 Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490379370/lhifnbkqnhspihkz1lti.jpg", owner_id: @Boba.id})

 Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490379385/si0xakqbllvkvklc4bao.jpg", owner_id: @Boba.id})

 Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490379409/wjsuq8nrtdjx1fufjvkh.png", owner_id: @Boba.id})

 Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490379476/qllxg3u9t675bxlfee3d.jpg", owner_id: @Boba.id})

 Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490379494/gfxkwiryojkjnfrkdjkh.png", owner_id: @Boba.id})

 Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490379516/vlbnvc5su2xfdco57cx8.jpg", owner_id: @Boba.id})

 Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490379525/lw4ikxdpzhycthdurubc.jpg", owner_id: @Boba.id})

#######
# Yoda:
#######

@Yoda = User.create(username: "Yoda", password: "123123", profile_desc: "Do or do not? I coined that. #LIFE COACHING CHAMP", profile_img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/w_450,h_450,c_crop,c_fill,g_face,r_max/w_200/v1490380998/igynqj3ho2huu7h24gnk.png", cover_img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490380382/xpzsiijkcrn8fgdmhftv.jpg")

 Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490379950/kbjek5bmpjvpwf0nmghl.jpg", owner_id: @Yoda.id})

  Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490380020/fj7yi7xlm1wt1fckq1ay.jpg", owner_id: @Yoda.id})

  Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490380039/a93vcxg36fzykkacsvl0.jpg", owner_id: @Yoda.id})

  Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490380244/gdvozjanx7tutyoumgk8.jpg", owner_id: @Yoda.id})

  Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490380291/hhfdok9qg4c0hhy21k3l.jpg", owner_id: @Yoda.id})

  Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490380321/htclcnu5telrqtzg2dx6.jpg", owner_id: @Yoda.id})

  Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490380382/xpzsiijkcrn8fgdmhftv.jpg", owner_id: @Yoda.id})

  Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490380404/jkkyhkiordbusqrrm6f3.jpg", owner_id: @Yoda.id})

  Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490380525/gnd4nt5zs1gevaygnxnq.jpg", owner_id: @Yoda.id})

  Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490380554/noyu6cp3pccaeztns58n.jpg", owner_id: @Yoda.id})

  Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490380573/d57apjzqeljpoqyeyejg.jpg", owner_id: @Yoda.id})

  Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490380596/xk5gewcvffmrtgiwdsp7.jpg", owner_id: @Yoda.id})

  Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490380615/r04773ebomvnivstytmx.jpg", owner_id: @Yoda.id})

  Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490380669/gw8s7cqyck6wlaedxy0m.jpg", owner_id: @Yoda.id})

  Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490380710/cc7pjlclompiq1ptiwcj.jpg", owner_id: @Yoda.id})

  Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490380823/zawqfqivttajaj10nqpf.jpg", owner_id: @Yoda.id})

  Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490380914/wwvzd41oiayc5bnvnxuy.jpg", owner_id: @Yoda.id})

  Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490380924/fxwyygdinr7zxzjz9jnv.jpg", owner_id: @Yoda.id})

####################
# Emperor Palpatine:
####################

@Emperor = User.create(username: "TheEmperor", password: "123123", profile_desc: "Follow me and your journey towards the Dark Side will be complete!", profile_img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/w_450,h_450,c_crop,c_fill,g_face,r_max/w_200/v1490375222/cgwokviq8v347438jdyd.png", cover_img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490376089/siadhkdudsxjbwgkhlt5.jpg")

Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490375222/cgwokviq8v347438jdyd.png", owner_id: @Emperor.id})

 Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490375272/ukjrfoxjokd18uhjhgqw.jpg", owner_id: @Emperor.id})

 Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490375348/xbngpuaqq7g4bqpfj8ek.jpg", owner_id: @Emperor.id})

 Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490375369/iopzaa8rb39lxintlsjj.jpg", owner_id: @Emperor.id})

 Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490375450/r3yztkis848pvzmsjwic.png", owner_id: @Emperor.id})

 Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490375546/iyrq1410nhexc1on4k9e.png", owner_id: @Emperor.id})

 Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490375563/isnchfcbxdl8nwrynzph.jpg", owner_id: @Emperor.id})

 Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490375576/qrlk2guuztjcpa2zmp8g.jpg", owner_id: @Emperor.id})

 Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490375589/jmivuyfhmdovowqqlxhw.png", owner_id: @Emperor.id})

 Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490375598/fky0pzzueo5u4c9yrgiy.jpg", owner_id: @Emperor.id})

 Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490375708/iwrerxefqcnniejvolwh.jpg", owner_id: @Emperor.id})

 Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490375739/giscglehc1u1zoqjvoey.png", owner_id: @Emperor.id})

 Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490376011/seyipcu7qkgamsfqb00t.jpg", owner_id: @Emperor.id})

 Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490376024/o6tgvwr0bednbv3cm908.jpg", owner_id: @Emperor.id})

 Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490376089/siadhkdudsxjbwgkhlt5.jpg", owner_id: @Emperor.id})

 Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490376113/linqx2qhjlzigwf4hgsk.jpg", owner_id: @Emperor.id})

 Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490376179/dpatcfgqqddhvaerao2y.png", owner_id: @Emperor.id})

##########
# Follows:
##########

# Vader is following Luke, Leia, and the Emperor
Following.create({follower_id: @Vader.id, followee_id: @Luke.id})
Following.create({follower_id: @Vader.id, followee_id: @Leia.id})
Following.create({follower_id: @Vader.id, followee_id: @Emperor.id})

# Emperor is following Vader
Following.create({follower_id: @Emperor.id, followee_id: @Vader.id})

# Luke is following Leia, Yoda, and Han
Following.create({follower_id: @Luke.id, followee_id: @Leia.id})
Following.create({follower_id: @Luke.id, followee_id: @Han.id})
Following.create({follower_id: @Luke.id, followee_id: @Yoda.id})

# Leia is following Luke and Han
Following.create({follower_id: @Leia.id, followee_id: @Luke.id})
Following.create({follower_id: @Leia.id, followee_id: @Han.id})

# Han is following Luke and Leia
Following.create({follower_id: @Han.id, followee_id: @Luke.id})
Following.create({follower_id: @Han.id, followee_id: @Leia.id})

# Boba Fett is following Han and Vader

Following.create({follower_id: @Boba.id, followee_id: @Han.id})
Following.create({follower_id: @Boba.id, followee_id: @Vader.id})

# Yoda is following Luke and Vader

Following.create({follower_id: @Yoda.id, followee_id: @Luke.id})
Following.create({follower_id: @Yoda.id, followee_id: @Vader.id})
