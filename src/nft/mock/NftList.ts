import fs from 'fs';

export const list = [
  {
    id: 1,
    image: {
      url: 'https://lh3.googleusercontent.com/18TShMG86SijirwXnOWxyCKE8Id8EY5gsmo4uD-ySMYJoANJ0JNLiLPl9WzbprHloDGEGfMXiyYZSxHzv986Q6-W4cAwz4nhFM5eu4s=w381',
      title: 'Awesome NFT',
    },
    author: {
      name: 'Mestre Hudson',
      image: 'https://i.pravatar.cc/64',
    },
    currency: 'ETH',
    isLiked: true,
    likes: 5,
    tags: ['sport', 'game'],
    value: '0.085',
  },
  {
    id: 2,
    image: {
      url: 'https://lh3.googleusercontent.com/kWHrvUfLLRbXQw5ovwZoRAo_wX2hQEsfNiHO3QudsFTTD463IcHDbudL3K3xSDHRx0nEYeYCXO56EtI4pK4fwTFMOoPBcRjOJnMQ6g=w381',
      title: 'Awesome NFT',
    },
    author: {
      name: 'Mestre Hudson',
      image: 'https://i.pravatar.cc/64',
    },
    currency: 'ETH',
    isLiked: false,
    likes: 5,
    tags: ['sport', 'game'],
    value: '0.085',
  },
  {
    id: 3,
    image: {
      url: 'https://lh3.googleusercontent.com/jgiVGpP-dLeGkRqokfleWLaaCQ7LsYMS8-jwRYHfTn_qyX1WPWkWFUrwtHObvZYOGuA9dgDJayfuygs_xqUsjwflsXJMa5HqenwOQw=w381',
      title: 'Awesome NFT',
    },
    author: {
      name: 'Mestre Hudson',
      image: 'https://i.pravatar.cc/64',
    },
    currency: 'ETH',
    isLiked: true,
    likes: 5,
    tags: ['sport', 'game'],
    value: '0.085',
  },
  {
    id: 4,
    image: {
      url: 'https://lh3.googleusercontent.com/x9U3HDIkxk-BF2syTAvgj8wY93c0yfHyW4HoTfmlqKPth5yCCu2LlkMlR3iayQqspbuIeVOMuc6lQAtEuM0h6reKwXjQg7SX2nP2jA=w381',
      title: 'Awesome NFT',
    },
    author: {
      name: 'Mestre Hudson',
      image: 'https://i.pravatar.cc/64',
    },
    currency: 'ETH',
    isLiked: false,
    likes: 5,
    tags: ['sport', 'game'],
    value: '0.085',
  },
  {
    id: 5,
    image: {
      url: 'https://lh3.googleusercontent.com/nnHH5Ufn_g9RptF7nK2cyeL62G5wPwTjKWqIAqdvXM-sXFBnqJmiKLyhLnSV5-f1xnS8xcmkaWcera9fXDVXdOU7sUCWn_Icv6_gZA=w381',
      title: 'Awesome NFT',
    },
    author: {
      name: 'Mestre Hudson',
      image: 'https://i.pravatar.cc/64',
    },
    currency: 'ETH',
    isLiked: true,
    likes: 5,
    tags: ['sport', 'game'],
    value: '0.085',
  },
  {
    id: 6,
    image: {
      url: 'https://lh3.googleusercontent.com/-PO9uA_2M0QuJH2KoudVPTGkgEactMy28yr2Um1u7eP41dL9-syG4RbkF4VNGBMt9v_400oHhznTj7d3OHkLrasr7CMfHOERJfvYBg=w381',
      title: 'Awesome NFT',
    },
    author: {
      name: 'Mestre Ilda',
      image: 'https://i.pravatar.cc/64',
    },
    currency: 'ETH',
    isLiked: true,
    likes: 5,
    tags: ['sport', 'game'],
    value: '0.085',
  },
  {
    id: 7,
    image: {
      url: 'https://lh3.googleusercontent.com/9sBpOtGXAGtq3fSG4m_4VrkFSJ4hgAHi3uxqqcw7bhCS_rN9qO8VFSys_SmZL3FeF4bZ1o2hX_sG4so8n62ADkF88BE9y0zdbrstemQ=w381',
      title: 'Awesome NFT',
    },
    author: {
      name: 'Mestre Ilda',
      image: 'https://i.pravatar.cc/64',
    },
    currency: 'ETH',
    isLiked: false,
    likes: 5,
    tags: ['sport', 'game'],
    value: '0.085',
  },
  {
    id: 8,
    image: {
      url: 'https://lh3.googleusercontent.com/zdjBdA1A-tHI3B35sUHVCSwcYMJmQDjgPC_Zo5K8QgaE-MCwEvjtjRn262_Cu7VJXVdFdChoX1BVT58MFk-Ug9qPg3wsLY0uzi4Jvg=w381',
      title: 'Awesome NFT',
    },
    author: {
      name: 'Mestre Ilda',
      image: 'https://i.pravatar.cc/64',
    },
    currency: 'ETH',
    isLiked: true,
    likes: 5,
    tags: ['sport', 'game'],
    value: '0.085',
  },
  {
    id: 9,
    image: {
      url: 'https://lh3.googleusercontent.com/KZxW8tf5H4LmaJbbfsRpfZTpPOfq19wOS4E5qrpMS1BnKRDzOrq9ylQ39oD-mcs0AzkVqm-MUkJCpiBHLR9zV_OLIS-lABQUU2HE=w381',
      title: 'Awesome NFT',
    },
    author: {
      name: 'Mestre Ilda',
      image: 'https://i.pravatar.cc/64',
    },
    currency: 'ETH',
    isLiked: false,
    likes: 5,
    tags: ['sport', 'game'],
    value: '0.085',
  },
  {
    id: 10,
    image: {
      url: 'https://lh3.googleusercontent.com/rz-o-ilogz7k37WqVmbLHbineEueMN2arklQEcvvGwU7ltUEhWfpjOUCjBzRu2j7i4W8f4qDhSQFZ827bc95mgqXRDJ8hn-WEv7LtA=w381',
      title: 'Awesome NFT',
    },
    author: {
      name: 'Mestre Pedro',
      image: 'https://i.pravatar.cc/64',
    },
    currency: 'ETH',
    isLiked: true,
    likes: 5,
    tags: ['sport', 'game'],
    value: '0.085',
  },
  {
    id: 11,
    image: {
      url: 'https://lh3.googleusercontent.com/X0SvWzn8gXojeC5QBebIAjPnn7YJm-e-JIJK2nrGFnk-_3_yGbpfwUHFzAQb8iRuyh9NmJhZfsp_WcEkUjTzWsj_DT2guIOztMeu_hI=w381',
      title: 'Awesome NFT',
    },
    author: {
      name: 'Mestre Pedro',
      image: 'https://i.pravatar.cc/64',
    },
    currency: 'ETH',
    isLiked: false,
    likes: 5,
    tags: ['sport', 'game'],
    value: '0.085',
  },
  {
    id: 12,
    image: {
      url: 'https://lh3.googleusercontent.com/L-09LeSgYaZb_R34QMfplGOwJhMPZcclL-9PXyQACO6-4lipI7nBgmKpUQgyHj5NspcLt_vWU9BAXl382VFs9yGiq8nqAuSh1_Lmxw=w381',
      title: 'Awesome NFT',
    },
    author: {
      name: 'Mestre Pedro',
      image: 'https://i.pravatar.cc/64',
    },
    currency: 'ETH',
    isLiked: true,
    likes: 5,
    tags: ['sport', 'game'],
    value: '0.085',
  },
];

function base64_encode(file: any) {
  const bitmap = fs.readFileSync(file);
  // convert binary data to base64 encoded string
  return new Buffer(bitmap).toString('base64');
}
