/* This example requires Tailwind CSS v2.0+ */
import { React, Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import logo from './logo.png'
import TombolMenu from './TombolMenu'
import { Combobox } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

const navigation = [
  { name: 'Hari ini' },
  { name: 'Forecast' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const kabkota = [
  {
      "kabko": "Kab. ACEH BARAT",
      "lat": 4.4543,
      "long": 96.1527
  },
  {
      "kabko": "Kab. ACEH BARAT DAYA",
      "lat": 3.7963,
      "long": 97.0068
  },
  {
      "kabko": "Kab. ACEH BESAR",
      "lat": 5.4529,
      "long": 95.4778
  },
  {
      "kabko": "Kab. ACEH JAYA",
      "lat": 4.7874,
      "long": 95.6458
  },
  {
      "kabko": "Kab. ACEH SELATAN",
      "lat": 3.3115,
      "long": 97.3517
  },
  {
      "kabko": "Kab. ACEH SINGKIL",
      "lat": 2.3589,
      "long": 97.8722
  },
  {
      "kabko": "Kab. ACEH TAMIANG",
      "lat": 4.2329,
      "long": 98.0029
  },
  {
      "kabko": "Kab. ACEH TENGAH",
      "lat": 4.4483,
      "long": 96.8351
  },
  {
      "kabko": "Kab. ACEH TENGGARA",
      "lat": 3.3089,
      "long": 97.6982
  },
  {
      "kabko": "Kab. ACEH TIMUR",
      "lat": 4.5224,
      "long": 97.6114
  },
  {
      "kabko": "Kab. ACEH UTARA",
      "lat": 4.9786,
      "long": 97.2221
  },
  {
      "kabko": "Kab. BENER MERIAH",
      "lat": 4.7514,
      "long": 96.9525
  },
  {
      "kabko": "Kab. BIREUEN",
      "lat": 5.1086,
      "long": 96.6638
  },
  {
      "kabko": "Kab. GAYO LUES",
      "lat": 3.9552,
      "long": 97.3517
  },
  {
      "kabko": "Kab. NAGAN RAYA",
      "lat": 4.1248,
      "long": 96.493
  },
  {
      "kabko": "Kab. PIDIE",
      "lat": 5.0743,
      "long": 95.941
  },
  {
      "kabko": "Kab. PIDIE JAYA",
      "lat": 5.1548,
      "long": 96.1951
  },
  {
      "kabko": "Kab. SIMEULUE",
      "lat": 2.644,
      "long": 96.0256
  },
  {
      "kabko": "Kota BANDA ACEH",
      "lat": 5.5483,
      "long": 95.3238
  },
  {
      "kabko": "Kota LANGSA",
      "lat": 4.4725,
      "long": 97.9756
  },
  {
      "kabko": "Kota LHOKSEUMAWE",
      "lat": 5.1812,
      "long": 97.1413
  },
  {
      "kabko": "Kota SABANG",
      "lat": 5.8926,
      "long": 95.3238
  },
  {
      "kabko": "Kota SUBULUSSALAM",
      "lat": 2.7121,
      "long": 97.9157
  },
  {
      "kabko": "Kab. ASAHAN",
      "lat": 2.8175,
      "long": 99.6341
  },
  {
      "kabko": "Kab. BATUBARA",
      "lat": 3.1741,
      "long": 99.5006
  },
  {
      "kabko": "Kab. DAIRI",
      "lat": 2.8676,
      "long": 98.2651
  },
  {
      "kabko": "Kab. DELI SERDANG",
      "lat": 3.4202,
      "long": 98.7041
  },
  {
      "kabko": "Kab. HUMBANG HASUNDUTAN",
      "lat": 2.1989,
      "long": 98.5721
  },
  {
      "kabko": "Kab. KARO",
      "lat": 3.1053,
      "long": 98.2651
  },
  {
      "kabko": "Kab. LABUHANBATU",
      "lat": 2.344,
      "long": 100.1703
  },
  {
      "kabko": "Kab. LABUHANBATU SELATAN",
      "lat": 1.8799,
      "long": 100.1703
  },
  {
      "kabko": "Kab. LABUHANBATU UTARA",
      "lat": 2.3466,
      "long": 99.8125
  },
  {
      "kabko": "Kab. LANGKAT",
      "lat": 3.8654,
      "long": 98.3088
  },
  {
      "kabko": "Kab. MANDAILING NATAL",
      "lat": 0.7432,
      "long": 99.3673
  },
  {
      "kabko": "Kab. NIAS",
      "lat": 1.0869,
      "long": 97.7417
  },
  {
      "kabko": "Kab. NIAS BARAT",
      "lat": 1.0116,
      "long": 97.4814
  },
  {
      "kabko": "Kab. NIAS SELATAN",
      "lat": 0.7086,
      "long": 97.8286
  },
  {
      "kabko": "Kab. NIAS UTARA",
      "lat": 1.3166,
      "long": 97.3949
  },
  {
      "kabko": "Kab. PADANG LAWAS",
      "lat": 1.1187,
      "long": 99.8125
  },
  {
      "kabko": "Kab. PADANG LAWAS UTARA",
      "lat": 1.5759,
      "long": 99.6341
  },
  {
      "kabko": "Kab. PAKPAK BHARAT",
      "lat": 2.5135,
      "long": 98.2213
  },
  {
      "kabko": "Kab. SAMOSIR",
      "lat": 2.6274,
      "long": 98.7922
  },
  {
      "kabko": "Kab. SERDANG BEDAGAI",
      "lat": 3.3372,
      "long": 99.0571
  },
  {
      "kabko": "Kab. SIMALUNGUN",
      "lat": 2.9782,
      "long": 99.2786
  },
  {
      "kabko": "Kab. TAPANULI SELATAN",
      "lat": 1.5775,
      "long": 99.2786
  },
  {
      "kabko": "Kab. TAPANULI TENGAH",
      "lat": 1.8493,
      "long": 98.7041
  },
  {
      "kabko": "Kab. TAPANULI UTARA",
      "lat": 2.0405,
      "long": 99.1013
  },
  {
      "kabko": "Kab. TOBA SAMOSIR",
      "lat": 2.3502,
      "long": 99.2786
  },
  {
      "kabko": "Kota BINJAI",
      "lat": 3.6135,
      "long": 98.5025
  },
  {
      "kabko": "Kota GUNUNGSITOLI",
      "lat": 1.2805,
      "long": 97.6147
  },
  {
      "kabko": "Kota MEDAN",
      "lat": 3.5952,
      "long": 98.6722
  },
  {
      "kabko": "Kota PADANGSIDEMPUAN",
      "lat": 1.3722,
      "long": 99.273
  },
  {
      "kabko": "Kota PEMATANGSIANTAR",
      "lat": 2.97,
      "long": 99.0682
  },
  {
      "kabko": "Kota SIBOLGA",
      "lat": 1.7368,
      "long": 98.7851
  },
  {
      "kabko": "Kota TANJUNGBALAI",
      "lat": 2.9662,
      "long": 99.7985
  },
  {
      "kabko": "Kota TEBING TINGGI",
      "lat": 3.3263,
      "long": 99.1567
  },
  {
      "kabko": "Kab. AGAM",
      "lat": -0.2209,
      "long": 100.1703
  },
  {
      "kabko": "Kab. DHARMASRAYA",
      "lat": -1.1121,
      "long": 101.6158
  },
  {
      "kabko": "Kab. KEPULAUAN MENTAWAI",
      "lat": -1.426,
      "long": 98.9245
  },
  {
      "kabko": "Kab. LIMA PULUH Kota",
      "lat": 0.0734,
      "long": 100.5296
  },
  {
      "kabko": "Kab. PADANG PARIAMAN",
      "lat": -0.5547,
      "long": 100.2152
  },
  {
      "kabko": "Kab. PASAMAN",
      "lat": 0.2209,
      "long": 100.1703
  },
  {
      "kabko": "Kab. PASAMAN BARAT",
      "lat": 0.2213,
      "long": 99.6341
  },
  {
      "kabko": "Kab. PESISIR SELATAN",
      "lat": -1.7223,
      "long": 100.8903
  },
  {
      "kabko": "Kab. SIJUNJUNG",
      "lat": -0.6647,
      "long": 101.0712
  },
  {
      "kabko": "Kab. SOLOK",
      "lat": -0.9644,
      "long": 100.8903
  },
  {
      "kabko": "Kab. SOLOK SELATAN",
      "lat": -1.4157,
      "long": 101.2524
  },
  {
      "kabko": "Kab. TANAH DATAR",
      "lat": -0.4797,
      "long": 100.5746
  },
  {
      "kabko": "Kota BUKITTINGGI",
      "lat": -0.3039,
      "long": 100.3835
  },
  {
      "kabko": "Kota PADANG",
      "lat": -0.9471,
      "long": 100.4172
  },
  {
      "kabko": "Kota PADANGPANJANG",
      "lat": -0.4661,
      "long": 100.3984
  },
  {
      "kabko": "Kota PARIAMAN",
      "lat": -0.6257,
      "long": 100.1233
  },
  {
      "kabko": "Kota PAYAKUMBUH",
      "lat": -0.2298,
      "long": 100.6309
  },
  {
      "kabko": "Kota SAWAHLUNTO",
      "lat": -0.6841,
      "long": 100.7323
  },
  {
      "kabko": "Kota SOLOK",
      "lat": -0.7885,
      "long": 100.655
  },
  {
      "kabko": "Kab. BENGKALIS",
      "lat": 1.4139,
      "long": 101.6158
  },
  {
      "kabko": "Kab. INDRAGIRI HILIR",
      "lat": -0.1457,
      "long": 102.9896
  },
  {
      "kabko": "Kab. INDRAGIRI HULU",
      "lat": -0.7361,
      "long": 102.2548
  },
  {
      "kabko": "Kab. KAMPAR",
      "lat": 0.1467,
      "long": 101.1617
  },
  {
      "kabko": "Kab. KEPULAUAN MERANTI",
      "lat": 0.9209,
      "long": 102.6676
  },
  {
      "kabko": "Kab. KUANTAN SINGINGI",
      "lat": -0.4412,
      "long": 101.5248
  },
  {
      "kabko": "Kab. PELALAWAN",
      "lat": 0.1461,
      "long": 102.2548
  },
  {
      "kabko": "Kab. ROKAN HILIR",
      "lat": 1.6464,
      "long": 100.8
  },
  {
      "kabko": "Kab. ROKAN HULU",
      "lat": 1.0411,
      "long": 100.4397
  },
  {
      "kabko": "Kab. SIAK",
      "lat": 0.8119,
      "long": 101.798
  },
  {
      "kabko": "Kota DUMAI",
      "lat": 1.6666,
      "long": 101.4002
  },
  {
      "kabko": "Kota PEKANBARU",
      "lat": 0.5071,
      "long": 101.4478
  },
  {
      "kabko": "Kab. BINTAN",
      "lat": 1.0619,
      "long": 104.5189
  },
  {
      "kabko": "Kab. KARIMUN",
      "lat": 0.7698,
      "long": 103.4049
  },
  {
      "kabko": "Kab. KEPULAUAN ANAMBAS",
      "lat": 3.1055,
      "long": 105.6537
  },
  {
      "kabko": "Kab. LINGGA",
      "lat": -0.4726,
      "long": 104.4258
  },
  {
      "kabko": "Kab. NATUNA",
      "lat": 4,
      "long": 108.25
  },
  {
      "kabko": "Kota BATAM",
      "lat": 1.1301,
      "long": 104.0529
  },
  {
      "kabko": "Kota TANJUNG PINANG",
      "lat": 0.9186,
      "long": 104.4665
  },
  {
      "kabko": "PULAU TAMBELAN Kab. BINTAN",
      "lat": 1.1216,
      "long": 107.3259
  },
  {
      "kabko": "PEKAJANG Kab. LINGGA",
      "lat": -0.0752,
      "long": 104.6305
  },
  {
      "kabko": "PULAU SERASAN Kab. NATUNA",
      "lat": 2.5179,
      "long": 109.0513
  },
  {
      "kabko": "PULAU MIDAI Kab. NATUNA",
      "lat": 2.9979,
      "long": 107.7755
  },
  {
      "kabko": "PULAU LAUT Kab. NATUNA",
      "lat": 4.7103,
      "long": 107.971
  },
  {
      "kabko": "Kab. BATANGHARI",
      "lat": -1.7084,
      "long": 103.0818
  },
  {
      "kabko": "Kab. BUNGO",
      "lat": -1.6401,
      "long": 101.8892
  },
  {
      "kabko": "Kab. KERINCI",
      "lat": -1.872,
      "long": 101.4339
  },
  {
      "kabko": "Kab. MERANGIN",
      "lat": -2.1753,
      "long": 101.9805
  },
  {
      "kabko": "Kab. MUARO JAMBI",
      "lat": -1.5521,
      "long": 103.8216
  },
  {
      "kabko": "Kab. SAROLANGUN",
      "lat": -2.323,
      "long": 102.7135
  },
  {
      "kabko": "Kab. TANJUNG JABUNG BARAT",
      "lat": -1.1058,
      "long": 103.0818
  },
  {
      "kabko": "Kab. TANJUNG JABUNG TIMUR",
      "lat": -1.1024,
      "long": 103.8216
  },
  {
      "kabko": "Kab. TEBO",
      "lat": -1.2593,
      "long": 102.3464
  },
  {
      "kabko": "Kota JAMBI",
      "lat": -1.6101,
      "long": 103.6131
  },
  {
      "kabko": "Kota SUNGAI PENUH",
      "lat": -2.0634,
      "long": 101.3947
  },
  {
      "kabko": "Kab. BENGKULU SELATAN",
      "lat": -4.3248,
      "long": 103.0357
  },
  {
      "kabko": "Kab. BENGKULU TENGAH",
      "lat": -3.6962,
      "long": 102.3922
  },
  {
      "kabko": "Kab. BENGKULU UTARA",
      "lat": -3.2663,
      "long": 101.9805
  },
  {
      "kabko": "Kab. KAUR",
      "lat": -4.5216,
      "long": 103.2663
  },
  {
      "kabko": "Kab. KEPAHIANG",
      "lat": -3.613,
      "long": 102.6676
  },
  {
      "kabko": "Kab. LEBONG",
      "lat": -3.1455,
      "long": 102.209
  },
  {
      "kabko": "Kab. MUKOMUKO",
      "lat": -2.6449,
      "long": 101.4339
  },
  {
      "kabko": "Kab. REJANG LEBONG",
      "lat": -3.4548,
      "long": 102.6676
  },
  {
      "kabko": "Kab. SELUMA",
      "lat": -4.0499,
      "long": 102.7135
  },
  {
      "kabko": "Kota BENGKULU",
      "lat": -3.7928,
      "long": 102.2608
  },
  {
      "kabko": "Kab. BANYUASIN",
      "lat": -2.6096,
      "long": 104.7521
  },
  {
      "kabko": "Kab. EMPAT LAWANG",
      "lat": -3.7286,
      "long": 102.8975
  },
  {
      "kabko": "Kab. LAHAT",
      "lat": -3.8009,
      "long": 103.3587
  },
  {
      "kabko": "Kab. MUARA ENIM",
      "lat": -3.7114,
      "long": 104.0072
  },
  {
      "kabko": "Kab. MUSI BANYUASIN",
      "lat": -2.5442,
      "long": 103.7289
  },
  {
      "kabko": "Kab. MUSI RAWAS",
      "lat": -3.0957,
      "long": 103.0818
  },
  {
      "kabko": "Kab. MUSI RAWAS UTARA",
      "lat": -2.7878,
      "long": 102.7135
  },
  {
      "kabko": "Kab. OGAN ILIR",
      "lat": -3.4265,
      "long": 104.6121
  },
  {
      "kabko": "Kab. OGAN KOMERING ILIR",
      "lat": -3.456,
      "long": 105.2195
  },
  {
      "kabko": "Kab. OGAN KOMERING ULU",
      "lat": -4.0283,
      "long": 104.0072
  },
  {
      "kabko": "Kab. OGAN KOMERING ULU SELATAN",
      "lat": -4.6682,
      "long": 104.0072
  },
  {
      "kabko": "Kab. OGAN KOMERING ULU TIMUR",
      "lat": -3.8568,
      "long": 104.7521
  },
  {
      "kabko": "Kab. PENUKAL ABAB LEMATANG ILIR",
      "lat": -3.2398,
      "long": 104.0072
  },
  {
      "kabko": "Kota LUBUKLINGGAU",
      "lat": -3.2996,
      "long": 102.8572
  },
  {
      "kabko": "Kota PAGAR ALAM",
      "lat": -4.042,
      "long": 103.2279
  },
  {
      "kabko": "Kota PALEMBANG",
      "lat": -2.9761,
      "long": 104.7754
  },
  {
      "kabko": "Kota PRABUMULIH",
      "lat": -3.4214,
      "long": 104.2437
  },
  {
      "kabko": "Kab. BANGKA",
      "lat": -1.8743,
      "long": 105.923
  },
  {
      "kabko": "Kab. BANGKA BARAT",
      "lat": -1.8405,
      "long": 105.5005
  },
  {
      "kabko": "Kab. BANGKA SELATAN",
      "lat": -2.7411,
      "long": 106.4406
  },
  {
      "kabko": "Kab. BANGKA TENGAH",
      "lat": -2.4008,
      "long": 106.2051
  },
  {
      "kabko": "Kab. BELITUNG",
      "lat": -2.7217,
      "long": 107.7636
  },
  {
      "kabko": "Kab. BELITUNG TIMUR",
      "lat": -2.8678,
      "long": 108.1429
  },
  {
      "kabko": "Kota PANGKAL PINANG",
      "lat": -2.1316,
      "long": 106.1169
  },
  {
      "kabko": "Kab. LAMPUNG TENGAH",
      "lat": -4.8008,
      "long": 105.3131
  },
  {
      "kabko": "Kab. LAMPUNG UTARA",
      "lat": -4.8134,
      "long": 104.7521
  },
  {
      "kabko": "Kab. LAMPUNG SELATAN",
      "lat": -5.5623,
      "long": 105.5474
  },
  {
      "kabko": "Kab. LAMPUNG BARAT",
      "lat": -5.1095,
      "long": 104.1466
  },
  {
      "kabko": "Kab. LAMPUNG TIMUR",
      "lat": -5.1135,
      "long": 105.6882
  },
  {
      "kabko": "Kab. MESUJI",
      "lat": -4.0045,
      "long": 105.3131
  },
  {
      "kabko": "Kab. PESAWARAN",
      "lat": -5.4932,
      "long": 105.0791
  },
  {
      "kabko": "Kab. PESISIR BARAT",
      "lat": -5.2928,
      "long": 104.1234
  },
  {
      "kabko": "Kab. PRINGSEWU",
      "lat": -5.3331,
      "long": 104.9856
  },
  {
      "kabko": "Kab. TULANG BAWANG",
      "lat": -4.3177,
      "long": 105.5005
  },
  {
      "kabko": "Kab. TULANG BAWANG BARAT",
      "lat": -4.5257,
      "long": 105.0791
  },
  {
      "kabko": "Kab. TANGGAMUS",
      "lat": -5.3027,
      "long": 104.5655
  },
  {
      "kabko": "Kab. WAY KANAN",
      "lat": -4.4964,
      "long": 104.5655
  },
  {
      "kabko": "Kota BANDAR LAMPUNG",
      "lat": -5.3971,
      "long": 105.2668
  },
  {
      "kabko": "Kota METRO",
      "lat": -5.1178,
      "long": 105.3073
  },
  {
      "kabko": "Kab. LEBAK",
      "lat": -6.5644,
      "long": 106.2522
  },
  {
      "kabko": "Kab. PANDEGLANG",
      "lat": -6.7483,
      "long": 105.6882
  },
  {
      "kabko": "Kab. SERANG",
      "lat": -6.1397,
      "long": 106.0405
  },
  {
      "kabko": "Kab. TANGERANG",
      "lat": -6.1872,
      "long": 106.4877
  },
  {
      "kabko": "Kota CILEGON",
      "lat": -6.0025,
      "long": 106.0111
  },
  {
      "kabko": "Kota SERANG",
      "lat": -6.1104,
      "long": 106.164
  },
  {
      "kabko": "Kota TANGERANG",
      "lat": -6.2024,
      "long": 106.6527
  },
  {
      "kabko": "Kota TANGERANG SELATAN",
      "lat": -6.2835,
      "long": 106.7113
  },
  {
      "kabko": "Kab. BANDUNG",
      "lat": -7.1341,
      "long": 107.6215
  },
  {
      "kabko": "Kab. BANDUNG BARAT",
      "lat": -6.8652,
      "long": 107.492
  },
  {
      "kabko": "Kab. BEKASI",
      "lat": -6.2474,
      "long": 107.1485
  },
  {
      "kabko": "Kab. BOGOR",
      "lat": -6.5518,
      "long": 106.6291
  },
  {
      "kabko": "Kab. CIAMIS",
      "lat": -7.3321,
      "long": 108.3493
  },
  {
      "kabko": "Kab. CIANJUR",
      "lat": -7.358,
      "long": 107.1957
  },
  {
      "kabko": "Kab. CIREBON",
      "lat": -6.6899,
      "long": 108.4751
  },
  {
      "kabko": "Kab. GARUT",
      "lat": -7.5012,
      "long": 107.7636
  },
  {
      "kabko": "Kab. INDRAMAYU",
      "lat": -6.3373,
      "long": 108.3258
  },
  {
      "kabko": "Kab. KARAWANG",
      "lat": -6.3227,
      "long": 107.3376
  },
  {
      "kabko": "Kab. KUNINGAN",
      "lat": -7.0138,
      "long": 108.5701
  },
  {
      "kabko": "Kab. MAJALENGKA",
      "lat": -6.7791,
      "long": 108.2852
  },
  {
      "kabko": "Kab. PANGANDARAN",
      "lat": -7.6151,
      "long": 108.4988
  },
  {
      "kabko": "Kab. PURWAKARTA",
      "lat": -6.5649,
      "long": 107.4322
  },
  {
      "kabko": "Kab. SUBANG",
      "lat": -6.3488,
      "long": 107.7636
  },
  {
      "kabko": "Kab. SUKABUMI",
      "lat": -6.8649,
      "long": 106.9536
  },
  {
      "kabko": "Kab. SUMEDANG",
      "lat": -6.8329,
      "long": 107.9532
  },
  {
      "kabko": "Kab. TASIKMALAYA",
      "lat": -7.6513,
      "long": 108.1429
  },
  {
      "kabko": "Kota BANDUNG",
      "lat": -6.9175,
      "long": 107.6191
  },
  {
      "kabko": "Kota BANJAR",
      "lat": -7.3707,
      "long": 108.5342
  },
  {
      "kabko": "Kota BEKASI",
      "lat": -6.2383,
      "long": 106.9756
  },
  {
      "kabko": "Kota BOGOR",
      "lat": -6.5971,
      "long": 106.806
  },
  {
      "kabko": "Kota CIMAHI",
      "lat": -6.8841,
      "long": 107.5413
  },
  {
      "kabko": "Kota CIREBON",
      "lat": -6.732,
      "long": 108.5523
  },
  {
      "kabko": "Kota DEPOK",
      "lat": -6.4025,
      "long": 106.7942
  },
  {
      "kabko": "Kota SUKABUMI",
      "lat": -6.9277,
      "long": 106.93
  },
  {
      "kabko": "Kota TASIKMALAYA",
      "lat": -7.3506,
      "long": 108.2172
  },
  {
      "kabko": "Kota JAKARTA",
      "lat": -6.1751,
      "long": 106.865
  },
  {
      "kabko": "Kab. ADMINISTRASI KEPULAUAN SERIBU",
      "lat": -5.6122,
      "long": 106.617
  },
  {
      "kabko": "Kab. BANJARNEGARA",
      "lat": -7.3794,
      "long": 109.6163
  },
  {
      "kabko": "Kab. BANYUMAS",
      "lat": -7.4832,
      "long": 109.1404
  },
  {
      "kabko": "Kab. BATANG",
      "lat": -7.0392,
      "long": 109.9021
  },
  {
      "kabko": "Kab. BLORA",
      "lat": -7.0122,
      "long": 111.3799
  },
  {
      "kabko": "Kab. BOYOLALI",
      "lat": -7.4318,
      "long": 110.6884
  },
  {
      "kabko": "Kab. BREBES",
      "lat": -6.9592,
      "long": 108.9027
  },
  {
      "kabko": "Kab. CILACAP",
      "lat": -7.6178,
      "long": 108.9027
  },
  {
      "kabko": "Kab. DEMAK",
      "lat": -6.9239,
      "long": 110.6646
  },
  {
      "kabko": "Kab. GROBOGAN",
      "lat": -7.1542,
      "long": 110.9507
  },
  {
      "kabko": "Kab. JEPARA",
      "lat": -6.5827,
      "long": 110.6787
  },
  {
      "kabko": "Kab. KARANGANYAR",
      "lat": -7.6387,
      "long": 111.046
  },
  {
      "kabko": "Kab. KEBUMEN",
      "lat": -7.6681,
      "long": 109.6525
  },
  {
      "kabko": "Kab. KENDAL",
      "lat": -7.0265,
      "long": 110.1879
  },
  {
      "kabko": "Kab. KLATEN",
      "lat": -7.6579,
      "long": 110.6646
  },
  {
      "kabko": "Kab. KUDUS",
      "lat": -6.7726,
      "long": 110.8791
  },
  {
      "kabko": "Kab. MAGELANG",
      "lat": -7.4305,
      "long": 110.2832
  },
  {
      "kabko": "Kab. PATI",
      "lat": -6.745,
      "long": 111.046
  },
  {
      "kabko": "Kab. PEKALONGAN",
      "lat": -7.0517,
      "long": 109.6163
  },
  {
      "kabko": "Kab. PEMALANG",
      "lat": -7.0599,
      "long": 109.4259
  },
  {
      "kabko": "Kab. PURBALINGGA",
      "lat": -7.3059,
      "long": 109.4259
  },
  {
      "kabko": "Kab. PURWOREJO",
      "lat": -7.6965,
      "long": 109.9989
  },
  {
      "kabko": "Kab. REMBANG",
      "lat": -6.8082,
      "long": 111.4276
  },
  {
      "kabko": "Kab. SEMARANG",
      "lat": -7.1765,
      "long": 110.4739
  },
  {
      "kabko": "Kab. SRAGEN",
      "lat": -7.4303,
      "long": 111.0092
  },
  {
      "kabko": "Kab. SUKOHARJO",
      "lat": -7.6484,
      "long": 110.8553
  },
  {
      "kabko": "Kab. TEGAL",
      "lat": -6.8588,
      "long": 109.1048
  },
  {
      "kabko": "Kab. TEMANGGUNG",
      "lat": -7.2749,
      "long": 110.0892
  },
  {
      "kabko": "Kab. WONOGIRI",
      "lat": -7.8846,
      "long": 111.046
  },
  {
      "kabko": "Kab. WONOSOBO",
      "lat": -7.3632,
      "long": 109.9002
  },
  {
      "kabko": "Kota MAGELANG",
      "lat": -7.4797,
      "long": 110.2177
  },
  {
      "kabko": "Kota PEKALONGAN",
      "lat": -6.8898,
      "long": 109.6746
  },
  {
      "kabko": "Kota SALATIGA",
      "lat": -7.3305,
      "long": 110.5084
  },
  {
      "kabko": "Kota SEMARANG",
      "lat": -7.0051,
      "long": 110.4381
  },
  {
      "kabko": "Kota SURAKARTA",
      "lat": -7.5755,
      "long": 110.8243
  },
  {
      "kabko": "Kota TEGAL",
      "lat": -6.8797,
      "long": 109.1256
  },
  {
      "kabko": "Kab. BANTUL",
      "lat": -7.919,
      "long": 110.3785
  },
  {
      "kabko": "Kab. GUNUNGKIDUL",
      "lat": -8.0305,
      "long": 110.6169
  },
  {
      "kabko": "Kab. KULON PROGO",
      "lat": -7.8267,
      "long": 110.1641
  },
  {
      "kabko": "Kab. SLEMAN",
      "lat": -7.7325,
      "long": 110.4024
  },
  {
      "kabko": "Kota YOGYAKARTA",
      "lat": -7.7956,
      "long": 110.3695
  },
  {
      "kabko": "Kab. BANGKALAN",
      "lat": -7.0384,
      "long": 112.9137
  },
  {
      "kabko": "Kab. BANYUWANGI",
      "lat": -8.2191,
      "long": 114.3691
  },
  {
      "kabko": "Kab. BLITAR",
      "lat": -8.0955,
      "long": 112.1609
  },
  {
      "kabko": "Kab. BOJONEGORO",
      "lat": -7.3175,
      "long": 111.7615
  },
  {
      "kabko": "Kab. BONDOWOSO",
      "lat": -7.9674,
      "long": 113.9061
  },
  {
      "kabko": "Kab. GRESIK",
      "lat": -7.155,
      "long": 112.5722
  },
  {
      "kabko": "Kab. JEMBER",
      "lat": -8.1845,
      "long": 113.6681
  },
  {
      "kabko": "Kab. JOMBANG",
      "lat": -7.5741,
      "long": 112.2861
  },
  {
      "kabko": "Kab. KEDIRI",
      "lat": -7.8232,
      "long": 112.1907
  },
  {
      "kabko": "Kab. LAMONGAN",
      "lat": -7.1269,
      "long": 112.3338
  },
  {
      "kabko": "Kab. LUMAJANG",
      "lat": -8.0944,
      "long": 113.1442
  },
  {
      "kabko": "Kab. MADIUN",
      "lat": -7.6093,
      "long": 111.6184
  },
  {
      "kabko": "Kab. MAGETAN",
      "lat": -7.6433,
      "long": 111.356
  },
  {
      "kabko": "Kab. MALANG",
      "lat": -8.2422,
      "long": 112.7152
  },
  {
      "kabko": "Kab. MOJOKERTO",
      "lat": -7.4699,
      "long": 112.4351
  },
  {
      "kabko": "Kab. NGANJUK",
      "lat": -7.5944,
      "long": 111.9046
  },
  {
      "kabko": "Kab. NGAWI",
      "lat": -7.461,
      "long": 111.3322
  },
  {
      "kabko": "Kab. PACITAN",
      "lat": -8.1263,
      "long": 111.1414
  },
  {
      "kabko": "Kab. PAMEKASAN",
      "lat": -7.1051,
      "long": 113.5252
  },
  {
      "kabko": "Kab. PASURUAN",
      "lat": -7.786,
      "long": 112.8582
  },
  {
      "kabko": "Kab. PONOROGO",
      "lat": -7.8651,
      "long": 111.4696
  },
  {
      "kabko": "Kab. PROBOLINGGO",
      "lat": -7.8718,
      "long": 113.4776
  },
  {
      "kabko": "Kab. SAMPANG",
      "lat": -7.0402,
      "long": 113.2394
  },
  {
      "kabko": "Kab. SIDOARJO",
      "lat": -7.4726,
      "long": 112.6675
  },
  {
      "kabko": "Kab. SITUBONDO",
      "lat": -7.7889,
      "long": 114.1915
  },
  {
      "kabko": "Kab. SUMENEP",
      "lat": -6.9254,
      "long": 113.9061
  },
  {
      "kabko": "Kab. TRENGGALEK",
      "lat": -8.1824,
      "long": 111.6184
  },
  {
      "kabko": "Kab. TUBAN",
      "lat": -6.8955,
      "long": 112.0298
  },
  {
      "kabko": "Kab. TULUNGAGUNG",
      "lat": -8.0912,
      "long": 111.9642
  },
  {
      "kabko": "Kota BATU",
      "lat": -7.8831,
      "long": 112.5334
  },
  {
      "kabko": "Kota BLITAR",
      "lat": -8.0955,
      "long": 112.1609
  },
  {
      "kabko": "Kota KEDIRI",
      "lat": -7.848,
      "long": 112.0178
  },
  {
      "kabko": "Kota MADIUN",
      "lat": -7.6311,
      "long": 111.53
  },
  {
      "kabko": "Kota MALANG",
      "lat": -7.9666,
      "long": 112.6326
  },
  {
      "kabko": "Kota MOJOKERTO",
      "lat": -7.4705,
      "long": 112.4401
  },
  {
      "kabko": "Kota PASURUAN",
      "lat": -7.6469,
      "long": 112.8999
  },
  {
      "kabko": "Kota PROBOLINGGO",
      "lat": -7.7764,
      "long": 113.2037
  },
  {
      "kabko": "Kota SURABAYA",
      "lat": -7.2575,
      "long": 112.7521
  },
  {
      "kabko": "Kab. BADUNG",
      "lat": -8.5819,
      "long": 115.1771
  },
  {
      "kabko": "Kab. BANGLI",
      "lat": -8.2976,
      "long": 115.3549
  },
  {
      "kabko": "Kab. BULELENG",
      "lat": -8.2239,
      "long": 114.9517
  },
  {
      "kabko": "Kab. GIANYAR",
      "lat": -8.4248,
      "long": 115.2601
  },
  {
      "kabko": "Kab. JEMBRANA",
      "lat": -8.3233,
      "long": 114.6668
  },
  {
      "kabko": "Kab. KARANGASEM",
      "lat": -8.3466,
      "long": 115.5207
  },
  {
      "kabko": "Kab. KLUNGKUNG",
      "lat": -8.7278,
      "long": 115.5444
  },
  {
      "kabko": "Kab. TABANAN",
      "lat": -8.4596,
      "long": 115.0466
  },
  {
      "kabko": "Kota DENPASAR",
      "lat": -8.6705,
      "long": 115.2126
  },
  {
      "kabko": "Kab. BIMA",
      "lat": -8.4354,
      "long": 118.6265
  },
  {
      "kabko": "Kab. DOMPU",
      "lat": -8.5364,
      "long": 118.3462
  },
  {
      "kabko": "Kab. LOMBOK BARAT",
      "lat": -8.6465,
      "long": 116.1123
  },
  {
      "kabko": "Kab. LOMBOK TENGAH",
      "lat": -8.6946,
      "long": 116.2777
  },
  {
      "kabko": "Kab. LOMBOK TIMUR",
      "lat": -8.5134,
      "long": 116.561
  },
  {
      "kabko": "Kab. LOMBOK UTARA",
      "lat": -8.3739,
      "long": 116.2777
  },
  {
      "kabko": "Kab. SUMBAWA",
      "lat": -8.6529,
      "long": 117.3616
  },
  {
      "kabko": "Kab. SUMBAWA BARAT",
      "lat": -8.9293,
      "long": 116.891
  },
  {
      "kabko": "Kota BIMA",
      "lat": -8.4643,
      "long": 118.7449
  },
  {
      "kabko": "Kota MATARAM",
      "lat": -8.577,
      "long": 116.1005
  },
  {
      "kabko": "Kab. ALOR",
      "lat": -8.2928,
      "long": 124.5528
  },
  {
      "kabko": "Kab. BELU",
      "lat": -9.1539,
      "long": 124.9066
  },
  {
      "kabko": "Kab. ENDE",
      "lat": -8.6763,
      "long": 121.7195
  },
  {
      "kabko": "Kab. FLORES TIMUR",
      "lat": -8.3131,
      "long": 122.9663
  },
  {
      "kabko": "Kab. KUPANG",
      "lat": -9.9906,
      "long": 123.8858
  },
  {
      "kabko": "Kab. LEMBATA",
      "lat": -8.4719,
      "long": 123.4832
  },
  {
      "kabko": "Kab. MALAKA",
      "lat": -9.5309,
      "long": 124.9066
  },
  {
      "kabko": "Kab. MANGGARAI",
      "lat": -8.6797,
      "long": 120.3897
  },
  {
      "kabko": "Kab. MANGGARAI BARAT",
      "lat": -8.6688,
      "long": 120.0665
  },
  {
      "kabko": "Kab. MANGGARAI TIMUR",
      "lat": -8.6207,
      "long": 120.62
  },
  {
      "kabko": "Kab. NGADA",
      "lat": -8.743,
      "long": 120.9876
  },
  {
      "kabko": "Kab. NAGEKEO",
      "lat": -8.6754,
      "long": 121.3084
  },
  {
      "kabko": "Kab. ROTE NDAO",
      "lat": -10.7386,
      "long": 123.1239
  },
  {
      "kabko": "Kab. SABU RAIJUA",
      "lat": -10.5541,
      "long": 121.8335
  },
  {
      "kabko": "Kab. SIKKA",
      "lat": -8.6766,
      "long": 122.1292
  },
  {
      "kabko": "Kab. SUMBA BARAT",
      "lat": -9.6548,
      "long": 119.3947
  },
  {
      "kabko": "Kab. SUMBA BARAT DAYA",
      "lat": -9.5391,
      "long": 119.1391
  },
  {
      "kabko": "Kab. SUMBA TENGAH",
      "lat": -9.4879,
      "long": 119.6963
  },
  {
      "kabko": "Kab. SUMBA TIMUR",
      "lat": -9.9802,
      "long": 120.3436
  },
  {
      "kabko": "Kab. TIMOR TENGAH SELATAN",
      "lat": -9.7763,
      "long": 124.4198
  },
  {
      "kabko": "Kab. TIMOR TENGAH UTARA",
      "lat": -9.4523,
      "long": 124.5971
  },
  {
      "kabko": "Kota KUPANG",
      "lat": -10.1772,
      "long": 123.607
  },
  {
      "kabko": "Kab. BENGKAYANG",
      "lat": 1.0691,
      "long": 109.6639
  },
  {
      "kabko": "Kab. KAPUAS HULU",
      "lat": 0.8337,
      "long": 113.0012
  },
  {
      "kabko": "Kab. KAYONG UTARA",
      "lat": -0.9226,
      "long": 110.045
  },
  {
      "kabko": "Kab. KETAPANG",
      "lat": -1.5698,
      "long": 110.5215
  },
  {
      "kabko": "Kab. KUBU RAYA",
      "lat": -0.3534,
      "long": 109.4735
  },
  {
      "kabko": "Kab. LANDAK",
      "lat": 0.4237,
      "long": 109.7592
  },
  {
      "kabko": "Kab. MELAWI",
      "lat": -0.7001,
      "long": 111.6661
  },
  {
      "kabko": "Kab. MEMPAWAH",
      "lat": 0.3897,
      "long": 109.1404
  },
  {
      "kabko": "Kab. SAMBAS",
      "lat": 1.3625,
      "long": 109.2832
  },
  {
      "kabko": "Kab. SANGGAU",
      "lat": 0.14,
      "long": 110.5215
  },
  {
      "kabko": "Kab. SEKADAU",
      "lat": -0.0697,
      "long": 110.9984
  },
  {
      "kabko": "Kab. SINTANG",
      "lat": -0.1378,
      "long": 112.8106
  },
  {
      "kabko": "Kota PONTIANAK",
      "lat": -0.0263,
      "long": 109.3425
  },
  {
      "kabko": "Kota SINGKAWANG",
      "lat": 0.906,
      "long": 108.9872
  },
  {
      "kabko": "Kab. BALANGAN",
      "lat": -2.326,
      "long": 115.6155
  },
  {
      "kabko": "Kab. BANJAR",
      "lat": -3.32,
      "long": 114.9991
  },
  {
      "kabko": "Kab. BARITO KUALA",
      "lat": -3.0715,
      "long": 114.6668
  },
  {
      "kabko": "Kab. HULU SUNGAI SELATAN",
      "lat": -2.7663,
      "long": 115.2363
  },
  {
      "kabko": "Kab. HULU SUNGAI TENGAH",
      "lat": -2.6153,
      "long": 115.5207
  },
  {
      "kabko": "Kab. HULU SUNGAI UTARA",
      "lat": -2.4421,
      "long": 115.1889
  },
  {
      "kabko": "Kab. KotaBARU",
      "lat": -3.003,
      "long": 115.9468
  },
  {
      "kabko": "Kab. TABALONG",
      "lat": -1.8643,
      "long": 115.5681
  },
  {
      "kabko": "Kab. TANAH BUMBU",
      "lat": -3.4512,
      "long": 115.5681
  },
  {
      "kabko": "Kab. TANAH LAUT",
      "lat": -3.7694,
      "long": 114.8093
  },
  {
      "kabko": "Kab. TAPIN",
      "lat": -2.9161,
      "long": 115.0466
  },
  {
      "kabko": "Kota BANJARBARU",
      "lat": -3.4572,
      "long": 114.8103
  },
  {
      "kabko": "Kota BANJARMASIN",
      "lat": -3.3186,
      "long": 114.5944
  },
  {
      "kabko": "Kab. BARITO SELATAN",
      "lat": -1.8759,
      "long": 114.8093
  },
  {
      "kabko": "Kab. BARITO TIMUR",
      "lat": -2.0124,
      "long": 115.1889
  },
  {
      "kabko": "Kab. BARITO UTARA",
      "lat": -0.9587,
      "long": 115.094
  },
  {
      "kabko": "Kab. GUNUNG MAS",
      "lat": -1.2522,
      "long": 113.5729
  },
  {
      "kabko": "Kab. KAPUAS",
      "lat": -1.8116,
      "long": 114.3341
  },
  {
      "kabko": "Kab. KATINGAN",
      "lat": -0.9758,
      "long": 112.8106
  },
  {
      "kabko": "Kab. KotaWARINGIN BARAT",
      "lat": -2.5063,
      "long": 111.7615
  },
  {
      "kabko": "Kab. KotaWARINGIN TIMUR",
      "lat": -2.1225,
      "long": 112.8106
  },
  {
      "kabko": "Kab. LAMANDAU",
      "lat": -1.8526,
      "long": 111.2845
  },
  {
      "kabko": "Kab. MURUNG RAYA",
      "lat": -0.1362,
      "long": 114.3341
  },
  {
      "kabko": "Kab. PULANG PISAU",
      "lat": -2.685,
      "long": 113.9536
  },
  {
      "kabko": "Kab. SUKAMARA",
      "lat": -2.6268,
      "long": 111.2368
  },
  {
      "kabko": "Kab. SERUYAN",
      "lat": -3.0123,
      "long": 112.4291
  },
  {
      "kabko": "Kota PALANGKARAYA",
      "lat": -2.2161,
      "long": 113.914
  },
  {
      "kabko": "Kab. BERAU",
      "lat": 2.0451,
      "long": 117.3616
  },
  {
      "kabko": "Kab. KUTAI BARAT",
      "lat": -0.4052,
      "long": 115.8522
  },
  {
      "kabko": "Kab. KUTAI KARTANEGARA",
      "lat": -0.1337,
      "long": 116.6082
  },
  {
      "kabko": "Kab. KUTAI TIMUR",
      "lat": 0.9434,
      "long": 116.9852
  },
  {
      "kabko": "Kab. MAHAKAM ULU",
      "lat": 0.9617,
      "long": 114.7143
  },
  {
      "kabko": "Kab. PASER",
      "lat": -1.7175,
      "long": 115.9468
  },
  {
      "kabko": "Kab. PENAJAM PASER UTARA",
      "lat": -1.2917,
      "long": 116.5138
  },
  {
      "kabko": "Kota BALIKPAPAN",
      "lat": -1.2379,
      "long": 116.8529
  },
  {
      "kabko": "Kota BONTANG",
      "lat": 0.1209,
      "long": 117.48
  },
  {
      "kabko": "Kota SAMARINDA",
      "lat": -0.4948,
      "long": 117.1436
  },
  {
      "kabko": "Kab. BULUNGAN",
      "lat": 2.9042,
      "long": 116.9852
  },
  {
      "kabko": "Kab. MALINAU",
      "lat": 3.0731,
      "long": 116.0414
  },
  {
      "kabko": "Kab. NUNUKAN",
      "lat": 4.081,
      "long": 116.6082
  },
  {
      "kabko": "Kab. TANA TIDUNG",
      "lat": 3.5519,
      "long": 117.0794
  },
  {
      "kabko": "Kota TARAKAN",
      "lat": 3.3274,
      "long": 117.5785
  },
  {
      "kabko": "Kab. BOALEMO",
      "lat": 0.7013,
      "long": 122.2654
  },
  {
      "kabko": "Kab. BONE BOLANGO",
      "lat": 0.5658,
      "long": 123.3486
  },
  {
      "kabko": "Kab. GORONTALO",
      "lat": 0.5693,
      "long": 122.8084
  },
  {
      "kabko": "Kab. GORONTALO UTARA",
      "lat": 0.9253,
      "long": 122.492
  },
  {
      "kabko": "Kab. POHUWATO",
      "lat": 0.7055,
      "long": 121.7195
  },
  {
      "kabko": "Kota GORONTALO",
      "lat": 0.5435,
      "long": 123.0568
  },
  {
      "kabko": "Kab. BANTAENG",
      "lat": -5.5169,
      "long": 120.0203
  },
  {
      "kabko": "Kab. BARRU",
      "lat": -4.4364,
      "long": 119.6499
  },
  {
      "kabko": "Kab. BONE",
      "lat": -4.7443,
      "long": 120.0665
  },
  {
      "kabko": "Kab. BULUKUMBA",
      "lat": -5.4329,
      "long": 120.2051
  },
  {
      "kabko": "Kab. ENREKANG",
      "lat": -3.4591,
      "long": 119.8815
  },
  {
      "kabko": "Kab. GOWA",
      "lat": -5.3103,
      "long": 119.7426
  },
  {
      "kabko": "Kab. JENEPONTO",
      "lat": -5.5546,
      "long": 119.6731
  },
  {
      "kabko": "Kab. KEPULAUAN SELAYAR",
      "lat": -6.287,
      "long": 120.5049
  },
  {
      "kabko": "Kab. LUWU",
      "lat": -3.3052,
      "long": 120.2513
  },
  {
      "kabko": "Kab. LUWU TIMUR",
      "lat": -2.5826,
      "long": 121.171
  },
  {
      "kabko": "Kab. LUWU UTARA",
      "lat": -2.269,
      "long": 119.9741
  },
  {
      "kabko": "Kab. MAROS",
      "lat": -5.0549,
      "long": 119.6963
  },
  {
      "kabko": "Kab. PANGKAJENE DAN KEPULAUAN",
      "lat": -4.805,
      "long": 119.5572
  },
  {
      "kabko": "Kab. PINRANG",
      "lat": -3.6483,
      "long": 119.5572
  },
  {
      "kabko": "Kab. SIDENRENG RAPPANG",
      "lat": -3.7739,
      "long": 120.0203
  },
  {
      "kabko": "Kab. SINJAI",
      "lat": -5.2172,
      "long": 120.1127
  },
  {
      "kabko": "Kab. SOPPENG",
      "lat": -4.3519,
      "long": 119.9278
  },
  {
      "kabko": "Kab. TAKALAR",
      "lat": -5.4162,
      "long": 119.4876
  },
  {
      "kabko": "Kab. TANA TORAJA",
      "lat": -3.0753,
      "long": 119.7426
  },
  {
      "kabko": "Kab. TORAJA UTARA",
      "lat": -2.8622,
      "long": 119.8352
  },
  {
      "kabko": "Kab. WAJO",
      "lat": -4.0222,
      "long": 120.0665
  },
  {
      "kabko": "Kota MAKASSAR",
      "lat": -5.1477,
      "long": 119.4327
  },
  {
      "kabko": "Kota PALOPO",
      "lat": -3.0016,
      "long": 120.1985
  },
  {
      "kabko": "Kota PAREPARE",
      "lat": -4.0096,
      "long": 119.6291
  },
  {
      "kabko": "Kab. BOMBANA",
      "lat": -4.6543,
      "long": 121.9018
  },
  {
      "kabko": "Kab. BUTON",
      "lat": -5.3096,
      "long": 122.9888
  },
  {
      "kabko": "Kab. BUTON SELATAN",
      "lat": -5.3096,
      "long": 122.9888
  },
  {
      "kabko": "Kab. BUTON TENGAH",
      "lat": -5.3891,
      "long": 122.5599
  },
  {
      "kabko": "Kab. BUTON UTARA",
      "lat": -4.7023,
      "long": 123.0339
  },
  {
      "kabko": "Kab. KOLAKA",
      "lat": -3.9947,
      "long": 121.5827
  },
  {
      "kabko": "Kab. KOLAKA TIMUR",
      "lat": -4.2279,
      "long": 121.9018
  },
  {
      "kabko": "Kab. KOLAKA UTARA",
      "lat": -3.1347,
      "long": 121.171
  },
  {
      "kabko": "Kab. KONAWE",
      "lat": -3.938,
      "long": 122.0837
  },
  {
      "kabko": "Kab. KONAWE KEPULAUAN",
      "lat": -4.1361,
      "long": 123.1239
  },
  {
      "kabko": "Kab. KONAWE SELATAN",
      "lat": -4.2028,
      "long": 122.4467
  },
  {
      "kabko": "Kab. KONAWE UTARA",
      "lat": -3.3803,
      "long": 122.0837
  },
  {
      "kabko": "Kab. MUNA",
      "lat": -4.9016,
      "long": 122.6277
  },
  {
      "kabko": "Kab. MUNA BARAT",
      "lat": -4.9016,
      "long": 122.6277
  },
  {
      "kabko": "Kab. WAKATOBI",
      "lat": -5.6504,
      "long": 123.8902
  },
  {
      "kabko": "Kota BAU-BAU",
      "lat": -5.5071,
      "long": 122.5969
  },
  {
      "kabko": "Kota KENDARI",
      "lat": -3.9985,
      "long": 122.513
  },
  {
      "kabko": "Kab. BANGGAI",
      "lat": -0.9562,
      "long": 122.6277
  },
  {
      "kabko": "Kab. BANGGAI KEPULAUAN",
      "lat": -0.9562,
      "long": 122.6277
  },
  {
      "kabko": "Kab. BANGGAI LAUT",
      "lat": -1.6735,
      "long": 123.5504
  },
  {
      "kabko": "Kab. BUOL",
      "lat": 0.9695,
      "long": 121.3542
  },
  {
      "kabko": "Kab. DONGGALA",
      "lat": -0.4233,
      "long": 119.8352
  },
  {
      "kabko": "Kab. MOROWALI",
      "lat": -2.6987,
      "long": 121.9018
  },
  {
      "kabko": "Kab. MOROWALI UTARA",
      "lat": -1.6312,
      "long": 121.3542
  },
  {
      "kabko": "Kab. PARIGI MOUTONG",
      "lat": 0.5818,
      "long": 120.8039
  },
  {
      "kabko": "Kab. POSO",
      "lat": -1.6469,
      "long": 120.4358
  },
  {
      "kabko": "Kab. SIGI",
      "lat": -1.386,
      "long": 119.8815
  },
  {
      "kabko": "Kab. TOJO UNA-UNA",
      "lat": -1.0988,
      "long": 121.537
  },
  {
      "kabko": "Kab. TOLI-TOLI",
      "lat": 0.8768,
      "long": 120.758
  },
  {
      "kabko": "Kota PALU",
      "lat": -0.9003,
      "long": 119.878
  },
  {
      "kabko": "Kab. BOLAANG MONGONDOW",
      "lat": 0.6871,
      "long": 124.0641
  },
  {
      "kabko": "Kab. BOLAANG MONGONDOW SELATAN",
      "lat": 0.4053,
      "long": 123.8411
  },
  {
      "kabko": "Kab. BOLAANG MONGONDOW TIMUR",
      "lat": 0.7153,
      "long": 124.4642
  },
  {
      "kabko": "Kab. BOLAANG MONGONDOW UTARA",
      "lat": 0.907,
      "long": 123.2657
  },
  {
      "kabko": "Kab. KEPULAUAN SANGIHE",
      "lat": 3.6329,
      "long": 125.5001
  },
  {
      "kabko": "Kab. KEPULAUAN SIAU TAGULANDANG BIARO",
      "lat": 2.346,
      "long": 125.4124
  },
  {
      "kabko": "Kab. KEPULAUAN TALAUD",
      "lat": 4.3067,
      "long": 126.8035
  },
  {
      "kabko": "Kab. MINAHASA",
      "lat": 1.2169,
      "long": 124.8183
  },
  {
      "kabko": "Kab. MINAHASA SELATAN",
      "lat": 1.0947,
      "long": 124.4642
  },
  {
      "kabko": "Kab. MINAHASA TENGGARA",
      "lat": 1.0279,
      "long": 124.7299
  },
  {
      "kabko": "Kab. MINAHASA UTARA",
      "lat": 1.5328,
      "long": 124.9948
  },
  {
      "kabko": "Kota BITUNG",
      "lat": 1.4404,
      "long": 125.1217
  },
  {
      "kabko": "Kota KotaMOBAGU",
      "lat": 0.7244,
      "long": 124.3199
  },
  {
      "kabko": "Kota MANADO",
      "lat": 1.4748,
      "long": 124.8421
  },
  {
      "kabko": "Kota TOMOHON",
      "lat": 1.3229,
      "long": 124.8405
  },
  {
      "kabko": "Kab. MAJENE",
      "lat": -3.0297,
      "long": 118.9063
  },
  {
      "kabko": "Kab. MAMASA",
      "lat": -2.9118,
      "long": 119.325
  },
  {
      "kabko": "Kab. MAMUJU",
      "lat": -2.492,
      "long": 119.325
  },
  {
      "kabko": "Kab. MAMUJU TENGAH",
      "lat": -1.9354,
      "long": 119.5108
  },
  {
      "kabko": "Kab. MAMUJU UTARA",
      "lat": -1.5265,
      "long": 119.5108
  },
  {
      "kabko": "Kab. POLEWALI MANDAR",
      "lat": -3.3419,
      "long": 119.1391
  },
  {
      "kabko": "Kab. BURU",
      "lat": -3.3307,
      "long": 126.6957
  },
  {
      "kabko": "Kab. BURU SELATAN",
      "lat": -3.7274,
      "long": 126.6957
  },
  {
      "kabko": "Kab. KEPULAUAN ARU",
      "lat": -6.1947,
      "long": 134.5502
  },
  {
      "kabko": "Kab. MALUKU BARAT DAYA",
      "lat": -7.7852,
      "long": 126.3498
  },
  {
      "kabko": "Kab. MALUKU TENGAH",
      "lat": -3.0167,
      "long": 129.4864
  },
  {
      "kabko": "Kab. MALUKU TENGGARA",
      "lat": -5.7512,
      "long": 132.7272
  },
  {
      "kabko": "Kab. MALUKU TENGGARA BARAT",
      "lat": -7.5323,
      "long": 131.3611
  },
  {
      "kabko": "Kab. SERAM BAGIAN BARAT",
      "lat": -3.1272,
      "long": 128.4008
  },
  {
      "kabko": "Kab. SERAM BAGIAN TIMUR",
      "lat": -3.4233,
      "long": 130.2271
  },
  {
      "kabko": "Kota AMBON",
      "lat": -3.6554,
      "long": 128.1908
  },
  {
      "kabko": "Kota TUAL",
      "lat": -5.6266,
      "long": 132.7521
  },
  {
      "kabko": "Kab. HALMAHERA BARAT",
      "lat": 1.359,
      "long": 127.5961
  },
  {
      "kabko": "Kab. HALMAHERA TENGAH",
      "lat": 0.442,
      "long": 128.3587
  },
  {
      "kabko": "Kab. HALMAHERA UTARA",
      "lat": 1.5074,
      "long": 127.8937
  },
  {
      "kabko": "Kab. HALMAHERA SELATAN",
      "lat": -1.5109,
      "long": 127.7238
  },
  {
      "kabko": "Kab. KEPULAUAN SULA",
      "lat": -1.8456,
      "long": 125.3431
  },
  {
      "kabko": "Kab. HALMAHERA TIMUR",
      "lat": 1.3121,
      "long": 128.485
  },
  {
      "kabko": "Kab. PULAU MOROTAI",
      "lat": 2.3657,
      "long": 128.4008
  },
  {
      "kabko": "Kab. PULAU TALIABU",
      "lat": -1.8268,
      "long": 124.7741
  },
  {
      "kabko": "Kota TERNATE",
      "lat": 0.771,
      "long": 127.3695
  },
  {
      "kabko": "Kota TIDORE KEPULAUAN",
      "lat": 0.674,
      "long": 127.4041
  },
  {
      "kabko": "Kab. ASMAT",
      "lat": -5.0574,
      "long": 138.3988
  },
  {
      "kabko": "Kab. BIAK NUMFOR",
      "lat": -1.0381,
      "long": 135.9801
  },
  {
      "kabko": "Kab. BOVEN DIGOEL",
      "lat": -5.74,
      "long": 140.3482
  },
  {
      "kabko": "Kab. DEIYAI",
      "lat": -4.0975,
      "long": 136.4393
  },
  {
      "kabko": "Kab. DOGIYAI",
      "lat": -4.0454,
      "long": 135.6763
  },
  {
      "kabko": "Kab. INTAN JAYA",
      "lat": -3.5076,
      "long": 136.7478
  },
  {
      "kabko": "Kab. JAYAPURA",
      "lat": -2.9879,
      "long": 139.8547
  },
  {
      "kabko": "Kab. JAYAWIJAYA",
      "lat": -4.0004,
      "long": 138.7995
  },
  {
      "kabko": "Kab. KEEROM",
      "lat": -3.345,
      "long": 140.7624
  },
  {
      "kabko": "Kab. KEPULAUAN YAPEN",
      "lat": -1.7469,
      "long": 136.1709
  },
  {
      "kabko": "Kab. LANNY JAYA",
      "lat": -3.971,
      "long": 138.319
  },
  {
      "kabko": "Kab. MAMBERAMO RAYA",
      "lat": -2.5331,
      "long": 137.7638
  },
  {
      "kabko": "Kab. MAMBERAMO TENGAH",
      "lat": -2.3746,
      "long": 138.319
  },
  {
      "kabko": "Kab. MAPPI",
      "lat": -6.7606,
      "long": 139.6911
  },
  {
      "kabko": "Kab. MERAUKE",
      "lat": -7.7838,
      "long": 139.0413
  },
  {
      "kabko": "Kab. MIMIKA",
      "lat": -4.4553,
      "long": 137.1362
  },
  {
      "kabko": "Kab. NABIRE",
      "lat": -3.5095,
      "long": 135.7521
  },
  {
      "kabko": "Kab. NDUGA",
      "lat": -4.4069,
      "long": 138.2394
  },
  {
      "kabko": "Kab. PANIAI",
      "lat": -3.7876,
      "long": 136.3625
  },
  {
      "kabko": "Kab. PEGUNUNGAN BINTANG",
      "lat": -4.559,
      "long": 140.5136
  },
  {
      "kabko": "Kab. PUNCAK",
      "lat": -3.8649,
      "long": 137.6062
  },
  {
      "kabko": "Kab. PUNCAK JAYA",
      "lat": -3.4468,
      "long": 137.8427
  },
  {
      "kabko": "Kab. SARMI",
      "lat": -2.4678,
      "long": 139.2031
  },
  {
      "kabko": "Kab. SUPIORI",
      "lat": -0.7295,
      "long": 135.6385
  },
  {
      "kabko": "Kab. TOLIKARA",
      "lat": -3.4811,
      "long": 138.4787
  },
  {
      "kabko": "Kab. WAROPEN",
      "lat": -1.7469,
      "long": 136.1709
  },
  {
      "kabko": "Kab. YAHUKIMO",
      "lat": -4.494,
      "long": 139.528
  },
  {
      "kabko": "Kab. YALIMO",
      "lat": -3.7853,
      "long": 139.4466
  },
  {
      "kabko": "Kota JAYAPURA",
      "lat": -2.5916,
      "long": 140.669
  },
  {
      "kabko": "Kab. YAPEN WAROPEN",
      "lat": -1.7469,
      "long": 136.1709
  },
  {
      "kabko": "Kab. FAKFAK",
      "lat": -3.0977,
      "long": 133.0195
  },
  {
      "kabko": "Kab. KAIMANA",
      "lat": -3.2884,
      "long": 133.9437
  },
  {
      "kabko": "Kab. MANOKWARI",
      "lat": -0.999,
      "long": 133.0195
  },
  {
      "kabko": "Kab. MANOKWARI SELATAN",
      "lat": -0.999,
      "long": 133.0195
  },
  {
      "kabko": "Kab. MAYBRAT",
      "lat": -1.2971,
      "long": 132.3151
  },
  {
      "kabko": "Kab. PEGUNUNGAN ARFAK",
      "lat": -1.1555,
      "long": 133.7142
  },
  {
      "kabko": "Kab. RAJA AMPAT",
      "lat": -1.0915,
      "long": 130.8779
  },
  {
      "kabko": "Kab. SORONG",
      "lat": -1.1223,
      "long": 131.4883
  },
  {
      "kabko": "Kab. SORONG SELATAN",
      "lat": -1.7658,
      "long": 132.1573
  },
  {
      "kabko": "Kab. TAMBRAUW",
      "lat": -0.7819,
      "long": 132.3938
  },
  {
      "kabko": "Kab. TELUK BINTUNI",
      "lat": -1.9057,
      "long": 133.3295
  },
  {
      "kabko": "Kab. TELUK WONDAMA",
      "lat": -2.8552,
      "long": 134.3237
  },
  {
      "kabko": "Kota SORONG",
      "lat": -0.8762,
      "long": 131.2558
  }
]

function toUpLowerCase(str){
  var a = str.split(" ")
  var b = ""
  a.forEach(e => {
    b+=e.substr(0,1).toUpperCase() + e.substr(1).toLowerCase() +" "
  });
  return b
}

function MyCombobox(props) {
  const [selected, setSelected] = useState("")
  const [query, setQuery] = useState('')

  const filteredPeople =
    query === ''
      ? []
      : kabkota.filter((a) => a.kabko.toLowerCase().replace(/\s+/g, '').includes(query.toLowerCase().replace(/\s+/g, ''))
        )


  return (
    <div className="top-16 w-72">
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <Combobox.Input
              className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
              displayValue={(kabkota) => kabkota.kabko}
              placeholder={"Cari kota..."}
              onChange={(event) => {
                setQuery(event.target.value)
              }
            }
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <SelectorIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={
              () => {setQuery('')
                props.cbKota(selected)
                console.log("hahahaha")
              }
            }
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredPeople.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredPeople.map((a) => (
                  <Combobox.Option
                    key={a.lat}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 text-left px-4 pr-4 ${
                        active ? 'bg-teal-600 text-white' : 'text-gray-900'
                      }`
                    }
                    value={a}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {toUpLowerCase(a.kabko)}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-teal-600'
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}

export default function Nav(props) {

  const [saatIni, setSaatIni] = useState("Hari ini")

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src={logo}

                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src={logo}

                  />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        onClick={() => {
                          setSaatIni(item.name)
                          props.cb(item.name)
    
                        }}
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          saatIni==item.name ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>


              <div>
                {/* <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    type="text"
                    name="price"
                    id="price"
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                    placeholder="Cari kota..."
                  />
                </div> */}
                {/* <div className="searchResult bg-white p-3"> */}
                <MyCombobox cbKota={props.cbKota}/>
                {/* </div> */}
              </div>
              
              {/* <TombolMenu /> */}


            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}