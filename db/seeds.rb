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

User.create(id: 1, username: "DarthVader", password: "123123123123", profile_desc: "I enjoy long walks on the Death Star and baking snickerdoodles with my cat.", profile_img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/w_1000,h_1000,c_crop,r_max,e_saturation:-25/w_200/v1489894963/DarthVaderProfile_f1sxav.png", cover_img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1489957383/VaderPhotos12_hfs2pt.jpg")

Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1489957372/VaderPhotos15_ogwntr.jpg", owner_id: 1})

Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1489957372/VaderPhotos13_ektehy.jpg", owner_id: 1})

Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1489957374/VaderPhotos24_kudm3w.jpg", owner_id: 1})

Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1489957375/VaderPhotos25_bqwx0t.jpg", owner_id: 1})

Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1489957375/VaderPhotos7_zhpdwi.jpg", owner_id: 1})

Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1489957375/VaderPhotos28_gri77w.jpg", owner_id: 1})

Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1489957376/VaderPhotos20_kidjpx.jpg", owner_id: 1})

Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1489957377/VaderPhotos14_x6z2du.jpg", owner_id: 1})

Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1489957377/VaderPhotos18_sbqbk5.jpg", owner_id: 1})

Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1489957379/VaderPhotos5_ome6km.jpg", owner_id: 1})

Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1489957379/VaderPhotos3_fc85ks.jpg", owner_id: 1})

Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1489957380/VaderPhotos30_vdgulx.jpg", owner_id: 1})

Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1489957382/VaderPhotos21_ay6wbb.jpg", owner_id: 1})

Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1489957382/VaderPhotos26_nathme.jpg", owner_id: 1})

Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1489957382/VaderPhotos16_skvxmn.jpg", owner_id: 1})

Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1489957381/VaderPhotos1_hibmab.jpg", owner_id: 1})

Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1489957381/VaderPhotos10_tjxyhw.jpg", owner_id: 1})

Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1489957380/VaderPhotos29_n481qs.jpg", owner_id: 1})

Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1489957383/VaderPhotos11_ubgidg.jpg", owner_id: 1})

Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1489957383/VaderPhotos12_hfs2pt.jpg", owner_id: 1})

Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1489957385/VaderPhotos31_qyurwa.jpg", owner_id: 1})

Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1489957385/VaderPhotos0_wpfz1l.jpg", owner_id: 1})

Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1489957387/VaderPhotos27_hqd51j.jpg", owner_id: 1})

Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1489957387/VaderPhotos8_s7td0x.jpg", owner_id: 1})

Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1489957391/VaderPhotos19_qr23qx.jpg", owner_id: 1})

Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1489957391/VaderPhotos17_yjiqct.png", owner_id: 1})

Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1489957389/VaderPhotos22_pwehwd.jpg", owner_id: 1})

Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1489957388/VaderPhotos6_d7jnxc.jpg", owner_id: 1})

Photo.create({img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1489957388/VaderPhotos4_uqn87z.jpg", owner_id: 1})

########
# Luke:
########

User.create(id: 2, username: "Luke", password: "123123", profile_desc: "I am a Jedi, like my father before me. I also take photos.", profile_img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/w_1000,h_675,c_crop,r_max/w_200/v1490071478/vwtrqtxz2jzo2zpagont.png", cover_img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490072385/afl3oujujzdgotvepdgt.jpg")

Photo.create({img_url: "https://res.cloudinary.com/one-thousand-words/image/upload/v1490073347/afbs6yqmj3zut2bt9wpm.jpg", owner_id: 2})

Photo.create({img_url: "https://res.cloudinary.com/one-thousand-words/image/upload/v1490073352/lgjoubzhxcql9xvdq4bg.jpg", owner_id: 2})

Photo.create({img_url: "https://res.cloudinary.com/one-thousand-words/image/upload/v1490073352/j7fuwkormvpzye3l0nsv.jpg", owner_id: 2})

Photo.create({img_url: "https://res.cloudinary.com/one-thousand-words/image/upload/v1490073356/uvpz3b2qbhwirvzta4or.jpg", owner_id: 2})

Photo.create({img_url: "https://res.cloudinary.com/one-thousand-words/image/upload/v1490073356/fux91xmaszrr2dxwshps.jpg", owner_id: 2})

Photo.create({img_url: "https://res.cloudinary.com/one-thousand-words/image/upload/v1490073359/rdtwqdxm1cd02xkxd5yb.jpg", owner_id: 2})

Photo.create({img_url: "https://res.cloudinary.com/one-thousand-words/image/upload/v1490073345/qooxovtmvval1awaasu5.jpg", owner_id: 2})

Photo.create({img_url: "https://res.cloudinary.com/one-thousand-words/image/upload/v1490073342/elbrd6frupgfacakodbu.jpg", owner_id: 2})

Photo.create({img_url: "https://res.cloudinary.com/one-thousand-words/image/upload/v1490073341/epcuekbx8lh0s2zm58zq.jpg", owner_id: 2})

Photo.create({img_url: "https://res.cloudinary.com/one-thousand-words/image/upload/v1490073335/owqwstjvjx4o82muyioq.jpg", owner_id: 2})

Photo.create({img_url: "https://res.cloudinary.com/one-thousand-words/image/upload/v1490073335/ufsj2yzthufiotqx7whq.jpg", owner_id: 2})

Photo.create({img_url: "https://res.cloudinary.com/one-thousand-words/image/upload/v1490053775/n8iqhcgd65ve9hl6t8eq.png", owner_id: 2})

Photo.create({img_url: "https://res.cloudinary.com/one-thousand-words/image/upload/v1490071478/vwtrqtxz2jzo2zpagont.jpg", owner_id: 2})

Photo.create({img_url: "https://res.cloudinary.com/one-thousand-words/image/upload/v1490072385/afl3oujujzdgotvepdgt.jpg", owner_id: 2})

Photo.create({img_url: "https://res.cloudinary.com/one-thousand-words/image/upload/v1490072388/o9nvyigludhrog1zprzl.jpg", owner_id: 2})

Photo.create({img_url: "https://res.cloudinary.com/one-thousand-words/image/upload/v1490072388/catqt0wglaogvtcibejp.jpg", owner_id: 2})

Photo.create({img_url: "https://res.cloudinary.com/one-thousand-words/image/upload/v1490053770/ese5vqyioukb8pyitwvt.jpg", owner_id: 2})

Photo.create({img_url: "https://res.cloudinary.com/one-thousand-words/image/upload/v1490053769/eammslsn2titzdfdg1dx.jpg", owner_id: 2})

Photo.create({img_url: "https://res.cloudinary.com/one-thousand-words/image/upload/v1490053652/vnxjmyuchcjnwpovruo6.jpg", owner_id: 2})

Photo.create({img_url: "https://res.cloudinary.com/one-thousand-words/image/upload/v1490073362/egbik99radyclbak1xmk.png", owner_id: 2})

########
# Leia:
########

User.create(id: 3, username: "Leia", password: "123123", profile_desc: "#REBEL WITH A CAUSE", profile_img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/w_450,h_350,c_crop,g_face,r_max/w_200/v1490073822/ek1qz4sq20xvt8z9cpc7.png", cover_img_url: "http://res.cloudinary.com/one-thousand-words/image/upload/v1490076972/jnugnjvdhcpivslbw1ye.jpg")

Photo.create({img_url: "https://res.cloudinary.com/one-thousand-words/image/upload/v1490076970/k6ekqy9wde8kfjdjo1bp.jpg", owner_id: 3})

Photo.create({img_url: "https://res.cloudinary.com/one-thousand-words/image/upload/v1490076972/tp4uwfwfvuondpij43ty.jpg", owner_id: 3})

Photo.create({img_url: "https://res.cloudinary.com/one-thousand-words/image/upload/v1490076972/bv2n6kmcrzo5slfnypxw.jpg", owner_id: 3})

Photo.create({img_url: "https://res.cloudinary.com/one-thousand-words/image/upload/v1490076972/jnugnjvdhcpivslbw1ye.jpg", owner_id: 3})

Photo.create({img_url: "https://res.cloudinary.com/one-thousand-words/image/upload/v1490076973/iseq4qwp2lzyi4yaxulc.jpg", owner_id: 3})

Photo.create({img_url: "https://res.cloudinary.com/one-thousand-words/image/upload/v1490076973/a7s43eiocpkdsvb0o3bz.jpg", owner_id: 3})

Photo.create({img_url: "https://res.cloudinary.com/one-thousand-words/image/upload/v1490076979/tfruqwlz7i44uwrxrwmt.jpg", owner_id: 3})

Photo.create({img_url: "https://res.cloudinary.com/one-thousand-words/image/upload/v1490076976/gkowaiwbbou4sn41g1uc.jpg", owner_id: 3})

Photo.create({img_url: "https://res.cloudinary.com/one-thousand-words/image/upload/v1490076986/oxx6ncrms1uw9y65ulwm.jpg", owner_id: 3})

Photo.create({img_url: "https://res.cloudinary.com/one-thousand-words/image/upload/v1490076986/m4gk82b846uvftxwxjpk.jpg", owner_id: 3})

Photo.create({img_url: "https://res.cloudinary.com/one-thousand-words/image/upload/v1490076986/ybir54hz9rxzyecrerne.jpg", owner_id: 3})

Photo.create({img_url: "https://res.cloudinary.com/one-thousand-words/image/upload/v1490076987/pppwdappvkfam0vqssak.jpg", owner_id: 3})

Photo.create({img_url: "https://res.cloudinary.com/one-thousand-words/image/upload/v1490076987/l5imnbnx6vus4eb8entp.png", owner_id: 3})

Photo.create({img_url: "https://res.cloudinary.com/one-thousand-words/image/upload/v1490076993/po7ing6gx90u1v31plb8.png", owner_id: 3})
