import Prod1 from "../../static/produtos/1.png";
import Prod2 from "../../static/produtos/2.png";
import Prod3 from "../../static/produtos/3.png";
import Prod4 from "../../static/produtos/4.png";

const InfoProdutos = [
  {
    id: 1,
    titulo: "Produto 1",
    promocao: {
      temDesconto: false,
      valorOrig: "999,99",
      valorDesc: "",
      rotulo: "",
    },
    parcelamento: "",
    thumbnail: Prod1,
  },
  {
    id: 2,
    titulo: "Produto 2",
    promocao: {
      temDesconto: false,
      valorOrig: "99,99",
      valorDesc: "99,99",
      rotulo: "50%OFF",
    },
    parcelamento: "99x de R$99,99",
    thumbnail: Prod2,
  },
  {
    id: 3,
    titulo: "Produto 3",
    promocao: {
      temDesconto: true,
      valorOrig: "999,99",
      valorDesc: "99,99",
      rotulo: "",
    },
    parcelamento: "",
    thumbnail: Prod3,
  },
  {
    id: 4,
    titulo: "Produto 4",
    promocao: {
      temDesconto: true,
      valorOrig: "999,99",
      valorDesc: "99,99",
      rotulo: "Novo",
    },
    parcelamento: "99x de R$99,99",
    thumbnail: Prod4,
  },
  {
    id: 5,
    titulo: "Produto 1",
    promocao: {
      temDesconto: false,
      valorOrig: "999,99",
      valorDesc: "",
      rotulo: "",
    },
    parcelamento: "",
    thumbnail: Prod1,
  },
  {
    id: 6,
    titulo: "Produto 2",
    promocao: {
      temDesconto: true,
      valorOrig: "999,99",
      valorDesc: "99,99",
      rotulo: "50%OFF",
    },
    parcelamento: "99x de R$99,99",
    thumbnail: Prod2,
  },
  {
    id: 7,
    titulo: "Produto 3",
    promocao: {
      temDesconto: true,
      valorOrig: "999,99",
      valorDesc: "99,99",
      rotulo: "",
    },
    parcelamento: "",
    thumbnail: Prod3,
  },
  {
    id: 8,
    titulo: "Produto 4",
    promocao: {
      temDesconto: true,
      valorOrig: "999,99",
      valorDesc: "99,99",
      rotulo: "Novo",
    },
    parcelamento: "99x de R$99,99",
    thumbnail: Prod4,
  },
];

export default InfoProdutos;
